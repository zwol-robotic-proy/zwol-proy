import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import CARSINFO from '@/DDBB/CARDS_INFO.json';
import Link from "next/link";
import React from "react";

interface CARDS {
    id?: string
    title?: string
    description?: string
    HREF?: string
    IMG?: string
}


const Productos = () => {

    return (
        <>
            <Navbar />
            <main className="mt-28 mx-auto max-w-7xl h-screen bg-zwol-1/5">
                <div className="grid grid-cols-3 gap-7">
                    {
                        CARSINFO.map((card : CARDS) => (
                            <Link className="text-center" href={`productos/p/${card.id}`} passHref key={card.id}>
                                <Card className="border border-transparent hover:border-zwol-1" key={card.id}>
                                    <CardHeader>
                                        <CardTitle>{card.title}</CardTitle>
                                        <CardDescription>{card.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <img src={card.IMG} alt={card.id} />
                                    </CardContent>
                                    <CardFooter>
                                        <p>Card Footer</p>
                                    </CardFooter>
                                </Card>
                            </Link>
                        ))
                    }
                </div>
            </main>
            <Footer />
        </>
    )
};

export default Productos;