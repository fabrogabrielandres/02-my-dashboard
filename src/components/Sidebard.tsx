import Image from "next/image"
import { IoLogoReact } from "react-icons/io5"
import { RiDatabase2Line } from "react-icons/ri";
import { SidebarMenuItem } from "./SidebarMenuItem";
import { CiGrid41 } from "react-icons/ci";
import { MdCatchingPokemon } from "react-icons/md";
import Link from "next/link";



interface Props {
    path: string;
    title: string;
    subtitle: string;
    icon: JSX.Element;
}

const sidebar: Array<Props> = [
    {
        path: "/dashboard/main",
        title: "DashBoard",
        subtitle: "Data Overview",
        icon: <RiDatabase2Line />
    },
    {
        path: "/dashboard/counter",
        title: "Counter",
        subtitle: "Local State",
        icon: <CiGrid41 />
    },
    {
        path: "/dashboard/pokemon",
        title: "pokemons",
        subtitle: "Page pokemons",
        icon: <MdCatchingPokemon />
    }
]

export const SideBard = () => {

    return (
        <div id="menu" className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0"
            style={{ width: "400px" }}
        >
            <div id="logo" className="my-4 px-6">



                <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
                    <IoLogoReact className="mr-2" />
                    <span>Dash</span>
                    <span className="text-blue-500">8</span>.
                </h1>

                <p className="text-slate-500 text-sm">Manage your actions and activities</p>
            </div>
            <div id="profile" className="px-6 py-10">
                <p className="text-slate-500">Welcome back,</p>
                <div className="inline-flex space-x-2 items-center">
                    <span>
                        <Image width={30} height={30} src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c" alt=""  ></Image>
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        Edward Tompson
                    </span>
                </div>
            </div>
            <div id="nav" className="w-full px-6">

                {sidebar.map(({ ...rest }) => <SidebarMenuItem key={rest.path} {...rest} />)}

            </div>
        </div>
    )
}
