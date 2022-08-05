import Image from "next/image";
import ClickAwayListener from "react-click-away-listener";

const SingleImage = ({ image, setModal }) => {
  const handleClose = () => {
    document.body.style.overflow = "auto";
    setModal(false);
  };

  return (
    <>
      <div className="w-full h-screen bg-black opacity-20 absolute top-0 right-0 overflow-hidden"></div>
      <div className="w-full h-screen md:py-16 md:px-12 py-5 px-5 absolute top-0 right-0">
        <span
          className="absolute top-5 right-5 md:top-9 md:right-40 font-bold text-3xl cursor-pointer z-20"
          onClick={handleClose}
        >
          X
        </span>
        <ClickAwayListener onClickAway={handleClose}>
          <div className="w-full h-full relative">
            <Image src={image} alt="kdb" objectFit="contain" layout="fill" />
          </div>
        </ClickAwayListener>
      </div>
    </>
  );
};

export default SingleImage;
