import { useState, useRef, useEffect } from "react";
import { LitteHeart } from "../icons/LitteHeart";

export const Footer = () => {

    const [isVisible, setIsVisible] = useState(false);
    const element = useRef<HTMLDivElement>(null);

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
            element.current.classList.add('animate-pop');
            element.current.classList.remove('opacity-0');
        }
    }, [isVisible, element]);

    return (

        // <section className='relative h-lvh w-lvw bg-[url(./galery/5.webp)] bg-no-repeat bg-cover bg-[center_left_20%] xl:bg-[right_top_-350px] 2xl:bg-[right_top_-700px]'>
        <section className=' bg-(--color-palette-one)'>
            <div ref={element} className='flex flex-col justify-end items-center sm:gap-6 opacity-0 p-[5rem_0]'>
                <p className='font-[Lora] p-1 text-xl bg-gradient-to-r from-(--color-palette-four)/70 via-(--color-palette-four)/70 to-(--color-palette-four)/70 text-transparent bg-clip-text sm:text-3xl drop-shadow-heart2 text-center'>Con gran alegría, les invitamos a compartir nuestro día especial mientras unimos nuestras vidas en matrimonio.</p>
                <p className='font-[GreatVibes] p-[1rem] text-[2.5rem] bg-gradient-to-r from-(--color-palette-three) via-(--color-palette-four) to-(--color-palette-three) text-transparent bg-clip-text sm:text-5xl drop-shadow-heart2'>Erick & Yola</p>
                <span className='font-[GreatVibes] flex items-center gap-[1rem] text-(--color-palette-four) text-[3rem] sm:text-8xl'>
                    <LitteHeart className={{ className: `fill-(--color-palette-four) sm:w-[1.5rem] sm:|h-[1.5rem] animate-bounce-infinite` }} />
                    Los esperamos
                    <LitteHeart className={{ className: `fill-(--color-palette-four) sm:w-[1.5rem] sm:|h-[1.5rem] animate-bounce-infinite` }} />
                </span>
            </div>
        </section>
    )
}
