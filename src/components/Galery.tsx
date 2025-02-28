import { Separator } from "./Separator"
import { Agenda } from '../icons/Agenda';
import { useEffect, useRef, useState } from "react";
import { SlideImage } from 'yet-another-react-lightbox';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import one from '../galery/1.webp';
import two from '../galery/2.webp';
import three from '../galery/3.webp';
import four from '../galery/4.webp';
import five from '../galery/5.webp';
import six from '../galery/6.webp';

const Image = ({ setIndex, src, index }: { src: string, setIndex: React.Dispatch<React.SetStateAction<number>>, index: number }) => {

    const [isVisible, setIsVisible] = useState(false);
    const element = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const observable = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting)
        }, {
            root: null,
            rootMargin: '0px', threshold: .3
        })
        if (element.current) observable.observe(element.current);
        return () => {
            if (element.current) observable.unobserve(element.current);
        };
    }, []);


    useEffect(() => {
        if (isVisible && element.current) {
            element.current.style.animationDelay = `${(index + 1) * 100}ms`;
            element.current.classList.add('animate-fadeInRightSlow');
        }
    }, [isVisible, element, index]);

    return (
        <span ref={element} className="opacity-0 bg-transparent image w-[9rem] h-[9rem] sm:w-[15rem] sm:h-[15rem] lg:w-[20rem] lg:h-[20rem] 2xl:w-[30rem] 2xl:h-[30rem]" onAnimationEnd={e => e.currentTarget.classList.remove('opacity-0')}>
            <img className={`w-full h-full object-cover shadow-lg border border-(--color-palette-three) rounded-2xl`} alt={src} src={src} onClick={() => setIndex(index)} />
        </span>
    )
}

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
                element={<Agenda className={{ className: 'w-[1.5rem] h-[1.5rem] animate-bounce-infinite text-red-900 mb-2' }} />}
            />
            <p className='font-[Lora] p-[2rem_1rem] text-xl bg-gradient-to-r from-(--color-palette-one) via-(--color-palette-one) to-(--color-palette-one) text-transparent bg-clip-text sm:text-2xl drop-shadow-3x text-center'>Nuestro amor es como el viento, no podemos verlo pero si sentirlo</p>
            <div className="badge-image w-full flex justify-center items-center flex-wrap gap-[1rem]">
                {images.map(({ src }, index) => <Image {...{ setIndex, src, index }} />)}
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
