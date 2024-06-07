"use client"
import { useState } from "react";



export const CartCounter = () => {
    const [count, setCount] = useState<number>(0)


    const handleCounter = (input: number) => {
        setCount(value => value + input)
    }
    return (
        <article className="flex flex-col w-full">
            <span className="text-9xl text-center">{count}</span>
            <div className="flex justify-evenly">
                <button onClick={() => handleCounter(1)} className="p-2 rounded-xl bg-gray-900 text-white hover:bg-grey-600 transition-all ">+1</button>
                <button onClick={() => handleCounter(-1)} className="p-2 rounded-xl bg-gray-900 text-white hover:bg-grey-600 transition-all ">-1</button>
            </div>

        </article>
    )
}
