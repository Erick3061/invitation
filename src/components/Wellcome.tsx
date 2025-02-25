import envBottomLayer from '../assets/env-bottom-layer.png';
import envTopLayer from '../assets/env-top-layer.png';
import graphLeft from '../assets/welcome-graph-left.svg';
import graphRight from '../assets/welcome-graph-right.svg';

interface Proos {
  refWellCome: React.RefObject<HTMLElement>;
  refNames: React.RefObject<HTMLDivElement>;
  refPresentation: React.RefObject<HTMLDivElement>;
  audio: HTMLAudioElement;
}

export const Wellcome = ({ refNames, refWellCome, audio, refPresentation }: Proos) => {
  const Pass = (e: React.AnimationEvent<HTMLElement>) => {
    if (e.animationName.toLowerCase() === 'fadeout') {
      e.currentTarget.classList.add('hidden');
      refPresentation.current?.classList.add('animate-appear');
      refPresentation.current?.classList.add('opacity-100');
      audio.play();
    }
  }

  return (
    <section ref={refWellCome} className="pre-page w-full h-full bg-center fixed z-20 bg-(--color-palette-four) bg-[url(./assets/bg.png)] bg-contain" id="pre_page" onAnimationEnd={Pass}>
      <img src={graphLeft} className="absolute left-0 bottom-0 z-10 h-[55%] md:h-[80%] duration-1000 animate-fadeInUp drop-shadow-3xl" id="left_graph" />
      <img src={graphRight} className="absolute right-0 z-10 h-[55%] md:h-[80%] animate-fadeInDown drop-shadow-3xl" id="right_graph" />

      <img src={envBottomLayer} className="absolute bottom-0 w-full h-[35%] lg:h-[60%] xl:h-[65%] 2xl:h-[75%] object-cover opacity-50 animate-slideInUp" id="env_bottom" />
      <img src={envTopLayer} className="absolute top-0 w-full h-[35%] lg:h-[60%] xl:h-[65%] 2xl:h-[75%] object-cover opacity-50 animate-slideInDown" id="env_top" onAnimationEnd={() => { refNames.current?.classList.remove('hidden'); }} />

      <div ref={refNames} className="absolute flex flex-col gap-7 w-full h-full justify-center items-center text-center z-20 animate-fadeIn" id="inner_elements">
        <br />
        <br />
        <div className="flex flex-col gap-3 max-w-[80%] text-(--color-palette-one)">
          <p className='font-[GreatVibes] text-5xl md:text-6xl'>Erick &amp; Yola</p>
          <p className='font-[Lora] text-lg md:text-2xl'>Se casan...</p>
          <p className="font-[Lora] text-lg md:text-2xl">Te invitan ti y a tu familia a celebrar con ellos este gran día.</p>
        </div>
        <div className='animate-bounce-infinite flex justify-center items-center cursor-pointer' onClick={() => { refWellCome.current?.classList.add('animate-fadeOut') }}>
          <svg width="100px" height="100px" viewBox="0 0 100 100" y="0px" x="0px" className="position-absolute start-50 top-50 translate-middle drop-shadow-heart fill-(--color-palette-one) stroke-(--color-palette-three)" >
            <g>
              <path className="path-heart" d="M89.49,37.8c0,25.54-39.59,46.24-39.59,46.24S10.31,63.34,10.31,37.8c0-29.59,39.59-28.67,39.59,0C49.9,10.06,89.49,8.21,89.49,37.8 z" strokeMiterlimit="10" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2"></path>
            </g>
          </svg>
          <span className='absolute font-[GreatVibes] text-(--color-palette-four) border-0 text-2xl font-semibold bottom-7'>Abrir</span>
        </div>
      </div>
    </section>
  )
}
