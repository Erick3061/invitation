import divider from '../assets/divider.svg';
import { useEffect, useRef, useState } from 'react';

const Names = ({ father, mother, extra, isleft }: { father: string, mother: string, extra: string, isleft: boolean }) => {
    const [isVisible, setIsVisible] = useState(false);
    const element = useRef<HTMLParagraphElement>(null);

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
            element.current.parentElement?.classList.add(isleft ? 'animate-fadeInLeftSlow' : 'animate-fadeInRightSlow');
            element.current.parentElement?.classList.remove('opacity-0');
        }
    }, [isVisible, element, isleft]);

    return (
        <span className='opacity-0 w-[300px] p-5'>
            <p ref={element} className='font-[GreatVibes] text-(--color-palette-one) text-3xl'>{extra}</p>
            {(father !== '') && <p className='text-(--color-palette-two)'>{father}</p>}
            <p className='text-(--color-palette-two)'>{mother}</p>
        </span>
    )
}

export const Fam = () => {
    const [isVisible, setIsVisible] = useState(false);
    const element = useRef<HTMLParagraphElement>(null);

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
        <section className={`text-(--color-palette-one) m-[.5rem] border border-(--color-palette-three)`}>
            <div className='relative flex gap-3 flex-col p-[1rem] items-center opacity-0 '>
                <img alt='' src={divider} className='w-[9rem] p-4' />
                <p ref={element} className='font-[GreatVibes] text-center text-4xl'>Con la bendición de Dios y en compañía de nuestros padres</p>
                <div className='font-[Lora] text-center text-(--color-palette-one) max-w-[900px] flex flex-wrap justify-center'>
                    <Names isleft={true} father='Sr. Vulfrano Cortes Baltazar' mother='Sra. Carolina Rojas Lorenzo' extra='- Padres de la novia -' />
                    <Names isleft={false} father='Sr. José Celedonio Andrade Salas' mother='Sra. Teresa Ramos Mauro' extra='- Padres del novio -' />
                    <Names isleft={true} father='Sr. Marcelo Ramos Mauro' mother='Sra. María Guillermina Andrade Salas' extra='- En representación de los padres del novio -' />
                </div>
                <p className='font-[Lora] text-center text-xl'>¡Gracias por acompañarnos en este día tan especial!</p>
                <img alt='' src={divider} className='w-[9rem] p-4' />
            </div>
        </section>
    );
}
