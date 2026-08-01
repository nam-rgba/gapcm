#!/usr/bin/env node

import { Command } from "commander";
import fs from "fs-extra";
import path from "path";
import ejs from "ejs";
import { pascalCase, camelCase } from "change-case";

const program = new Command();

program.name("gapcm").description("GAPCM resource generator");

program
  .command("add <name>")
  .alias("g")
  .description("Generate resource")
  .action(async (name) => {
    const moduleName = name;
    const pascalName = pascalCase(name);
    const camelName = camelCase(name);

    const templates = [
      {
        name: "dto",
        path: "dto.template.ejs",
        outputDir: "src/entities/dto",
        outputExt: ".dto.ts",
      },
      {
        name: "entity",
        path: "entity.template.ejs",
        outputDir: "src/entities",
        outputExt: ".entity.ts",
      },
      {
        name: "repository",
        path: "repository.template.ejs",
        outputDir: "src/repository",
        outputExt: ".repository.ts",
      },
      {
        name: "service",
        path: "service.template.ejs",
        outputDir: "src/services",
        outputExt: ".service.ts",
      },
      {
        name: "controller",
        path: "controller.template.ejs",
        outputDir: "src/controllers",
        outputExt: ".controller.ts",
      },
      {
        name: "route",
        path: "route.template.ejs",
        outputDir: "src/routes",
        outputExt: ".admin.ts",
      },
    ];

    // step 1: render các file
    for (const temp of templates) {
      const templateContent = await fs.readFile(
        path.join(__dirname, `../templates/${temp.path}`),
        "utf-8",
      );

      const rendered = ejs.render(templateContent, {
        moduleName,
        pascalName,
        camelName,
      });

      const outputPath = path.join(
        process.cwd(),
        temp.outputDir,
        `${camelName}${temp.outputExt}`,
      );

      await fs.outputFile(outputPath, rendered);
      console.log(`Generated: ${outputPath}`);
    }

    // step 2: add và dùng ở container
    const containerPath = path.join(process.cwd(), "src/container.ts");
    const importRepo = `import { ${pascalName}Repository } from '~/repository/${camelName}.repository.js';`;
    const importService = `import { ${pascalName}Service } from '~/services/${camelName}.service.js';`;

    const registrationCode = `\n// ${camelName}\nconst ${camelName}Repo = new ${pascalName}Repository(AppDataSource);\nexport const ${camelName}Service = new ${pascalName}Service(${camelName}Repo);\n`;

    const containerExists = await fs.pathExists(containerPath);

    if (!containerExists) {
      // TH1: File container.ts CHƯA TỒN TẠI -> Tạo mới từ đầu
      const initialContent = `import { AppDataSource } from '~/data-source.js';\n${importRepo}\n${importService}\n${registrationCode}`;
      await fs.outputFile(containerPath, initialContent);
      console.log(`Created new container file: ${containerPath}`);
    } else {
      // TH2: File container.ts ĐÃ TỒN TẠI -> Append thêm vào
      let content = await fs.readFile(containerPath, "utf-8");

      // Kiểm tra xem Service này đã được đăng ký trong container chưa
      if (content.includes(`${camelName}Service`)) {
        console.log(
          `[Skip] ${camelName}Service already exists in container.ts`,
        );
      } else {
        // Chèn 2 dòng import vào đầu file và append đoạn khởi tạo vào cuối file
        content =
          `${importRepo}\n${importService}\n` + content + registrationCode;
        await fs.outputFile(containerPath, content);
        console.log(`Updated container file: ${containerPath}`);
      }
    }
  });

program.parse(process.argv);
