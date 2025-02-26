import { Separator } from "./Separator"
import dc from '../assets/bc.png';
import dch from '../assets/dch.png';
import dcm from '../assets/dcm.png';
import { useState, useRef, useEffect } from "react";

export const DressCode = () => {

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
    <section  className='relative text-(--color-palette-one) flex gap-3 flex-col p-4 items-center'>
      <Separator src={dc} title='Código de vestimenta' />
      <div ref={element} className="">
        <p className="text-center font-[Lora] text-2xl">Formal</p>
        <p className="text-center font-[Lora] opacity-60 text-xl">Semiformal</p>
        <p className="text-center font-[Lora] opacity-60 text-xl">Casual</p>
        <div className="flex gap-2">
          <img src={dch} alt={dch} className="w-[10rem] drop-shadow-btn" />
          <img src={dcm} alt={dcm} className="w-[10rem] drop-shadow-btn" />
        </div>
      </div>
    </section>
  )
}
