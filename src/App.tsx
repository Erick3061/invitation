import { useEffect, useRef, useState } from 'react';
import envBottomLayer from './assets/env-bottom-layer.png';
import envTopLayer from './assets/env-top-layer.png';
import graphLeft from './assets/welcome-graph-left.svg';
import graphRight from './assets/welcome-graph-right.svg';
import heart from './assets/heart.svg';
import EY from './assets/E-Y.webp';

function App() {
  const refNames = useRef<HTMLDivElement>(null);
  const refWellCome = useRef<HTMLElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const Pass = (e: React.AnimationEvent<HTMLElement>) => {
    e.animationName.toLowerCase();
    if (e.animationName.toLowerCase() === 'fadeout') {
      console.log(e.animationName.toLowerCase());
      e.currentTarget.classList.add('hidden');
    }
  }

  const Loading = () => (
    <div className='w-full h-full flex justify-center items-center'>
      <div className="flex-col gap-4 w-full flex items-center justify-center">
        <div
          className="w-22 h-22 border-2 border-transparent text-4xl animate-spin flex items-center justify-center border-t-(--color-palette-one) rounded-full"
        >
        </div>

        <img alt='img' src={heart} className='absolute animate-pulse' />
      </div>
    </div>
  );

  const Wellcome = () => (
    <section ref={refWellCome} className="pre-page w-full h-full bg-center fixed z-20 bg-(--color-palette-four) bg-[url(./assets/bg.png)]" id="pre_page" onAnimationEnd={Pass}>
      <img src={graphLeft} className="absolute left-0 bottom-0 z-10 h-[55%] md:h-[80%] duration-1000 animate-fadeInUp drop-shadow-3xl" id="left_graph" />
      <img src={graphRight} className="absolute right-0 z-10 h-[55%] md:h-[80%] animate-fadeInDown drop-shadow-3xl" id="right_graph" />

      <img src={envBottomLayer} className="absolute bottom-0 w-full h-[35%] lg:h-[60%] xl:h-[65%] 2xl:h-[75%] object-cover opacity-50 animate-slideInUp" id="env_bottom" />
      <img src={envTopLayer} className="absolute top-0 w-full h-[35%] lg:h-[60%] xl:h-[65%] 2xl:h-[75%] object-cover opacity-50 animate-slideInDown" id="env_top" onAnimationEnd={() => { refNames.current?.classList.remove('hidden'); }} />

      <div ref={refNames} className="absolute flex flex-col gap-7 w-full h-full justify-center items-center text-center z-20 animate-fadeIn" id="inner_elements">
        <br />
        <br />
        <div className="flex flex-col gap-3 max-w-[80%] text-(--color-palette-one)">
          <p className='font-[GreatVibes] text-5xl md:text-6xl'>Erick &amp; Yola</p>
          <p className="font-[Lora] text-lg md:text-2xl">se casan y te invitan a celebrar con ellos este gran día.</p>
        </div>
        <div className='animate-bounce-infinite flex justify-center items-center' onClick={() => { refWellCome.current?.classList.add('animate-fadeOut') }}>
          <svg width="100px" height="100px" viewBox="0 0 100 100" y="0px" x="0px" className="position-absolute start-50 top-50 translate-middle drop-shadow-heart fill-(--color-palette-one) stroke-(--color-palette-three)" >
            <g>
              <path className="path-heart" d="M89.49,37.8c0,25.54-39.59,46.24-39.59,46.24S10.31,63.34,10.31,37.8c0-29.59,39.59-28.67,39.59,0C49.9,10.06,89.49,8.21,89.49,37.8 z" strokeMiterlimit="10" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2"></path>
            </g>
          </svg>
          <span className='absolute font-[GreatVibes] text-(--color-palette-four) border-0 text-2xl font-semibold bottom-7'>Abrir</span>
        </div>
      </div>
    </section>
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setIsLoading(false);
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <article className="w-dvw h-dvh bg-fixed bg-[url(./assets/bg.png)] overflow-y-auto overflow-x-hidden">
      {
        isLoading ?
          <Loading />
          :
          <>
            <Wellcome />
            <section className='relative h-lvh w-lvw bg-[url(./assets/wellcome3.webp)] bg-[auto_150%] bg-center md:bg-[auto_140%] md:bg-[center_bottom_-12rem] lg:bg-[auto_200%] lg:bg-[right_bottom_-260px] xl:bg-cover xl:bg-[right_bottom_-300px] 2xl:bg-[right_bottom_-400px]'>
              <div className="absolute w-full h-full bg-(--color-palette-one)/15 backdrop-invert backdrop-opacity-5" />
              <div className='w-full h-full flex justify-center'>
                <div className='bg-[url(./assets/back-heart-1.png)]  absolute top-[2.5rem] flex flex-col justify-center items-center w-[300px] h-[300px] bg-no-repeat bg-contain bg-center text-(--color-palette-four) gap-4 drop-shadow-heart2 md:top-[5%] md:w-[400px] md:h-[400px] lg:right-10 lg:top-auto lg:bottom-0 lg:w-[500px] lg:h-[500px] 2xl:right-auto'>
                  <p className='font-[GreatVibes] text-5xl md:text-6xl drop-shadow-letter -rotate-12'>Erick &amp; Yola</p>
                  <p className='font-[GreatVibes] text-4xl md:text-6xl drop-shadow-letter -rotate-12 w-[45%] text-right'>14.jun.25</p>
                </div>
              </div>
            </section>
            <section className='bg-(--color-palette-one) text-(--color-palette-four) flex gap-3 flex-col p-[4rem_1rem] bg-[url(./assets/bg.png)] bg-cover items-center justify-center'>
              <p className='font-[GreatVibes] p-2 text-center text-5xl bg-gradient-to-r from-(--color-palette-three) via-(--color-palette-four) to-(--color-palette-three) text-transparent bg-clip-text sm:text-7xl'>Nuestra Historia</p>
              <div className='flex-1 flex flex-col w-full gap-3 justify-center items-center sm:mt-5 sm:flex-row max-w-[1280px] sm:justify-around'>
                <img src={EY} alt='img' className='w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full border-2 border-(--color-palette-three) drop-shadow-3xl' />
                <div className='relative font-[Lora] text-center w-full bg-(--color-palette-four) rounded-2xl text-(--color-palette-one) border-t-3 border-b-3 border-(--color-palette-three) max-w-[500px]'>
                  <p className='p-8 antialiased font-stretch-normal text-wrap text-lg'>Nuestro amor ha crecido y madurado, a veces de manera sencilla y otras caótica, pero siempre maravillosa.<br /> Comenzaremos una nueva etapa en nuestras vidas, enfrentandonos a nuevos desafíos que nos harán más fuertes y nos ayudarán a crecer el resto de nuestros días juntos.</p>
                </div>
              </div>
            </section>
          </>
      }
    </article>
  )
}

export default App
