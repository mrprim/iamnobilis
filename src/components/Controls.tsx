import { FCwithClass } from "..";
import useCharacterStore from "../store/character"

const Controls: FCwithClass = ({ className }) => {
  const reroll = useCharacterStore((s) => s.reroll);

  return (
    <div className={className}>
      <button onClick={reroll}>Reroll</button>
    </div>
  )
}

export default Controls;