import ornament from '../assets/orn.png';
import EY from '../assets/E-Y.webp';
import { useEffect, useRef, useState } from 'react';
export const Us = () => {
    const [isVisible, setIsVisible] = useState(false);
    const element = useRef<HTMLParagraphElement>(null);
    const content = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observable = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting)
        }, {
            root: null,
            rootMargin: '0px', threshold: .1
        })
        if (element.current) observable.observe(element.current);
        return () => {
            if (element.current) observable.unobserve(element.current);
        };
    }, []);


    useEffect(() => {
        if (isVisible && element.current) {
            element.current.parentElement?.classList.add('animate-appear');
            element.current.parentElement?.classList.remove('opacity-0');
        }
    }, [isVisible, element]);

    return (
        <section className={`relative text-(--color-palette-four) m-[.5rem] border border-(--color-palette-three)`}>
            <img src={ornament} alt="ornament" className='z-0 w-[7rem] h-[7rem] sm:w-[9rem] sm:h-[9rem] absolute rotate-[-90deg]' />
            <img src={ornament} alt="ornament" className='z-0 w-[7rem] h-[7rem] sm:w-[9rem] sm:h-[9rem] absolute right-0' />
            <img src={ornament} alt="ornament" className='z-0 w-[7rem] h-[7rem] sm:w-[9rem] sm:h-[9rem] absolute bottom-0 left-0 rotate-[180deg]' />
            <img src={ornament} alt="ornament" className='z-0 w-[7rem] h-[7rem] sm:w-[9rem] sm:h-[9rem] absolute bottom-0 right-0 rotate-[90deg]' />
            <div className='flex gap-3 flex-col p-[3rem_1rem] items-center opacity-0'>
                <p ref={element} className='z-10 font-[GreatVibes] p-[.5rem_0] text-[2.7rem] bg-gradient-to-r from-(--color-palette-one) via-(--color-palette-one) to-(--color-palette-one) text-transparent bg-clip-text sm:text-7xl'>Nuestra Historia</p>
                <span ref={content} className='flex-1 flex flex-col gap-8 items-center sm:mt-5 sm:flex-row max-w-[1280px] sm:justify-around mb-10'>
                    <img src={EY} alt='img' className='w-[230px] h-[230px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full border-2 border-(--color-palette-three) drop-shadow-3xl' />
                    <div className='font-[Lora] text-center text-(--color-palette-one) max-w-[500px]'>
                        <p className='lg:text-lg'>Nuestro amor ha crecido y madurado, a veces de manera sencilla y otras caótica, pero siempre maravillosa.<br /> Comenzaremos una nueva etapa en nuestras vidas, enfrentandonos a nuevos desafíos que nos harán más fuertes y nos ayudarán a crecer juntos el resto de nuestros días.</p>
                    </div>
                </span>
            </div>
        </section>
    );
}
