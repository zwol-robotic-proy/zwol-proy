'use client';
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";


const CarouselComponent = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 3500, stopOnInteraction: true })
    )

    return (
        <Carousel
            plugins={[plugin.current]}
            className="h-screen bg-zwol-1/50"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {Array.from({ length: 3 }).map(( _ , index) => (
                    <CarouselItem key={index} className="pl-0">
                        <div>
                            <img src={`BANNER/Frame${index+1}.jpg`} alt={`${index+1}`} className="h-screen object-cover" />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
 
        </Carousel>
    )
};

export default CarouselComponent;