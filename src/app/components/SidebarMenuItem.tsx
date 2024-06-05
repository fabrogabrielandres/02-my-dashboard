"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';


interface Props {
    path: string;
    title: string;
    subtitle: string;
    icon: JSX.Element;
}

export const SidebarMenuItem = ({ icon, subtitle, title, path }: Props) => {
    const currentpathname = usePathname()

    return (
        <>
            <Link href={path} className={`${currentpathname === path ? "bg-blue-800" : ""} w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150 `}>
                <div className='h-auto'>
                    {icon}
                </div>
                <div className="flex flex-col">
                    <span className="text-lg text-slate-300 font-bold leading-5">{title}</span>
                    <span className="text-sm text-slate-500 hidden md:block">{subtitle}</span>
                </div>
            </Link></>
    )
}
