import { Steps } from "antd";
import { steps } from "../../../utils/steps";
import { useLocation } from "react-router";
import { url2step } from "../utils/url2step";
import type { ModuleCreateStep } from "../../../../routes/permission";


export const StepsCreation = ({ children }: { children: React.ReactNode }) => {

  const {pathname} = useLocation();

    const step = url2step(pathname as ModuleCreateStep);

  


  return (
    <div className="px-6 min-h-screen flex flex-col">
      <Steps className="w-full" items={steps}  current={step}/>
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
};
