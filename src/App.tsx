import { useEffect, useRef, useState } from 'react';
import { Wellcome, Loading, Presentation, Us, CountDown, Location, Ininerary } from './components';

function App() {
  const refNames = useRef<HTMLDivElement>(null);
  const refWellCome = useRef<HTMLElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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
        isLoading ? <Loading />
          :
          <>
            <Wellcome {...{ refNames, refWellCome }} />
            <Presentation />
            <Us />
            <CountDown />
            <Location />
            <Ininerary />
          </>
      }
    </article>
  )
}

export default App
