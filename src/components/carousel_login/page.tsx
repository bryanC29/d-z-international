'use client';

import { useEffect, useState } from "react"
import Image from "next/image";
import { autocompleteClasses } from "@mui/material";

const images = [
    "/xyz (1).jpeg",
    "/xyz (2).jpeg",
    "/xyz (3).jpeg",
    "/xyz (4).jpeg",

];

const Carousel = () => {

    const [current, setCurrent] = useState(0);

    useEffect(()=>{
        setTimeout(() => {
            nextSlide();
        }, 4000);
    })

    const nextSlide = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    }

    return (
        <div>
            <div className='h-[80vh]'>
                {images.map((item, index) =>
                    current === index && (
                        <Image
                            key={index}
                            src={item}
                            className="h-[100%] rounded-l-2xl"
                            alt="Dark & Dusky Logo"
                            width={450}
                            height={500}
                        />
                    )
                )}
            </div>
        </div>
    )
}

export default Carousel