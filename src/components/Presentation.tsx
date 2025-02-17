export const Presentation = () => (
    <section className='relative h-lvh w-lvw bg-[url(./assets/wellcome1.webp)] bg-no-repeat bg-cover bg-[center_right_20%] xl:bg-[right_top_-350px] 2xl:bg-[right_top_-500px]'>
        <div className="absolute w-full h-full bg-black/50 backdrop-invert backdrop-opacity-5" />
        <div className='w-full h-full flex justify-center backdrop-opacity-0'>
            <div className='bg-[url(./assets/back-heart.webp)] absolute bottom-20 flex flex-col justify-center items-center w-[250px] h-[250px] bg-no-repeat bg-contain bg-center text-(--color-palette-four) gap-4 drop-shadow-heart md:w-[400px] md:h-[400px] lg:bottom-0'>
                <p className='font-[GreatVibes] text-4xl md:text-6xl drop-shadow-letter -rotate-12'>Erick &amp; Yola</p>
                <p className='font-[GreatVibes] text-3xl md:text-6xl drop-shadow-letter -rotate-12 w-[45%] text-right'>14.jun.25</p>
            </div>
        </div>
    </section>
)
