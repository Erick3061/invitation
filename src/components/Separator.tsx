export const Separator = ({ src = '', title, element }: { src?: string, title: string, element?: JSX.Element }) => (
    <>
        <br />
        {element ?? <img src={src} alt="place" className='w-[2rem]  h-[2rem] animate-bounce-infinite' />}
        <div className='h-[1.5rem] border-l border-(--color-palette-one)/30' />
        <span className='border-t border-b border-(--color-palette-one)/30 p-[.5rem_1.5rem] mb-7'>
            <p className='font-[Lora] -tracking-[-.3rem] text-xl bg-gradient-to-r from-(--color-palette-one) via-(--color-palette-one) to-(--color-palette-one) text-transparent bg-clip-text sm:text-3xl'>{title}</p>
        </span>
    </>
);
