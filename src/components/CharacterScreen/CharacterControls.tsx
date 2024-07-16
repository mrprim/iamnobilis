import { FCwithClass } from "../..";
import useCharacterStore from "../../store/character"

const Controls: FCwithClass = ({ className }) => {
  const reroll = useCharacterStore((s) => s.reroll);

  return (
    <div className={className}>
      <button className="font-bold bg-violet-800 hover:bg-violet-900 rounded-3xl py-2 px-6" onClick={reroll}>
        Try again
      </button>
    </div>
  )
}

export default Controls;