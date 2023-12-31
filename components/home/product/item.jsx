import Link from "next/link";
import { useMemo } from "react"

export default function ProductItem({ thumbnail, title, caption, rev, scheme, link }) {
    const rowclass = useMemo(() => {
        const base = "flex flex-col justify-center items-center lg:flex-row gap-x-8 gap-y-6 mx-2 py-6 px-4 rounded-xl border-2 border-dashed border-transparent hover:border-indigo-400 "
        if (rev)
            return base + "lg:flex-row-reverse"

        return base + "lg:flex-row"
    }, [rev]);

    return (
        <div className={rowclass}>
            <div className="w-full sm:w-[24rem] h-auto lg:w-[36rem] lg:h-60 text-center relative flex justify-center">
                <img
                    src={thumbnail}
                    alt={title}
                    className=""
                />
            </div>
            <div className="w-full lg:flex-grow text-lg text-center lg:text-start">
                <h1 className="text-2xl  sm:text-3xl mb-6 font-semibold text-zinc-700">{title}</h1>
                <p className="text-gray-700 text-center md:text-justify text-lg px-4">
                    {caption}
                </p>
                <Link href={link} className="mt-6 btn btn-indigo btn-block btn-pill">
                    ثبت سفارش
                </Link>
            </div>
        </div>
    )
}
