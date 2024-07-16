import aVsAn from '../../../utils/aVsAn'
import useCharacterStore from '../../../store/character';
import { shallow } from 'zustand/shallow';
import clsx from 'clsx';
import { FCwithClass } from '../../..';

const Noble: FCwithClass = ({ className }) => {
  const character = useCharacterStore(s => s.character, shallow);

  return (
    <div className={clsx(className, 'text-lg')}>
      <span className={clsx({ highlight: character.stats.aspect })}>
        {'I am'}
      </span>

      {' ' + aVsAn(character.identity) + ' '}

      <span className={clsx("underline font-script text-2xl", { highlight: character.stats.skills })}>
        {character.identity.toLowerCase()}
      </span>

      {' who is the '}

      <span className="underline font-script text-2xl">
        {character.adjective.toLowerCase()}
      </span>

      {' '}

      <span className={clsx({ highlight: character.stats.treasure })}>
        {'god'}
      </span>

      {' '}

      <span className={clsx({ highlight: character.stats.persona })}>
        {'of '}
        <span className={clsx("underline font-script text-2xl", { highlight: character.stats.domain })}>
          {character.estate.toLowerCase()}
        </span>
      </span>
      {'.'}
    </div>
  )
}

export default Noble
