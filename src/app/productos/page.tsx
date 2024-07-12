'use client';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CARDS } from '@/lib/utils';
import CARSINFO from '@/DDBB/CARDS_INFO.json';
import Link from "next/link";
import React from "react";

const Productos = () => {
    return (
        <section className="bg-slate-100">
            <Navbar />
            <main className="py-28 mt-10 mx-auto max-w-7xl h-full lg:h-screen">
                <div className="grid gap-3 sm:gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        CARSINFO[0].productos.map((card: CARDS) => {
                            return <Card className="border border-transparent hover:border-zwol-1 hover:bg-zwol-1/10 flex flex-col" key={card.id}>
                                <Link className="text-center" href={`${card.href}${card.id}`} passHref>
                                    <CardHeader>
                                        <CardTitle>{card.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <img src={card.IMG} alt={card.id} />
                                    </CardContent>
                                </Link>
                                <CardDescription className="w-[90%] pl-3 justify-center h-20 overflow-y-scroll text-start ml-3 mb-3">{card.Sdescription}</CardDescription>
                            </Card>
                        })
                    }
                </div>
            </main>
            <Footer />
        </section>
    )
};

export default Productos;