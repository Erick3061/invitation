import divider from '../assets/divider.svg';
import { useEffect, useRef, useState } from 'react';
export const Fam = () => {
    const [isVisible, setIsVisible] = useState(false);
    const element = useRef<HTMLParagraphElement>(null);

    const Names = ({ father, mother, extra }: { father: string, mother: string, extra: string }) => (
        <span className='w-[300px] p-5'>
            {(father !== '') && <p className='uppercase text-(--color-palette-one)/90'>{father}</p>}
            {(father !== '') && <p className='uppercase text-(--color-palette-one)/90'>&</p>}
            <p className='uppercase text-(--color-palette-one)/90'>{mother}</p>
            <p className='text-(--color-palette-two) '>{extra}</p>
        </span>
    );

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
        <section className={`text-(--color-palette-one)`}>
            <div className='relative flex gap-3 flex-col p-[1rem] items-center opacity-0 '>
                <p ref={element} className='font-[GreatVibes] p-[.5rem_0] text-[2.7rem] bg-gradient-to-r from-(--color-palette-one) via-(--color-palette-one) to-(--color-palette-one) text-transparent bg-clip-text sm:text-7xl text-center mb-[-4rem]'>Nuestros Padres</p>
                <p className='font-[GreatVibes] p-[.5rem] sm:p-[1.2rem] text-[2.7rem] bg-gradient-to-r from-(--color-palette-one) via-(--color-palette-one) to-(--color-palette-one) text-transparent bg-clip-text sm:text-7xl text-center mb-[-2rem]'>y</p>
                <p className='font-[GreatVibes] p-[.5rem_0] text-[2.7rem] bg-gradient-to-r from-(--color-palette-one) via-(--color-palette-one) to-(--color-palette-one) text-transparent bg-clip-text sm:text-7xl text-center'>Padrinos</p>
                <p className='font-[Lora] text-center text-xl'>¡Gracias por acompañarnos en este día tan especial!</p>
                <img alt ='' src={divider} className='w-[9rem]'/>
                <div className='font-[Lora] text-center text-(--color-palette-one) max-w-[900px] flex flex-wrap justify-center'>
                    <Names father='Bulfrano Cortes baltazar' mother='Carolina Rojas Lorenzo' extra='- Papas de la novia -' />
                    <Names father='José Celedonio Andrade Salas' mother='Teresa Ramos Mauro' extra='- Papas del novio -' />
                    <Names father='Marcelo Ramos Mauro' mother='María Guillermina Andrade Salas' extra='- En representación de los papas del novio -' />
                    <Names father='Humberto varillas ---' mother='Mama beto' extra='- Padrinos de velación -' />
                    <Names father='' mother='Juana Ramos Martinez' extra='- Madrina de Arras -' />
                </div>
                <img alt='' src={divider} className='w-[9rem]'/>
            </div>
        </section>
    );
}
