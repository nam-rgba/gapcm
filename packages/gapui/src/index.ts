import { Command } from 'commander';
import fs from 'fs-extra';
import path from 'path';
import ejs from 'ejs';
import { pascalCase, camelCase } from 'change-case';

const program = new Command();

program
  .command('g <name>') // Ví dụ: my-gen g User
  .description('Generate resource')
  .action(async (name) => {
    const moduleName = name;
    const pascalName = pascalCase(name);
    const camelName = camelCase(name);
    
    const templates = [
      { name: 'entity', path: 'entity.template.ejs', outputDir: 'src/entities', outputExt: '.entity.ts' },
      { name: 'repository', path: 'repository.template.ejs', outputDir: 'src/repository', outputExt: '.repository.ts' },
      { name: 'service', path: 'service.template.ejs', outputDir: 'src/services', outputExt: '.service.ts' },
      { name: 'controller', path: 'controller.template.ejs', outputDir: 'src/controllers', outputExt: '.controller.ts' },
      { name: 'route', path: 'route.template.ejs', outputDir: 'src/routes', outputExt: '.admin.ts' }
    ];

    for (const temp of templates) {
      const templateContent = await fs.readFile(
        path.join(__dirname, `../templates/${temp.path}`), 'utf-8'
      );
      
      const rendered = ejs.render(templateContent, { moduleName, pascalName, camelName });
      
      const outputPath = path.join(process.cwd(), `${temp.outputDir}/${camelName}${temp.outputExt}`);
      
      await fs.outputFile(outputPath, rendered);
      console.log(`Generated: ${outputPath}`);
    }
  });

program.parse(process.argv);