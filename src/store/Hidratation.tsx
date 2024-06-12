"use client";

import * as React from "react";
import { useCounterStore } from "@/store/counter/counterSlice";

const Hydration = () => {
    React.useEffect(() => {
        useCounterStore;
        // useCounterStore.persist.rehydrate();
    }, []);

    return null;
};

export default Hydration;