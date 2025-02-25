import { Gift } from "../icons/Gift"
import { Separator } from "./"

export const TableGift = () => {
    return (
        <section className='relative text-(--color-palette-one) flex gap-3 flex-col p-[2rem] items-center'>
            <Separator
                title='Mesa de regalos'
                element={<Gift className={{ className: 'w-[2rem] h-[2rem] animate-bounce-infinite text-red-900' }} />}
            />
            <p className="font-[Lora] text-center" >Nuestro mejor regalo es contar con tu presencia y la de tu familia</p>
            <p className="font-[Lora] text-center" >Con gran alegría, les invitamos a compartir nuestro día especial mientras unimos nuestras vidas en matrimonio.</p>
        </section>
    )
}
