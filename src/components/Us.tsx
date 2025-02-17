import ornament from '../assets/orn.png';
import EY from '../assets/E-Y.webp';
export const Us = () => (
    <section className='relative text-(--color-palette-four) flex gap-3 flex-col p-[3.5rem_2rem] items-center'>
        <img src={ornament} alt="ornament" className='w-[7.5rem] h-[7.5rem] sm:w-[9rem] sm:h-[9rem] absolute top-2 left-2 rotate-[-90deg]' />
        <img src={ornament} alt="ornament" className='w-[7.5rem] h-[7.5rem] sm:w-[9rem] sm:h-[9rem] absolute top-2 right-2' />
        <img src={ornament} alt="ornament" className='w-[7.5rem] h-[7.5rem] sm:w-[9rem] sm:h-[9rem] absolute bottom-2 left-2 rotate-[180deg]' />
        <img src={ornament} alt="ornament" className='w-[7.5rem] h-[7.5rem] sm:w-[9rem] sm:h-[9rem] absolute bottom-2 right-2 rotate-[90deg]' />
        <p className='font-[GreatVibes] p-[.5rem_0] text-[2.7rem] bg-gradient-to-r from-(--color-palette-one) via-(--color-palette-one) to-(--color-palette-one) text-transparent bg-clip-text sm:text-7xl'>Nuestra Historia</p>
        <div className='flex-1 flex flex-col gap-8 items-center sm:mt-5 sm:flex-row max-w-[1280px] sm:justify-around mb-10'>
            <img src={EY} alt='img' className='w-[230px] h-[230px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full border-2 border-(--color-palette-three) drop-shadow-3xl' />
            <div className='font-[Lora] text-center text-(--color-palette-one) max-w-[500px]'>
                <p className='lg:text-lg'>Nuestro amor ha crecido y madurado, a veces de manera sencilla y otras caótica, pero siempre maravillosa.<br /> Comenzaremos una nueva etapa en nuestras vidas, enfrentandonos a nuevos desafíos que nos harán más fuertes y nos ayudarán a crecer juntos el resto de nuestros días.</p>
            </div>
        </div>
    </section>
)
