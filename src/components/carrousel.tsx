import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { useRef, useState } from "react";
import ButtonArrow from "./buttons";
import ImageModal, { ImageModalProps } from "./image_modal";
interface CarrouselProps {
  images: string[];
}

export default function Carrousel({ images }: CarrouselProps) {
  const slider = useRef<Slider>(null);
  const nav = useRef<Slider>(null);
  const [modalProps, setModalProps] = useState<ImageModalProps>({
    isOpen: false,
    alt: "",
    url: "",
  });

  const handleThumbnailClick = (index: number) => {
    if (slider.current) {
      slider.current.slickGoTo(index);
    }
  };

  return (
    <div className="carrousel_container">
      <Slider
        dots={false}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        ref={slider}
        className="carrousel"
        asNavFor={nav.current!}
      >
        {images.map((url, index) => (
          <div key={index} className="image_container">
            <img
              src={url}
              alt={`Imagem ${index + 1}`}
              style={{ flex: 1, maxHeight: "100%", maxWidth: "100%" }}
              onClick={() =>
                setModalProps({ alt: `Imagem ${index + 1}`, url, isOpen: true })
              }
            />
          </div>
        ))}
      </Slider>
      <Slider
        swipeToSlide={false}
        infinite={false}
        focusOnSelect
        slidesToShow={7}
        swipe={false}
        arrows
        ref={nav}
        className="carrousel carrousel_navigation"
        autoplay
        autoplaySpeed={7}
        speed={2}
      >
        {images.map((url, index) => (
          <div key={index}>
            <img
              src={url}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => handleThumbnailClick(index)}
              width={50}
            />
          </div>
        ))}
      </Slider>
      <ButtonArrow
        className="arrow_left"
        side="l"
        onClick={() => {
          slider.current?.slickPrev();
        }}
      />
      <ButtonArrow
        className="arrow_right"
        side="r"
        onClick={() => {
          slider.current?.slickNext();
        }}
      />
      <ImageModal
        {...modalProps}
        closeModal={() => {
          setModalProps({ ...modalProps, isOpen: false });
        }}
      />
    </div>
  );
}
