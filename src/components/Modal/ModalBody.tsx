import { FC, ReactNode } from "react";

type ModalBodyProps = {
  children: ReactNode;
}

const ModalBody: FC<ModalBodyProps> = ({ children }) =>

  <div className="p-6">
    {children}
  </div>

export default ModalBody

