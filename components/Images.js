import Image from "next/image";
import { useState } from "react";
import SingleImage from "./SingleImage";

const images = [
  { src: "/images/kdb1.jpg", alt: "kdb", width: 362, height: 226 },
  { src: "/images/kdb2.jpg", alt: "kdb", width: 362, height: 226 },
  { src: "/images/kdb3.jpg", alt: "kdb", width: 362, height: 226 },
  { src: "/images/kdb4.jpg", alt: "kdb", width: 362, height: 226 },
  { src: "/images/kdb5.jpg", alt: "kdb", width: 362, height: 226 },
  { src: "/images/kdb6.jpg", alt: "kdb", width: 362, height: 226 },
];

const Images = () => {
  const [modal, setModal] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const handleModal = (i) => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
    setImageIndex(i);
    setModal(true);
  };

  return (
    <div className="mt-[65px] flex flex-wrap w-full gap-3">
      {/* <SingleImage /> */}
      {images.map((image, i) => (
        <div key={i} className="w-[48%]" onClick={() => handleModal(i)}>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            objectFit="cover"
            className="rounded-2xl cursor-pointer"
          />
        </div>
      ))}
      {modal && (
        <SingleImage image={images[imageIndex].src} setModal={setModal} />
      )}
    </div>
  );
};

export default Images;
