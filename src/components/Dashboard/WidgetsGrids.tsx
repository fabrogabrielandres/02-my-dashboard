"use client"
import { useCounterStore } from "@/store/counter/counterSlice"
import { SimpleWidget } from "./SimpleWidget"
import { IoCartOutline } from "react-icons/io5"



export const WidgetsGridsPage = () => {

    const { counter } = useCounterStore()


    return (
        <div className="p-2 flex flex-wrap items-center justify-center">
            <SimpleWidget
                title={`${counter}`}
                subTitle="Added Products"
                href="/dashboard/counter"
                label="Counter"
                icon={<IoCartOutline size={70} className="text-blue-600" />}

            />
        </div>
    )
}
