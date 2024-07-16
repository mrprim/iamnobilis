import aVsAn from '../../../utils/aVsAn'
import useCharacterStore from '../../../store/character';
import { shallow } from 'zustand/shallow';
import clsx from 'clsx';
import { FCwithClass } from '../../..';

const Zu: FCwithClass = ({ className }) => {
  const character = useCharacterStore(s => s.character, shallow);

  return (
    <div className={clsx(className, 'text-lg')}>
      <span className={clsx({ highlight: character.stats.aspect })}>
        I am
      </span>
      {' ' + aVsAn(character.identity) + ' '}

      <span className={clsx("underline font-script text-2xl", { highlight: character.stats.skills })}>
        {character.identity}
      </span>

      {' who is the master of '}

      <span className="underline font-script text-2xl">
        {character.adjective}
      </span>

      {' '}

      <span className={clsx("underline font-script text-2xl", { highlight: character.stats.domain })}>
        {character.estate.toLowerCase()}
      </span>

      {'-style martial arts.'}
    </div>
  )
}

export default Zu
