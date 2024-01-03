import Link from "next/link"

const Header = ({ title, link }) => {
    return (

        <div className="flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold text-color-primary">{title}</h1>
            {
                title && link
                    ?
                    <Link href={link} className="md:text-xl text-sm underline hover:text-color-accent text-color-primary transition-all">
                        {title}
                    </Link>
                    :
                    null
            }
        </div>
    )
}

export default Header