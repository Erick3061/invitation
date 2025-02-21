import { Separator } from "./Separator"
import { Agenda } from '../icons/Agenda';
import { useEffect, useState } from "react";
import { images } from "./images";
import { Gallery } from "react-grid-gallery";
import "react-image-lightbox/style.css";
import Lightbox from "react-image-lightbox";

export const Galery = () => {

    const [index, setIndex] = useState(-1);

    const currentImage = images[index];
    const nextIndex = (index + 1) % images.length;
    const nextImage = images[nextIndex] || currentImage;
    const prevIndex = (index + images.length - 1) % images.length;
    const prevImage = images[prevIndex] || currentImage;

    const handleClick = (index: number,) => setIndex(index);
    const handleClose = () => setIndex(-1);
    const handleMovePrev = () => setIndex(prevIndex);
    const handleMoveNext = () => setIndex(nextIndex);

    useEffect(() => {
      document.querySelector('.ReactGridGallery')?.firstElementChild?.classList.add('custom');
    }, [])
    

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
                    tileViewportStyle={{height:'50%'}}
                    thumbnailStyle={{width:'10rem'}}
                    
                />
                {!!currentImage && (
                    <Lightbox
                        mainSrc={currentImage.original}
                        mainSrcThumbnail={currentImage.src}
                        nextSrc={nextImage.original}
                        nextSrcThumbnail={nextImage.src}
                        prevSrc={prevImage.original}
                        prevSrcThumbnail={prevImage.src}
                        onCloseRequest={handleClose}
                        onMovePrevRequest={handleMovePrev}
                        onMoveNextRequest={handleMoveNext}
                    />
                )}
            </div>
        </section>
    )
}
