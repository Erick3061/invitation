import { Separator } from "./Separator"
import { Agenda } from '../icons/Agenda';
export const Galery = () => {

    return (
        <section className='relative text-(--color-palette-four) flex gap-3 flex-col p-4 items-center'>
            <Separator
                title='Galería'
                element={<Agenda className={{ className: 'w-[2rem] h-[2rem] animate-bounce-infinite text-red-900' }} />}
            />
        </section>
    )
}
