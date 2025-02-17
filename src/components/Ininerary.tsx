import { Clock } from '../icons/Clock';
import rings from '../assets/rings.png';
import { Separator } from './';

interface PropsInter {
  title: string;
  subtitle: string;
  text: string;
  src: string;
  isRight: boolean;
  icon?: boolean;
}

export const Ininerary = () => {
    const Inter = ({ title, subtitle, text, src, isRight, icon }: PropsInter) => (
        <div className={`flex ${!isRight && 'flex-row-reverse'} w-full`}>
          <div className={`relative w-[50%] text-(--color-palette-one)/80 border-(--color-palette-one)/10 pt-[3.5rem] pb-[3.5rem] ${isRight ? 'text-right border-r pr-4 lg:pr-[3rem]' : 'text-left border-l pl-4 lg:pl-[3rem]'} flex flex-col gap-2`}>
            <p className='uppercase text-xl font-semibold'>{title}</p>
            <p className='text-red-800 font-semibold'>{subtitle}</p>
            <p className='text-(--color-palette-one)/60 text-sm'>{text}</p>
            <svg width="20px" height="20px" viewBox="0 0 100 100" y="0px" x="0px" className={`${!icon && 'hidden'} absolute top-0 ${isRight ? 'right-[-.7rem]' : 'left-[-.7rem]'} drop-shadow-heart fill-red-900 animate-bounce-infinite`} >
              <g>
                <path className="path-heart" d="M89.49,37.8c0,25.54-39.59,46.24-39.59,46.24S10.31,63.34,10.31,37.8c0-29.59,39.59-28.67,39.59,0C49.9,10.06,89.49,8.21,89.49,37.8 z" strokeMiterlimit="10" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2"></path>
              </g>
            </svg>
          </div>
          <div className={`w-[50%] flex items-center ${isRight ? 'justify-self-start' : 'justify-end'}`}>
            <img src={src} alt={title} className={`${isRight ? 'pl-4 lg:pl-[3rem]' : 'pr-4 lg:pr-[3rem]'}`} />
          </div>
        </div>
      )

    return (
        <section className='relative text-(--color-palette-four) flex gap-3 flex-col p-4 items-center'>
            <Separator
                title='Itinerario'
                element={<Clock className={{ className: 'w-[2rem] h-[2rem] animate-bounce-infinite text-red-900' }} />}
            />
            <div className='w-full lg:max-w-[900px]'>
                <Inter
                    title='Recepción'
                    subtitle='9:30 - 11:00 pm'
                    text='Comparte con nosotros este momento.'
                    src={rings}
                    icon={false}
                    isRight
                />
                <Inter
                    title='Recepción'
                    subtitle='9:30 - 11:00 pm'
                    text='Comparte con nosotros este momento.'
                    src={rings}
                    icon
                    isRight={false}
                />
                <Inter
                    title='Recepción'
                    subtitle='9:30 - 11:00 pm'
                    text='Comparte con nosotros este momento.'
                    src={rings}
                    icon
                    isRight
                />
                <Inter
                    title='Recepción'
                    subtitle='9:30 - 11:00 pm'
                    text='Comparte con nosotros este momento.'
                    src={rings}
                    icon
                    isRight={false}
                />
            </div>
        </section>
    )
}
