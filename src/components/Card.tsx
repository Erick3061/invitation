import { GMaps } from '../icons/GMaps';
import { AMaps } from '../icons/AMaps';
import { useEffect, useRef, useState } from 'react';

interface PropsCard {
    title: string;
    subtitle: string;
    location: string;
    date: string;
    description: string;
    link: {
        google: string;
        apple: string;
    };
    src: string;
}

export const Card = ({ date, description, location, subtitle, title, src, link: { google, apple } }: PropsCard) => {
    const [isVisible, setIsVisible] = useState(false);
    const element = useRef<HTMLDivElement>(null);

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
            element.current.classList.add('animate-pop');
            element.current.classList.remove('opacity-0');
        }
    }, [isVisible, element]);

    return (
        <div ref={element} className='flex flex-col md:flex-row bg-(--color-palette-two)/10 border-t-2 border-b-2 border-(--color-palette-three)/30 text-(--color-palette-one) font-[Lora] p-[1.5rem] text-sm lg:max-w-[900px] items-start opacity-0'>
            <img src={src} alt='image' className='w-auto h-auto sm:w-[350px] rounded-sm drop-shadow-btn' />
            <div className='flex flex-col gap-2 text-left p-[1rem_0] md:p-[0_1.5rem]'>
                <p className='uppercase font-bold text-xl'>{title}</p>
                <p className='capitalize font-semibold text-(--color-palette-one)/70 text-lg'>{subtitle}</p>
                <div className='text-(--color-palette-one)/80 flex gap-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[20px] h-[20px] shrink-0 text-red-900">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                    </svg>
                    <span className='text-wrap'>{location}</span>
                </div>
                <div className='text-(--color-palette-one)/80 flex gap-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[20px] h-[20px] shrink-0 text-red-900">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                        <path d="M12 7v5l3 3" />
                    </svg>
                    <span className='text-wrap'>{date}</span>
                </div>
                <p className=''>{description}</p>
                <div className='flex gap-4 mt-3'>
                    <a target='_blank' className='flex items-center gap-2 rounded-full drop-shadow-btn p-[.3rem]' href={google}>
                        <GMaps className={{ className: 'w-[2.5rem] h-[2.5rem]' }} />
                    </a>
                    <a target='_blank' className='flex items-center gap-2 rounded-full drop-shadow-btn p-[.3rem]' href={apple}>
                        <AMaps className={{ className: 'w-[2.5rem] h-[2.5rem]' }} />
                    </a>
                </div>
            </div>
        </div>
    )
};
