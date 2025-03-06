'use client';

import { useEffect, useState } from "react"
import Image from "next/image";

const images = [
    "/darkndusky.png",
    "/darkndusky.png",
    "/darkndusky.png",
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
            <p>carousel</p>

            <div className="">
                {images.map((item, index) =>
                    current === index && (
                        <Image
                            key={index}
                            src={item}
                            className="h-8"
                            alt="Dark & Dusky Logo"
                            width={400}
                            height={35}
                        />
                    )
                )}
            </div>
        </div>
    )
}

export default Carousel