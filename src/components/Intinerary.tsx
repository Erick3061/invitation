import { Clock } from '../icons/Clock';
import { Separator } from '.';
import { Inter } from './Inter';
import reception from '../assets/reception.png';
import rings from '../assets/rings.png';
import comida from '../assets/comida.png';
import pastel from '../assets/pastel.webp';
import vals from '../assets/vals.png';
import brindis from '../assets/brindis.png';
import baile from '../assets/baile.png';

export const Intinerary = () => {
    return (
        <section className='relative flex gap-3 flex-col p-4 items-center'>
            <Separator
                title='Itinerario'
                element={<Clock className={{ className: 'w-[2rem] h-[2rem] animate-bounce-infinite text-red-900' }} />}
            />
            <div className='w-full lg:max-w-[900px]'>
                <Inter
                    title='Recepción'
                    subtitle='3:00 pm'
                    text='Sería un honor el recibirlos.'
                    src={reception}
                    icon={false}
                    isRight
                    className={{className:'pt-[3rem] pb-[3rem]'}}
                />
                <Inter
                    title='Boda civil'
                    subtitle='3:00 - 3:30 pm'
                    text='Comparte con nosotros este momento donde juramos estar juntos toda la vida.'
                    src={rings}
                    icon
                    isRight={false}
                    className={{className:'pt-[3rem] pb-[3rem]'}}
                />
                <Inter
                    title='Fiesta'
                    subtitle='3:30 pm'
                    text='Preparamos un pequeño refrigerio para todos ustedes.'
                    src={comida}
                    icon
                    isRight
                    className={{className:'pt-[3rem] pb-[3rem]'}}
                />
                <Inter
                    title='Pastel'
                    subtitle='7:30 pm'
                    text='Momento donde endulzaremos nuestro paladar con el postre.'
                    src={pastel}
                    icon
                    isRight={false}
                    className={{className:'pt-[3rem] pb-[3rem]'}}
                />
                <Inter
                    title='Vals'
                    subtitle='8:00 pm'
                    text='Compartiremos este momento con nuestra familia y amigos.'
                    src={vals}
                    icon
                    isRight
                    className={{className:'pt-[3rem] pb-[3rem]'}}
                />
                <Inter
                    title='Brindis'
                    subtitle='8:30 pm'
                    text='Salud por nosotros y todos nuestros invitados.'
                    src={brindis}
                    icon
                    isRight={false}
                    className={{className:'pt-[3rem] pb-[3rem]'}}
                />
                <Inter
                    title='Baile'
                    subtitle='9:00 pm'
                    text='Baila con nosotros hasta que la fiesta acabe...'
                    src={baile}
                    icon
                    isRight
                    className={{className:'pt-[3rem] pb-[3rem]'}}
                />
            </div>
        </section>
    )
}
