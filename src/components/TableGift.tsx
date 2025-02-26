import { Gift } from "../icons/Gift"
import { Separator } from "./"

export const TableGift = () => {
    return (
        <section className='relative text-(--color-palette-one) flex gap-3 flex-col p-[2rem] items-center'>
            <Separator
                title='Mesa de regalos'
                element={<Gift className={{ className: 'w-[2rem] h-[2rem] animate-bounce-infinite text-red-900' }} />}
            />
            <p className='font-[Lora] p-[1rem] text-xl bg-gradient-to-r from-(--color-palette-one) via-(--color-palette-one) to-(--color-palette-one) text-transparent bg-clip-text sm:text-2xl drop-shadow-3x text-center'>Nuestro mejor regalo es contar con tu presencia y la de tu familia</p>
        </section>
    )
}
