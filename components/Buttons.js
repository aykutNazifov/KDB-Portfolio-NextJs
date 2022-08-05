import { BiArrowToBottom } from "react-icons/bi";

const Buttons = () => {
  return (
    <div className="mt-[50px] mb-[75px] flex w-full items-center justify-between">
      <button className="w-[45%] h-14 md:w-[290px] md:h-20 bg-[#FFE071] rounded-xl text-[22px] font-medium text-[#3D3D3D] flex items-center gap-2 justify-center hover:opacity-50 transition-opacity ease-in duration-300">
        View Bio <BiArrowToBottom size={25} />
      </button>
      <button className="w-[45%] h-14 md:w-[290px] md:h-20 bg-[#171F26] rounded-xl border border-solid border-[#3E64AA] text-[22px] font-medium text-[#A3ABB2] hover:opacity-50 transition-opacity ease-in duration-300">
        Contact Me
      </button>
    </div>
  );
};

export default Buttons;
