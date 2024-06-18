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
            <main className="py-28 mx-auto max-w-7xl h-full">
                <div className="grid gap-3 sm:gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        CARSINFO[0].productos.map((card: CARDS) => {
                            return <Card className="border border-transparent hover:border-zwol-1 hover:bg-zwol-1/10" key={card.id}>
                                <Link className="text-center" href={`${card.href}${card.id}`} passHref>
                                    <CardHeader>
                                        <CardTitle>{card.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <img src={card.IMG} alt={card.id} />
                                    </CardContent>
                                    <CardDescription className="w-11/12 text-start ml-3 mb-3">{card.Sdescription}</CardDescription>
                                </Link>
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