import Link from "next/link"

const Header = ({ title, link }) => {
    return (

        <div className="flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold text-slate-600">{title}</h1>
            {
                title && link
                    ?
                    <Link href={link} className="md:text-xl text-sm underline hover:text-color-accent text-slate-600 transition-all">
                        {title}
                    </Link>
                    :
                    null
            }
        </div>
    )
}

export default Header