import { Suspense, useEffect, useRef, useState } from 'react';
import { lazy } from 'react';
import { Loading } from './components';
import song from './assets/song.mp3';
import { Music } from './icons/Music';
import { WA } from './icons/WA';

function App() {
  const refNames = useRef<HTMLDivElement>(null);
  const refWellCome = useRef<HTMLElement>(null);
  const refPresentation = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const icon = useRef<SVGSVGElement>(null);
  const audioElement = new Audio(song);
  audioElement.loop = true;

  const Wellcome = lazy(() => import('./components/Wellcome').then(({ Wellcome }) => ({ default: Wellcome })))
  const Presentation = lazy(() => import('./components/Presentation').then(({ Presentation }) => ({ default: Presentation })))
  const Us = lazy(() => import('./components/Us').then(({ Us }) => ({ default: Us })))
  const Fam = lazy(() => import('./components/Fam').then(({ Fam }) => ({ default: Fam })))
  const CountDown = lazy(() => import('./components/CountDown').then(({ CountDown }) => ({ default: CountDown })))
  const Location = lazy(() => import('./components/Location').then(({ Location }) => ({ default: Location })))
  const Intinerary = lazy(() => import('./components/Intinerary').then(({ Intinerary }) => ({ default: Intinerary })))
  const Galery = lazy(() => import('./components/Galery').then(({ Galery }) => ({ default: Galery })))
  const TableGift = lazy(() => import('./components/TableGift').then(({ TableGift }) => ({ default: TableGift })))
  const Footer = lazy(() => import('./components/Footer').then(({ Footer }) => ({ default: Footer })));
  const DressCode = lazy(() => import('./components/DressCode').then(({ DressCode }) => ({ default: DressCode })));

  audioElement.addEventListener('pause', () => {
    icon.current!.style.animationPlayState = 'paused';
  });
  audioElement.addEventListener('playing', () => {
    icon.current!.style.animationPlayState = 'running';
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setIsLoading(false);
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <article className="relative w-dvw h-dvh bg-fixed bg-[url(./assets/bg.png)] overflow-y-auto overflow-x-hidden">
      <Suspense fallback={<Loading />}>
        {
          isLoading ? <Loading />
            :
            <>
              <button
                className='fixed z-20 bottom-[50%] right-[.5rem] w-[3rem] h-[3rem] bg-(--color-palette-one)/50 rounded-full flex justify-center items-center shadow-2xs border border-(--color-palette-three) text-(--color-palette-three) cursor-pointer'
                onClick={() => audioElement.paused ? audioElement.play() : audioElement.pause()}
              >
                <Music refName={icon} />
              </button>
              <a
                target='_blank'
                className='fixed z-20 bottom-[1rem] right-[1rem] w-[3rem] h-[3rem] bg-[#075e54] rounded-full flex justify-center items-center shadow-2xs border border-[#dcf8c6] text-[#ece5dd] cursor-pointer'
                href={`https://wa.me/+5212371071069?text=Hola%20asistiré%20con%20gusto%20a%20tu%20boda`}
              >
                <WA className={{ className: 'w-[1.7rem] h-[1.7rem]' }} />
              </a>
              <Wellcome {...{ refNames, refWellCome, refPresentation, audio: audioElement }} />
              <Presentation {...{ refPresentation }} />
              <Fam />
              <Us />
              <CountDown />
              <Location />
              <DressCode />
              <Intinerary />
              <Galery />
              <TableGift />
              <Footer />
            </>
        }
      </Suspense>
    </article>
  )
}

export default App
