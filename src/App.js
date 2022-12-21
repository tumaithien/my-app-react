import { useState } from "react";
import "./App.css";
import Counter from "./components/advanced-react/control-props/Counter";
import Modal from "./components/modal/Modal";
import ModalAdvance from "./components/modal/ModalAdvance";
import SimpleTab from "./components/SimpleTab";
import Tooltip from "./components/tooltip/Tooltip";
import useClickOutside from "./hook/useClickOutside";
import Toggle from "./state/Toggle";
// import TextareaAutoResize from "./components/TextareaAutoResize";
// import Game from "./components/tictoctoe/Game";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    // <>
    //   <button
    //     className="outline-none rounded-lg p-3 text-lg bg-blue-500 text-white"
    //     onClick={handleClickShowModal}
    //   >
    //     Open modal
    //   </button>
    //   <Modal handleClose={handleClose} open={show}></Modal>
    // </>
    <>
      <button
        className="p-5 rounded-lg text-white text-center bg-blue-400 ml-5"
        onClick={() => setOpenModal(true)}
      >
        Open modal
      </button>
      <ModalAdvance
        visible={openModal}
        onClose={() => setOpenModal(false)}
        bodyClassName="w-full max-w-[400px] bg-white p-10 rounded-lg"
      >
        <div className="flex flex-col gap-3 mb-5">
          <label htmlFor="email" className="text-sm cursor-pointer">
            Email address
          </label>
          <input
            type="email"
            className="w-full text-sm leading-normal bg-[#E7ECF3] rounded-lg p-4"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col gap-3 mb-5">
          <label htmlFor="password" className="text-sm cursor-pointer">
            Password
          </label>
          <input
            type="password"
            className="w-full text-sm leading-normal bg-[#E7ECF3] rounded-lg p-4"
            placeholder="Enter your password"
          />
        </div>
        <button className="w-full p-4 text-base font-semibold text-white bg-[#316BFF] rounded-lg">
          Sign in
        </button>
      </ModalAdvance>
      <br />
      <br />
      <Tooltip text="Welcome to my house">This is a tooltip</Tooltip>
      {/* <SimpleTab></SimpleTab> */}
      <Toggle></Toggle>
      <input
        type="text"
        name=""
        className="p-2 border border-slate-800 rounded-sm"
        id=""
      />
    </>
  );
}

export default App;
