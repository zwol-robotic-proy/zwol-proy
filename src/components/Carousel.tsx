'use client';
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
    Carousel,
    CarouselContent,
    CarouselItem
} from "@/components/ui/carousel";
import Image from "next/image";


const CarouselComponent = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 3500, stopOnInteraction: true })
    )

    return (
        <Carousel
            plugins={[plugin.current]}
            className=""
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {Array.from({ length: 3 }).map((_, index) => (
                    <CarouselItem key={index} className="pl-0">
                        <div>
                            <Image src={`/BANNER/Frame${index + 1}.jpg`} alt={`${index + 1}`} className="object-cover" width={4102} height={1517} />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
};

export default CarouselComponent;