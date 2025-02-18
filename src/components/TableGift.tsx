import { Gift } from "../icons/Gift"
import { Separator } from "./"

export const TableGift = () => {
    return (
        <section className='relative text-(--color-palette-four) flex gap-3 flex-col p-4 items-center'>
            <Separator
                title='Mesa de regalos'
                element={<Gift className={{ className: 'w-[2rem] h-[2rem] animate-bounce-infinite text-red-900' }} />}
            />
        </section>
    )
}
