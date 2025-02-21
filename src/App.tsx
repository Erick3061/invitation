import { Suspense, useEffect, useRef, useState } from 'react';
import { lazy } from 'react';
import { Loading } from './components';
import song from './assets/song.mp3';
import { Music } from './icons/Music';

function App() {
  const refNames = useRef<HTMLDivElement>(null);
  const refWellCome = useRef<HTMLElement>(null);
  const refPresentation = useRef<HTMLElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const audioElement = new Audio(song);
  audioElement.loop = true;

  const Wellcome = lazy(() => import('./components/Wellcome').then(({ Wellcome }) => ({ default: Wellcome })))
  const Presentation = lazy(() => import('./components/Presentation').then(({ Presentation }) => ({ default: Presentation })))
  const Us = lazy(() => import('./components/Us').then(({ Us }) => ({ default: Us })))
  const CountDown = lazy(() => import('./components/CountDown').then(({ CountDown }) => ({ default: CountDown })))
  const Location = lazy(() => import('./components/Location').then(({ Location }) => ({ default: Location })))
  const Intinerary = lazy(() => import('./components/Intinerary').then(({ Intinerary }) => ({ default: Intinerary })))
  const Galery = lazy(() => import('./components/Galery').then(({ Galery }) => ({ default: Galery })))
  const TableGift = lazy(() => import('./components/TableGift').then(({ TableGift }) => ({ default: TableGift })))

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
                className='fixed z-20 bottom-[1rem] right-[1rem] w-[2.7rem] h-[2.7rem] bg-(--color-palette-one)/30 rounded-full flex justify-center items-center shadow-2xs border border-(--color-palette-four) text-red-500 cursor-pointer'
                onClick={() => audioElement.paused ? audioElement.play() : audioElement.pause()}
              >
                <Music/>
              </button>
              <Wellcome {...{ refNames, refWellCome, refPresentation, audio: audioElement }} />
              <Presentation {...{ refPresentation }} />
              <Us />
              <CountDown />
              <Location />
              <Intinerary />
              <Galery />
              <TableGift />
            </>
        }
      </Suspense>
    </article>
  )
}

export default App
