import { Suspense, useEffect, useRef, useState } from 'react';
import { lazy } from 'react';

function App() {
  const refNames = useRef<HTMLDivElement>(null);
  const refWellCome = useRef<HTMLElement>(null);
  const refPresentation = useRef<HTMLElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const Wellcome = lazy(() => import('./components/Wellcome').then(({ Wellcome }) => ({ default: Wellcome })))
  const Loading = lazy(() => import('./components/Loading').then(({ Loading }) => ({ default: Loading })))
  const Presentation = lazy(() => import('./components/Presentation').then(({ Presentation }) => ({ default: Presentation })))
  const Us = lazy(() => import('./components/Us').then(({ Us }) => ({ default: Us })))
  const CountDown = lazy(() => import('./components/CountDown').then(({ CountDown }) => ({ default: CountDown })))
  const Location = lazy(() => import('./components/Location').then(({ Location }) => ({ default: Location })))
  const Intinerary = lazy(() => import('./components/Intinerary').then(({ Intinerary }) => ({ default: Intinerary })))

  useEffect(() => {
    const timer = setInterval(() => {
      setIsLoading(false);
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Suspense fallback={<></>}>
      <article className="w-dvw h-dvh bg-fixed bg-[url(./assets/bg.png)] overflow-y-auto overflow-x-hidden">
        {
          isLoading ? <Loading />
            :
            <>
              <Wellcome {...{ refNames, refWellCome, refPresentation }} />
              <Presentation {...{ refPresentation }} />
              <Us />
              <CountDown />
              <Location />
              <Intinerary />
            </>
        }
      </article>
    </Suspense>
  )
}

export default App
