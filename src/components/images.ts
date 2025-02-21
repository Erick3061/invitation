import { Image } from "react-grid-gallery";
import one from '../galery/1.webp';
import two from '../galery/2.webp';
import three from '../galery/3.webp';
import four from '../galery/4.webp';
import five from '../galery/5.webp';
import six from '../galery/6.webp';

export interface CustomImage extends Image {
  original: string;
}
export const images: Array<CustomImage> = [
  {
    src: one,
    original: one,
    width:0,
    height: 0,
  },
  {
    src: two,
    original: two,
   width:0,
    height: 0,
  },
  {
    src: three,
    original: three,
   width:0,
    height: 0,
  },
  {
    src: four,
    original: four,
   width:0,
    height: 0,
  },
  {
    src: five,
    original: five,
   width:0,
    height: 0,
  },
  {
    src: six,
    original: six,
   width:0,
    height: 0,
  },
];