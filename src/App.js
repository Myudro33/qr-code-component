import React from "react";
import './App.css'
import img from './assets/image-qr-code.png'

const App = () => {
  return (
    <div className="w-full h-screen bg-[#F2F2F2] flex justify-center items-center">
      <div className="w-[320px] h-[500px] bg-white p-4 rounded-2xl flex flex-col items-center">
        <div className="w-full h-[60%] bg-[#2C7DFA]  rounded-2xl flex justify-center  overflow-hidden items-center">
          <img src={img} alt="img" />
        </div>
        <p className="w-full font-bold text-lg text-center text-[#1F314F] font-[outfit] mt-4">Improve your front-end <br/> skills by building projects</p>
        <p className="w-full font-normal text-[#7D889E] text-center mt-5">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>
  );
};

export default App;
