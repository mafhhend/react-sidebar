import { FaBars } from "react-icons/fa";
// import { useContext } from "react";
import { AppContext, useGlobalContext } from "./Context";

export default function Home() {
  // var data = useContext(AppContext); //hello
  // or
  var { openSidebar, openModal } = useGlobalContext(); //hello

  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>
        show modal
      </button>
    </main>
  );
}
