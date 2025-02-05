import { useEffect, useRef, useState } from 'react';
import envBottomLayer from './assets/env-bottom-layer.png';
import envTopLayer from './assets/env-top-layer.png';
import graphLeft from './assets/welcome-graph-left.svg';
import graphRight from './assets/welcome-graph-right.svg';
import heart from './assets/heart.svg';

function App() {
  const refNames = useRef<HTMLDivElement>(null);
  const refWellCome = useRef<HTMLElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isShow, setIsShow] = useState<boolean>(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsLoading(false);
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <article className="w-dvw h-dvh overflow-y-auto bg-fixed bg-[url(./assets/bg.png)]">
      {
        isLoading
          ?
          <div className='w-full h-full flex justify-center items-center'>
            <div className="flex-col gap-4 w-full flex items-center justify-center">
              <div
                className="w-22 h-22 border-2 border-transparent text-[#a73b3c] text-4xl animate-spin flex items-center justify-center border-t-[#a73b3c] rounded-full"
              >
              </div>
              <img alt='img' src={heart} className='absolute animate-pulse' />
            </div>
          </div>
          :
          <>
            <section ref={refWellCome} className="pre-page w-full h-full bg-center fixed z-20" id="pre_page" onAnimationEnd={e => {
              e.animationName.toLowerCase();
              if (e.animationName.toLowerCase() === 'fadeout') {
                console.log(e.animationName.toLowerCase());
                e.currentTarget.classList.add('hidden');
                setIsShow(true)
              }
            }}>
              <img src={graphLeft} className="absolute left-0 bottom-0 z-10 h-[55%] md:h-[80%] duration-1000 animate-fadeInUp drop-shadow-3xl" id="left_graph" />
              <img src={graphRight} className="absolute right-0 z-10 h-[55%] md:h-[80%] animate-fadeInDown drop-shadow-3xl" id="right_graph" />

              <img src={envBottomLayer} className="absolute bottom-0 w-full h-[35%] lg:h-[60%] xl:h-[65%] 2xl:h-[75%] object-cover opacity-50 drop-shadow-5xl animate-slideInUp" id="env_bottom" />
              <img src={envTopLayer} className="absolute top-0 w-full h-[35%] lg:h-[60%] xl:h-[65%] 2xl:h-[75%] object-cover opacity-50 drop-shadow-5xl animate-slideInDown" id="env_top" onAnimationEnd={() => { refNames.current?.classList.remove('hidden'); }} />

              <div ref={refNames} className="absolute flex flex-col gap-7 w-full h-full justify-center items-center text-center z-20 animate-fadeIn" id="inner_elements">
                <br />
                <br />
                <div className="flex flex-col gap-3 max-w-[80%] text-[#152f4c]">
                  <p className='font-[GreatVibes] text-5xl md:text-6xl drop-shadow-4xl'>Erick &amp; Yola</p>
                  {/* <p className='font-[GreatVibes] text-5xl md:text-6xl'>Erick</p>
                  <p className='font-[GreatVibes] text-5xl md:text-6xl'>&amp;</p>
                  <p className='font-[GreatVibes] text-5xl md:text-6xl'>Yolanda</p> */}
                  <p className="font-[Lora] text-lg md:text-2xl">se casan y te invitan a celebrar con ellos este gran día.</p>
                </div>
                <div className='animate-bounce-infinite flex justify-center items-center' onClick={() => { refWellCome.current?.classList.add('animate-fadeOut') }}>
                  <svg width="100px" height="100px" viewBox="0 0 100 100" y="0px" x="0px" className="position-absolute start-50 top-50 translate-middle drop-shadow-heart">
                    <g>
                      <path className="path-heart" d="M89.49,37.8c0,25.54-39.59,46.24-39.59,46.24S10.31,63.34,10.31,37.8c0-29.59,39.59-28.67,39.59,0C49.9,10.06,89.49,8.21,89.49,37.8 z" strokeMiterlimit="10" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="#9A7A54" fill="#152f4c"></path>
                    </g>
                  </svg>
                  <span className='absolute font-[GreatVibes] text-white border-0 text-2xl font-semibold bottom-7'>Abrir</span>
                </div>
              </div>
            </section>
            {
              isShow &&
              <>
                <section className='w-dvw h-dvh'>
                  <p>msdndd</p>
                </section>
                <section className='w-dvw h-dvh'>
                  <p>msdndd</p>
                </section>
              </>
            }
          </>
      }
    </article>
  )
}

export default App
