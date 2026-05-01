import { Steps } from "antd";
import { Footer } from "./Footer";
import { useStep } from "../store/steps.store";

export const steps = [
  {
    title: "Module Information",
    path: "module-info",
  },
  {
    title: "Fields and Relationships",
    path: "module-field",
  },
  {
    title: "Permissions",
    path: "module-permission",
  },
];

export const StepsCreation = ({ children }: { children: React.ReactNode }) => {

    const currentStep = useStep((state) => state.current)

    const handleMoveNext = ()=>{
        
    }

  return (
    <div className="px-6 min-h-screen flex flex-col">
      <Steps className="w-full" items={steps}  current={currentStep}/>
      <div className="flex-1">
        {children}
      </div>
    <Footer onNext={handleMoveNext} onPrev={() => {}} okText="Next" cancelText="Previous" />
    </div>
  );
};
