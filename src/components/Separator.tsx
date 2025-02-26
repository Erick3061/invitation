import divider from '../assets/divider.svg';

export const Separator = ({ src = '', title, element }: { src?: string, title: string, element?: JSX.Element }) => (
    <>
        <img alt='' src={divider} className='w-[10rem] p-4' />
        {element ?? <img src={src} alt="place" className='w-[2.3rem] h-[2.3rem] animate-bounce-infinite' />}
        <div className='h-[1.5rem] border-l border-(--color-palette-one)/30' />
        <span className='border-t border-b border-(--color-palette-one)/30 p-[.5rem_1.5rem] mb-5'>
            <p className='font-[Lora] p-[.1rem] -tracking-[-.2rem] text-lg bg-gradient-to-r from-(--color-palette-one) via-(--color-palette-one) to-(--color-palette-one) text-transparent bg-clip-text sm:text-3xl'>{title}</p>
        </span>
    </>
);
