import { FCwithClass } from "../../..";
import useCharacterStore from "../../../store/character";
import Button from "../../DesignSystem/Button";
import CopyCharacterButton from "./CopyCharacterButton";

const Controls: FCwithClass = ({ className }) => {
  const reroll = useCharacterStore((s) => s.reroll);

  return (
    <div className={className}>
      <div className="my-2">
        <CopyCharacterButton />
      </div>
      <Button onClick={() => reroll()} >
        Try again
      </Button>
    </div>
  )
}

export default Controls;