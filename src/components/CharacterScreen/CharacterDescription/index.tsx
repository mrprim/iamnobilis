import { shallow } from "zustand/shallow";
import Noble from "./Noble"
import useCharacterStore from "../../../store/character";
import { FCwithClass } from "../../..";
import Zu from "./Zu";

const Character: FCwithClass = ({ className }) => {
  const type = useCharacterStore(s => s.character.type, shallow);

  if (type === 'noble') {
    return <Noble className={className} />
  }
  if (type === 'zu') {
    return <Zu className={className} />
  }
}

export default Character;