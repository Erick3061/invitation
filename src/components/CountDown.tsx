import { useEffect, useRef, useState } from 'react';
import Countdown, { CountdownRenderProps } from 'react-countdown';

export const CountDown = () => {

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

    const Completionist = () => <span>Te esperamos!</span>;

    const Letter = ({ letter, label }: { letter: number, label?: string }) => (
        <span className='p-5 bg-(--color-palette-one)/50 font-[Lora]  w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] flex flex-col justify-center items-center text-(--color-palette-three) border rounded-lg'>{letter} <span className='text-sm sm:text-xl font-semibold'>{label}</span></span>
    );

    const renderer = ({ days, hours, minutes, seconds, completed }: CountdownRenderProps) => {
        return completed
            ? <Completionist />
            :
            <div className='flex flex-wrap text-3xl sm:text-5xl gap-2 p-[1rem_0] items-center justify-center m-[1rem_2.5rem]'>
                <span className='flex items-center gap-2'>
                    <Letter letter={days} label='Dias' />
                    <Letter letter={hours} label='Horas' />
                </span>
                <span className='flex items-center gap-2'>
                    <Letter letter={minutes} label='Minutos' />
                    <Letter letter={seconds} label='Segundos' />
                </span>
            </div>

    };

    return (
        <section className='relative h-lvh w-lvw bg-[url(./assets/2.webp)] bg-no-repeat bg-cover bg-[center_left_20%] xl:bg-[right_top_-350px] 2xl:bg-[right_top_-100px]'>
            <div className="absolute w-full h-full bg-black/60 backdrop-invert backdrop-opacity-10 border-t-4 border-b-4 border-(--color-palette-three)" />
            <div ref={element} className='w-full h-full flex flex-col justify-center items-center backdrop-opacity-0 sm:gap-6 opacity-0'>
                <p className='font-[GreatVibes] p-[.5rem_.2rem] text-[2.7rem] bg-gradient-to-r from-(--color-palette-three) via-(--color-palette-four) to-(--color-palette-three) text-transparent bg-clip-text sm:text-7xl drop-shadow-heart2'>Guarda la Fecha</p>
                <p className='font-[Lora] text-2xl bg-gradient-to-r from-(--color-palette-three) via-(--color-palette-four) to-(--color-palette-three) text-transparent bg-clip-text sm:text-3xl drop-shadow-heart2'>14 Junio 2025</p>
                <Countdown date={new Date("June 14, 2025 13:00:00")} renderer={renderer} />
                <p className='font-[Lora] p-1 text-2xl bg-gradient-to-r from-(--color-palette-four)/70 via-(--color-palette-four)/70 to-(--color-palette-four)/70 text-transparent bg-clip-text sm:text-3xl drop-shadow-heart2'>Agrégalo a tu Calendario</p>
                <div className='flex flex-wrap gap-4 justify-center items-center m-4 text-(--color-palette-four)/80'>
                    {/* <button className='uppercase border w-[100%] sm:w-[250px] p-4 font-[Lora] rounded-full cursor-pointer'>ios y pc</button> */}
                    <a className='uppercase border w-[100%] sm:w-[250px] p-4 font-[Lora] rounded-full cursor-pointer text-center' target='_blank' href='https://calendar.app.google/hFT5o7Uhj1oaoteW7'>google calendar</a>
                </div>
            </div>
        </section>
    )
}
