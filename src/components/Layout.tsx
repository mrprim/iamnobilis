import { FCwithClass } from "..";
import CharacterScreen from "./CharacterScreen";
import Footer from "./Footer";
import Header from "./Header";
import Modal from "./Modal";

const Body: FCwithClass = ({ className }) => <CharacterScreen className={className} />

const Layout = () =>
  <div className="min-h-screen flex flex-col justify-between text-center">
    <Modal />
    <Header />
    <Body className="flex-grow" />
    <Footer />
  </div>

export default Layout
