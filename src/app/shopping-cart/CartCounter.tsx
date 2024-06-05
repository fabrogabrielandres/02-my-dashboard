"use client"
import { useState } from "react";



export const CartCounter = () => {
    const [count, setCount] = useState<number>(0)
    

    const handleCounter = (input: number) => {
        setCount(value => value + input)
    }
    return (
        <>
            <span className="text-9xl">{count}</span>
            <div className="flex justify-around w-full">
                <div onClick={() => handleCounter(1)} className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-grey-600 transition-all ">+1</div>
                <div onClick={() => handleCounter(-1)} className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-grey-600 transition-all ">-1</div>
            </div>

        </>
    )
}
