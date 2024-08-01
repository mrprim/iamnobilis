import { Character, isCharacter } from "../model/character";

const encode = (data: Character): string => {
  return btoa(JSON.stringify(data));
}

const decode = (data: string): Character | null => {
  try {
    const decoded = JSON.parse(atob(data)) as Character;

    return isCharacter(decoded) ? decoded : null;
  } catch (e) {
    return null;
  }
}

export { encode, decode }