import { useEffect, useRef, useState } from 'react';
import envBottomLayer from './assets/env-bottom-layer.png';
import envTopLayer from './assets/env-top-layer.png';
import graphLeft from './assets/welcome-graph-left.svg';
import graphRight from './assets/welcome-graph-right.svg';
import heart from './assets/heart.svg';
import place from './assets/place.svg';
import ornament from './assets/orn.png';
import maps from './assets/maps2.svg';
import EY from './assets/E-Y.webp';
import staCruz from './assets/sta_cruz.webp';
import Countdown, { CountdownRenderProps } from 'react-countdown';

interface PropsCard {
  title: string;
  subtitle: string;
  location: string;
  date: string;
  description: string;
  link: string;
  src: string;
}

function App() {
  const refNames = useRef<HTMLDivElement>(null);
  const refWellCome = useRef<HTMLElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const Completionist = () => <span>You are good to go!</span>;

  const Letter = ({ letter, label }: { letter: number, label?: string }) => (
    <span className='p-5 bg-(--color-palette-one)/50 font-[Lora]  w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] flex flex-col justify-center items-center text-(--color-palette-three) border rounded-lg'>{letter} <span className='text-sm sm:text-xl font-semibold'>{label}</span></span>
  );

  const Card = ({ date, description, location, subtitle, title, src }: PropsCard) => (
    <div className='flex flex-col md:flex-row bg-(--color-palette-three)/5 border-t-2 border-b-2 border-(--color-palette-three)/30 text-(--color-palette-one) font-[Lora] p-4 text-sm lg:max-w-[900px] items-start'>
      <img src={src} alt='image' className='w-auto h-auto sm:w-[350px] rounded-sm drop-shadow-btn' />
      <div className='flex flex-col gap-2 text-left p-[1rem_0] md:p-[0_1.5rem]'>
        <p className='uppercase font-bold text-xl'>{title}</p>
        <p className='capitalize font-semibold text-(--color-palette-one)/70 text-lg'>{subtitle}</p>
        <div className='text-(--color-palette-one)/80 flex gap-1'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-[20px] h-[20px] shrink-0 text-red-900">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
          </svg>
          <span className='text-wrap'>{location}</span>
        </div>
        <div className='text-(--color-palette-one)/80 flex gap-1'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-[20px] h-[20px] shrink-0 text-red-900">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <path d="M12 7v5l3 3" />
          </svg>
          <span className='text-wrap'>{date}</span>
        </div>
        <p className=''>{description}</p>
        <button className='bg-(--color-palette-four) flex items-center gap-2 rounded-full drop-shadow-btn p-[.5rem_1rem] w-max font-semibold text mt-3'>
          <img src={maps} alt="maps" width={27} height={27} />
          <span children='Ver mapa >' />
        </button>
      </div>
    </div>
  )

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
            <section className='relative h-lvh w-lvw bg-[url(./assets/wellcome1.webp)] bg-no-repeat bg-cover bg-[center_right_20%] xl:bg-[right_top_-350px] 2xl:bg-[right_top_-500px]'>
              <div className="absolute w-full h-full bg-black/50 backdrop-invert backdrop-opacity-5" />
              <div className='w-full h-full flex justify-center backdrop-opacity-0'>
                <div className='bg-[url(./assets/back-heart.webp)] absolute bottom-20 flex flex-col justify-center items-center w-[250px] h-[250px] bg-no-repeat bg-contain bg-center text-(--color-palette-four) gap-4 drop-shadow-heart md:w-[400px] md:h-[400px] lg:bottom-0'>
                  <p className='font-[GreatVibes] text-4xl md:text-6xl drop-shadow-letter -rotate-12'>Erick &amp; Yola</p>
                  <p className='font-[GreatVibes] text-3xl md:text-6xl drop-shadow-letter -rotate-12 w-[45%] text-right'>14.jun.25</p>
                </div>
              </div>
            </section>
            <section className='relative text-(--color-palette-four) flex gap-3 flex-col p-[3.5rem_2rem] items-center'>
              <img src={ornament} alt="ornament" className='w-[7.5rem] h-[7.5rem] sm:w-[9rem] sm:h-[9rem] absolute top-2 left-2 rotate-[-90deg]' />
              <img src={ornament} alt="ornament" className='w-[7.5rem] h-[7.5rem] sm:w-[9rem] sm:h-[9rem] absolute top-2 right-2' />
              <img src={ornament} alt="ornament" className='w-[7.5rem] h-[7.5rem] sm:w-[9rem] sm:h-[9rem] absolute bottom-2 left-2 rotate-[180deg]' />
              <img src={ornament} alt="ornament" className='w-[7.5rem] h-[7.5rem] sm:w-[9rem] sm:h-[9rem] absolute bottom-2 right-2 rotate-[90deg]' />
              <p className='font-[GreatVibes] p-[.5rem_0] text-[2.7rem] bg-gradient-to-r from-(--color-palette-one) via-(--color-palette-one) to-(--color-palette-one) text-transparent bg-clip-text sm:text-7xl'>Nuestra Historia</p>
              <div className='flex-1 flex flex-col gap-8 items-center sm:mt-5 sm:flex-row max-w-[1280px] sm:justify-around mb-10'>
                <img src={EY} alt='img' className='w-[230px] h-[230px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full border-2 border-(--color-palette-three) drop-shadow-3xl' />
                <div className='font-[Lora] text-center text-(--color-palette-one) max-w-[500px]'>
                  <p className='lg:text-lg'>Nuestro amor ha crecido y madurado, a veces de manera sencilla y otras caótica, pero siempre maravillosa.<br /> Comenzaremos una nueva etapa en nuestras vidas, enfrentandonos a nuevos desafíos que nos harán más fuertes y nos ayudarán a crecer juntos el resto de nuestros días.</p>
                </div>
              </div>
            </section>
            <section className='relative h-lvh w-lvw bg-[url(./assets/wellcome.webp)] bg-no-repeat bg-cover bg-[center_left_30%] xl:bg-[right_top_-350px] 2xl:bg-[right_top_-500px]'>
              <div className="absolute w-full h-full bg-black/80 backdrop-invert backdrop-opacity-10 border-t-4 border-b-4 border-(--color-palette-three)" />
              <div className='w-full h-full flex flex-col justify-center items-center backdrop-opacity-0 sm:gap-6'>
                <p className='font-[GreatVibes] p-[.5rem_0] text-[2.7rem] bg-gradient-to-r from-(--color-palette-three) via-(--color-palette-four) to-(--color-palette-three) text-transparent bg-clip-text sm:text-7xl drop-shadow-heart2'>Guardar la Fecha</p>
                <p className='font-[Lora] text-2xl bg-gradient-to-r from-(--color-palette-three) via-(--color-palette-four) to-(--color-palette-three) text-transparent bg-clip-text sm:text-3xl drop-shadow-heart2'>14 Junio 2025</p>
                <Countdown date={new Date("June 14, 2025 13:00:00")} renderer={renderer} />
                <p className='font-[Lora] p-1 text-2xl bg-gradient-to-r from-(--color-palette-four)/70 via-(--color-palette-four)/70 to-(--color-palette-four)/70 text-transparent bg-clip-text sm:text-3xl drop-shadow-heart2'>Agrégalo a tu Calendario</p>
                <div className='flex flex-wrap gap-4 justify-center items-center m-4 text-(--color-palette-two)/95'>
                  <button className='uppercase border w-[100%] sm:w-[250px] p-4 font-[Lora] rounded-full cursor-pointer'>ios y pc</button>
                  <button className='uppercase border w-[100%] sm:w-[250px] p-4 font-[Lora] rounded-full cursor-pointer'>google calendar</button>
                </div>
              </div>
            </section>
            <section className='relative text-(--color-palette-four) flex gap-3 flex-col p-4 items-center'>
              <img src={place} alt="place" className='w-[2rem]  h-[2rem] animate-bounce-infinite' />
              <div className='h-[1.5rem] border-l border-(--color-palette-one)/30' />
              <span className='border-t border-b border-(--color-palette-one)/30 p-[.5rem_1.5rem] mb-7'>
                <p className='font-[Lora] text-xl bg-gradient-to-r from-(--color-palette-one) via-(--color-palette-one) to-(--color-palette-one) text-transparent bg-clip-text sm:text-3xl'>Cuándo y dónde</p>
              </span>
              <Card
                title='Ceremonia'
                subtitle='Parroquia de la Santa Cruz Tlacotepec de Benito Juárez Puebla'
                location='C. 5 Nte. 15, Primera Centro, 75680 Tlacotepec de Benito Juárez, Pue.'
                date='14 Junio, 01:00 PM'
                description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, velit rerum illo perferendis praesentium numquam eum, facilis suscipit et mollitia voluptatibus quasi nulla excepturi! Tenetur modi atque animi laborum eaque.'
                link='maps'
                src={staCruz}
              />
              <br />
              <Card
                title='Recepción'
                subtitle='Salón -bungambilias-'
                location='Calle 5 Pte. 51, Segunda Centro, 75680 Tlacotepec de Benito Juárez, Pue.'
                date='14 Junio 2025, 03:00 PM'
                description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis ratione aspernatur, inventore amet deserunt id, possimus quis maxime aut saepe aliquid vel mollitia tenetur quibusdam velit, rerum minima voluptas soluta.'
                link='maps'
                src=''
              />
            </section>
          </>
      }

    </article>
  )
}

export default App
