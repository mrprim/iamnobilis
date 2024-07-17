import { CharacterType } from "../../../model/character"
import useCharacterStore from "../../../store/character"
import CharacterTypeDropdown from "./CharacterTypeDropdownMenu"

const descriptions: Record<CharacterType, string> = {
  noble: 'One of the Powers of the world.',
  zu: 'A mysterious warrior who dwells in lands where miracles cannot enter'
}

const TypeDescription = () => {
  const type = useCharacterStore(state => state.character.type)

  return (
    <div className="text-violet-300">

      <div className="font-bold">
        I am a <CharacterTypeDropdown className="font-script uppercase text-xl underline" currentValue={type} />.
      </div>

      <div className="text-sm italic">
        {descriptions[type]}
      </div>
    </div>
  )
}

export default TypeDescription;