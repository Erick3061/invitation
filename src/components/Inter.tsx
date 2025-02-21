import { useState, useRef, useEffect } from 'react';
import { LitteHeart } from '../icons/LitteHeart';

interface PropsInter {
    title: string;
    subtitle: string;
    text: string;
    src: string;
    isRight: boolean;
    icon?: boolean;
    className?: Pick<React.HTMLAttributes<HTMLDivElement>,'className'>;
}

export const Inter = ({ title, subtitle, text, src, isRight, icon, className }: PropsInter) => {

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
            element.current.classList.add(isRight ? 'animate-fadeInLeftSlow' : 'animate-fadeInRightSlow');
            element.current.classList.remove('opacity-0');
        }
    }, [isVisible, element, isRight]);
    
    return (
        <div className={`flex ${!isRight && 'flex-row-reverse'} w-full`}>
            <div ref={element} className={`w-[50%] text-(--color-palette-one)/80  pt-[3.5rem] pb-[3.5rem] ${isRight ? 'text-right pr-4 lg:pr-[3rem]' : 'text-left pl-4 lg:pl-[3rem]'} flex flex-col gap-2 justify-center`}>
                <p className='uppercase text-xl font-semibold'>{title}</p>
                <p className='text-red-800 font-semibold'>{subtitle}</p>
                <p className='text-(--color-palette-one)/60 text-sm'>{text}</p>
            </div>
            <div className={`${className?.className} relative w-[50%] flex items-center border-(--color-palette-one)/10 ${isRight ? 'justify-self-start border-l' : 'justify-end border-r'}  ${icon && 'border-t'}`}>
                <img src={src} alt={title} className={`${isRight ? 'pl-4 lg:pl-[3rem]' : 'pr-4 lg:pr-[3rem]'} w-[70%] md:w-[50%]`} />
                <LitteHeart className={{ className: `${!icon && 'hidden'} absolute top-[-.7rem] ${!isRight ? 'right-[-.7rem]' : 'left-[-.7rem]'} drop-shadow-heart fill-red-900 animate-bounce-infinite` }} />
            </div>
        </div>
    )
}
