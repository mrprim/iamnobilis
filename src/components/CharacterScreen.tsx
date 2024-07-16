import clsx from "clsx";
import { FCwithClass } from "..";
import Controls from "./Controls";
import Character from "./Character";
import useCharacterStore from "../store/character";

const CharacterScreen: FCwithClass = ({ className }) => {
  const type = useCharacterStore(state => state.character.type)

  return (
    <div className={clsx(className, "h-full flex flex-col items-center pt-10 gap-4")}>
      <div className="text-gray-400">
        I am a <span className="font-script uppercase text-xl">{type}</span>!
      </div>
      <Character />
      <Controls className="mt-6" />
    </div>

  )
}

export default CharacterScreen;