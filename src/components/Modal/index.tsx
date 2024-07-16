import { FC, ReactNode } from "react";
import useModalStore from "../../store/modal"
import Acknowledgments from "./Acknowledgments";

const getModalContents = (name: string | null): ReactNode => {
  if (name === 'acknowledgments') {
    return <Acknowledgments />;
  } else {
    return null;
  }
}

type GlassProps = {
  toggle: () => void;
  children: ReactNode;
}

const Glass: FC<GlassProps> = ({ children, toggle }) => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-opacity-20 bg-neutral-950 flex flex-col items-center pt-14" onClick={() => toggle()}>
      {children}
    </div>
  )
};

type BoxProps = { children: ReactNode };

const ModalBox: FC<BoxProps> = ({ children }) =>
  <div className="text-purple-300 rounded-lg bg-neutral-800 size-8/12" onClick={(ev) => ev.stopPropagation()}>
    {children}
  </div>

const Modal = () => {
  const modalName = useModalStore(state => state.name);
  const toggle = useModalStore(state => state.toggle);


  if (!modalName) return null;
  const contents = getModalContents(modalName);
  if (!contents) return null;

  return (
    <Glass toggle={toggle}>
      <ModalBox>
        {contents}
      </ModalBox>
    </Glass>
  )
}

export default Modal;