import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/dashboard/main")
  return (
    <main>
        <h1>hola</h1>
    </main>
  );
}
