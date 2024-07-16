import { FC } from "react";
import useModalStore from "../../store/modal";

const Footer: FC = () => {
  const setModalName = useModalStore((state) => state.toggle)
  return (
    <div className="flex flex-row justify-between p-6 text-sm text-violet-300">
      <div className="flex-grow basis-0 text-left">Copyright © 2024 Sergio Rodriguez, All Rights Reserved.</div>
      <div className="flex-grow basis-0 text-right">
        <span className="text-violet-300 hover:text-white hover:cursor-pointer" onClick={() => setModalName('acknowledgments')}>
          Acknowledgments
        </span>
      </div>
    </div>
  )
}

export default Footer;