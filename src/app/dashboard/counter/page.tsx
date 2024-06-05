import { CartCounter } from "@/app/shopping-cart/CartCounter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Counter Cart",
  description: "Generated by create next app",
};


export default function CounterPage() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <span>Products on Car</span>
      <CartCounter />
    </div>

  );
}   