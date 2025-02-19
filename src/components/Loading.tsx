
import { Heart } from '../icons/Heart';
export const Loading = () => {
    return (
        <div className='w-full h-full flex justify-center items-center'>
            <div className="flex-col gap-4 w-full flex items-center justify-center">
                <div className="w-22 h-22 border-2 border-transparent text-4xl animate-spin flex items-center justify-center border-t-(--color-palette-one) rounded-full" />
                <Heart className={{className:'absolute animate-pulse'}}/>
            </div>
        </div>
    )
}
