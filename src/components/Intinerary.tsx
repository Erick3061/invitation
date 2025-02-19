import { Clock } from '../icons/Clock';
import rings from '../assets/rings.png';
import { Separator } from '.';
import { Inter } from './Inter';

export const Intinerary = () => {
    return (
        <section className='relative text-(--color-palette-four) flex gap-3 flex-col p-4 items-center'>
            <Separator
                title='Itinerario'
                element={<Clock className={{ className: 'w-[2rem] h-[2rem] animate-bounce-infinite text-red-900' }} />}
            />
            <div className='w-full lg:max-w-[900px]'>
                <Inter
                    title='Recepción'
                    subtitle='3:00 pm'
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
