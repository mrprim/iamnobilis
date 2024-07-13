import { FC, useEffect } from 'react'
import aVsAn from '../utils/aVsAn'
import useCharacterStore from '../store/character';
import { shallow } from 'zustand/shallow';

const getHighlightableClass = (name: string, highlight: string, isStat?: boolean) => (isStat ? 'stat' : '') + (highlight === name ? ' highlight' : '')

const Noble: FC = () => {
  const props = useCharacterStore(s => s.character, shallow);
  const reroll = useCharacterStore(s => s.reroll);

  useEffect(() => {
    if (!!props) return;
    reroll();

  }, [!!props, reroll]);


  if (!props) return null;
  return (
    <div className='w-full text-center'>
      <span className={getHighlightableClass('aspect', props.highlight)}>
        {'I am'}
      </span>

      {' ' + aVsAn(props.identity) + ' '}

      <span className={getHighlightableClass('skills', props.highlight, true)}>
        {props.identity.toLowerCase()}
      </span>

      {' who is the '}

      <span className='stat'>
        {props.adjective.toLowerCase()}
      </span>

      {' '}

      <span className={getHighlightableClass('treasure', props.highlight)}>
        {'god'}
      </span>

      {' '}

      <span className={getHighlightableClass('persona', props.highlight)}>
        {'of '}
        <span className={getHighlightableClass('estate', props.highlight, true)}>
          {props.estate.toLowerCase()}
        </span>
      </span>
      {'.'}
    </div>
  )
}

export default Noble
