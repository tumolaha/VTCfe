import "react-image-gallery/styles/css/image-gallery.css";
import ReactImageGallery from "react-image-gallery";
const images = [
  {
    original: "/public/images/giay01.jpg",
    thumbnail: "/public/images/giay01.jpg",
  },
  {
    original: "/public/images/giay01.jpg",
    thumbnail: "/public/images/giay01.jpg",
  },
  {
    original: "/public/images/giay01.jpg",
    thumbnail: "/public/images/giay01.jpg",
  },
  {
    original: "/public/images/giay01.jpg",
    thumbnail: "/public/images/giay01.jpg",
  },
  {
    original: "/public/images/giay01.jpg",
    thumbnail: "/public/images/giay01.jpg",
  },
  {
    original: "/public/images/giay01.jpg",
    thumbnail: "/public/images/giay01.jpg",
  },
  {
    original: "/public/images/giay01.jpg",
    thumbnail: "/public/images/giay01.jpg",
  },
  {
    original: "/public/images/giay01.jpg",
    thumbnail: "/public/images/giay01.jpg",
  },
];

const onEventTrigger = (eventName: string) => {
  console.log(`Event triggered: ${eventName}`);
};

export const ImageSliderComponent = () => {
  return (
    <div className="max-h-full max-w-full">
      <ReactImageGallery
        additionalClass="max-h-full max-w-full"
        items={images}
        infinite={false}
        lazyLoad={true}
        autoPlay={false}
        slideDuration={100}
        onSlide={() => onEventTrigger("onSlide")}
        onClick={() => onEventTrigger("onClick")}
        onTouchMove={() => onEventTrigger("onTouchMove")}
      />
    </div>
  );
};
