"use client"
import { useCounterStore } from "@/store/counter/counterSlice";
import { useEffect, useState } from "react";

interface Props {
    value?: number
}



const getCounterData = async (): Promise<any> => {
    try {
        const getdata = await fetch("/api/counter").then(res => res.json());
        // console.log("getdata", getdata);
        return getdata
    } catch (error) {
        return (error)

    }
}



export const CartCounter = ({ value = 0 }: Props) => {

    useEffect(() => {
        getCounterData().then(data => initCounterState(data.counter))
    })


    const addOne = useCounterStore((state) => state.addOne)
    const { dereaseOne } = useCounterStore()
    const { initCounterState } = useCounterStore()
    const { counter } = useCounterStore()



    return (
        <article className="flex flex-col w-full">
            <span className="text-9xl text-center">{counter}</span>
            <div className="flex justify-evenly">
                <button onClick={addOne} className="p-2 rounded-xl bg-gray-900 text-white hover:bg-grey-600 transition-all ">+1</button>
                <button onClick={dereaseOne} className="p-2 rounded-xl bg-gray-900 text-white hover:bg-grey-600 transition-all ">-1</button>
            </div>

        </article>
    )
}
