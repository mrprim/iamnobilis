import { FC } from "react";
import useModalStore from "../../store/modal";

const Footer: FC = () => {
  const setModalName = useModalStore((state) => state.toggle)
  return (
    <div>
      <div className="flex flex-row justify-between p-6 text-sm text-white bg-violet-950 items-end">
        <div className="flex-grow basis-0 text-left text-xs opacity-60">
          <span className="max-sm:hidden">Copyright </span>© 2024 Sergio Rodriguez. <span className="max-sm:block">All Rights Reserved.</span>
        </div>
        <div className="flex-grow basis-0 text-right">
          <span className=" hover:cursor-pointer" onClick={() => setModalName('acknowledgments')}>
            Acknowledgments
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer;