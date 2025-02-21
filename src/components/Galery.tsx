import { Separator } from "./Separator"
import { Agenda } from '../icons/Agenda';
import { useEffect, useState } from "react";
import { images } from "./images";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export const Galery = () => {
    const [index, setIndex] = useState(-1);

    const handleClick = (index: number) => setIndex(index);

    useEffect(() => {
        document.querySelector('.ReactGridGallery')?.firstElementChild?.classList.add('custom');
    }, []);


    return (
        <section className='flex flex-col items-center justify-center'>
            <Separator
                title='Galería'
                element={<Agenda className={{ className: 'w-[2rem] h-[2rem] animate-bounce-infinite text-red-900' }} />}
            />
            <div className="w-full">
                <Gallery
                    images={images}
                    onClick={handleClick}
                    enableImageSelection={false}
                    tileViewportStyle={{ height: '50%', backgroundColor:'transparent', borderRadius:'2rem' }}
                    thumbnailStyle={{ width: '9rem' }}
                />
                <Lightbox
                    slides={images}
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                />
            </div>
        </section>
    )
}
