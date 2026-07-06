import Experience from "../../components/experiences/Exp";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import * as React from "react";

gsap.registerPlugin(useGSAP);
const { useRef } = React;

export const Home = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({});

  const onClickName = contextSafe(() => {
    gsap.to("#g-name", { x: 350 });
  });

  return (
    <div className="w-full h-full relative" 
        ref={boxRef}
    
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <Experience />
      </div>
      <div
        onClick={onClickName}
        id="g-name"
        className="absolute top-0 left-0  text-white text-4xl font-bold  cursor-pointer"
      > 
          Nam đang code
      </div>
    </div>
  );
} 