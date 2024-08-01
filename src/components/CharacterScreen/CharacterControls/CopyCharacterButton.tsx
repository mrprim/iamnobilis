import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FCwithClass } from "../../..";
import useCharacterStore from "../../../store/character";
import copyToClipboard from "../../../utils/copyToClipboard";
import { faCheck, faCopy } from "@fortawesome/free-solid-svg-icons";
import { useCallback, useState } from "react";
import Button from "../../DesignSystem/Button";

const CopyCharacterButton: FCwithClass = () => {
  const [copying, setCopying] = useState<boolean>(false);
  const descriptionRef = useCharacterStore((state) => state.descriptionRef)

  const onClick = useCallback(async () => {
    setCopying(true)
    const value = descriptionRef?.current?.innerText ?? ''

    await copyToClipboard(value)

    setTimeout(() => setCopying(false), 3000)
  }, []);

  if (!descriptionRef?.current) return null;

  return <Button outline onClick={onClick} active={copying} disabled={copying}>
    <FontAwesomeIcon icon={copying ? faCheck : faCopy} />
  </Button>
}

export default CopyCharacterButton;