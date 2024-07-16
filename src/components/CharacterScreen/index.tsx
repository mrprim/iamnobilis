import clsx from "clsx";
import { FCwithClass } from "../..";
import Controls from "./CharacterControls";
import Character from "./CharacterDescription";
import TypeDescription from "./CharacterTypeDescription";

const CharacterScreen: FCwithClass = ({ className }) => {
  return (
    <div className={clsx(className, "h-full flex flex-col items-center pt-10 gap-4 p-5")}>
      <TypeDescription />
      <Character className="min-h-24" />
      <Controls className="mt-6" />
    </div>

  )
}

export default CharacterScreen;