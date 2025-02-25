import { Separator } from "./Separator"
import { Agenda } from '../icons/Agenda';
import { useState } from "react";
import { SlideImage } from 'yet-another-react-lightbox';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import one from '../galery/1.webp';
import two from '../galery/2.webp';
import three from '../galery/3.webp';
import four from '../galery/4.webp';
import five from '../galery/5.webp';
import six from '../galery/6.webp';

export const Galery = () => {
    const [index, setIndex] = useState(-1);
    const images: Array<SlideImage> = [
        { src: one },
        { src: two },
        { src: three },
        { src: four },
        { src: five },
        { src: six },
    ];

    return (
        <section className='flex flex-col items-center justify-center'>
            <Separator
                title='Galería'
                element={<Agenda className={{ className: 'w-[2rem] h-[2rem] animate-bounce-infinite text-red-900' }} />}
            />
            <div className="badge-image w-full flex justify-center items-center flex-wrap gap-[1rem]">
                {
                    images.map((image, index) =>
                        <span className="bg-transparent image w-[90%] sm:w-[15rem] sm:h-[15rem] lg:w-[20rem] lg:h-[20rem] 2xl:w-[30rem] 2xl:h-[30rem]">
                            <img className={`w-full h-full object-cover drop-shadow-5xl border border-(--color-palette-three) rounded-2xl`} alt={image.src} src={image.src} onClick={() => setIndex(index)} />
                        </span>
                    )
                }
                <Lightbox
                    slides={images}
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                />
            </div>
        </section>
    )
}
