'use client';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CARDS } from '@/lib/utils';
import CARSINFO from '@/DDBB/CARDS_INFO.json';
import Link from "next/link";
import React from "react";
import { metadata } from "@/lib/utils"; 
metadata.title = 'Productos';

const Productos = () => {
    return (
        <section className="bg-slate-100">
            <Navbar />
            <main className="p-4 mx-auto lg:h-screen h-full">
                <div className="grid gap-3 sm:gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        CARSINFO[0].productos.map((card: CARDS) => {
                            return <Card className="border border-transparent hover:border-zwol-1 hover:bg-zwol-1/10 flex flex-col" key={card.id}>
                                <Link className="text-center" href={`${card.href}`} passHref>
                                    <CardHeader>
                                        <CardTitle>{card.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <img src={card.IMG} alt={card.id} />
                                    </CardContent>
                                </Link>
                                <CardDescription className="w-[90%] pl-3 h-20 text-start ml-3 mb-3">{card.Sdescription}</CardDescription>
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