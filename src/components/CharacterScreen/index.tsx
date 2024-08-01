import clsx from "clsx";
import { FCwithClass } from "../..";
import Controls from "./CharacterControls";
import CharacterDescription from "./CharacterDescription";
import TypeDescription from "./CharacterType";
import { useEffect, useRef } from "react";
import useCharacterStore from "../../store/character";

const CharacterScreen: FCwithClass = ({ className }) => {
  const setDescriptionRef = useCharacterStore((state) => state.setDescriptionRef);
  const descriptionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setDescriptionRef(descriptionRef)
  })
  return (
    <div className={clsx(className, "h-full flex flex-col items-center pt-10 gap-4 p-5")}>
      <TypeDescription />
      <div ref={descriptionRef}>
        <CharacterDescription className="min-h-24" />
      </div>
      <Controls className="mt-6" />
    </div>

  )
}

export default CharacterScreen;