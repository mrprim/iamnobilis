import clsx from "clsx";
import { FC, useCallback, useMemo } from "react";
import uniqid from 'uniqid';
import { CharacterType } from "../../../model/character";
import useCharacterStore from "../../../store/character";

const Option: FC<{ optionValue: CharacterType, currentValue: CharacterType }> = ({ optionValue, currentValue }) => {
  const generate = useCharacterStore((state) => state.reroll);
  const isSelected = optionValue === currentValue;

  const onClick = useCallback(() => {
    if (isSelected) return;
    generate(optionValue);
  }, [isSelected, optionValue]);

  return (
    <li onClick={onClick} className={clsx("uppercase text-left block text-violet-300 px-4 py-2 w-full hover:bg-violet-900 hover:cursor-pointer",
      { 'text-white': isSelected }
    )}>
      <div className="inline-block w-4"> {isSelected && '>'}</div>
      {optionValue}
    </li>

  )
};

const MenuOptions: FC<{ currentValue: CharacterType }> = ({ currentValue }) => {
  const options: CharacterType[] = ['noble', 'zu'];

  return (
    <ul className="py-2 font-script text-sm text-gray-700 dark:text-gray-200">
      {options.map((option) => <Option key={option} currentValue={currentValue} optionValue={option} />)}
    </ul >
  )
}

type Props = {
  currentValue: CharacterType;
  className?: string;
}

const CharacterTypeDropdown: FC<Props> = ({ currentValue, className }) => {
  const id = useMemo(() => uniqid(), []);

  return (
    <>
      <button className={className} data-dropdown-toggle={id} data-dropdown-placement="right-end" data-dropdown->
        {currentValue}
      </button>
      <div id={id} className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
        <MenuOptions currentValue={currentValue} />
      </div>
    </>
  )
}

export default CharacterTypeDropdown;