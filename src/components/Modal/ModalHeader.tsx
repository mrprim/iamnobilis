import { FC, ReactNode } from "react";

type ModalHeaderProps = {
  children: ReactNode;
}

const ModalHeader: FC<ModalHeaderProps> = ({ children }) =>

  <div className="px-6 py-3 border-b-black border-b-2 font-bold">
    {children}
  </div>

export default ModalHeader

