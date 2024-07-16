import { FC } from "react";
import ModalBody from "./ModalBody";
import ModalHeader from "./ModalHeader";


const Acknowledgments: FC = () => {
  return (
    <>
      <ModalHeader>
        Acknowledgments
      </ModalHeader>
      <ModalBody>
        <p className="mb-4">
          A huge thank you to Doctor Jenna Katerin Moran, creator and author of the <span className="italic">Nobilis</span> roleplaying game.  I've been making Powers and imagining their nonsense for decades all thanks to her.  You can check out her RPGs at <a href="https://www.drivethrurpg.com/en/publisher/4195/jenna-katerin-moran" className="underline font-bold">DriveThruRPG</a>.
        </p>
        <p>
          And thanks to Felix for making <a target="_blank" href="https://docs.google.com/document/d/1oeTWDAhVmTqJvhKEZbncfig471zNVECe3P6e51zs-pA/edit?usp=sharing" className="underline italic font-bold">I am Nobilis</a>, a really cool mini rpg of Nobilis.
        </p>
      </ModalBody>
    </>
  )
}

export default Acknowledgments;