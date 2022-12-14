import { FC } from "react";
import { Slide } from "react-slideshow-image";
import style from "./ProductSlideshow.module.css";
import "react-slideshow-image/dist/styles.css";
interface Props {
  images: string[];
}
export const ProcutSlideshow: FC<Props> = ({ images }) => {
  console.log(`url(/products/${images[0]})`);

  return (
    <Slide>
      {images.map((image) => (
        <div key={image} className={style["each-slide"]}>
          <div style={{ backgroundImage: `url(/products/${image})` }}></div>
        </div>
      ))}
    </Slide>
  );
};
