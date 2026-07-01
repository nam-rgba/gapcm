import Experience from "../../components/experiences/Exp";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import * as React from "react";


gsap.registerPlugin(useGSAP);
const {useRef} = React;

export const Home = () => {

  const boxRef = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({});



  const onClickName = contextSafe(
    () => {
          gsap.to(boxRef.current, { x: 350 });
        }
  )

  return (
    <div className="w-full h-full relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <Experience />
      </div>
      <div
        onClick={onClickName}
        ref={boxRef}
        className="absolute top-0 left-0  text-white text-4xl font-bold  cursor-pointer"
      >
        Nam
      </div>
    </div>
  );
};
