import { ModuleCreateStep } from "../../../../routes/permission";


export const url2step = (url: ModuleCreateStep) => {
    if(url === ModuleCreateStep.Information) return 0;
    if(url === ModuleCreateStep.Field) return 1;
    if(url === ModuleCreateStep.Permission) return 2;
    return 0;
}