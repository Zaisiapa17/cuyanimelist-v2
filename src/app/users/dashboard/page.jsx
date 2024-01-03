import { authUserSession } from "@/libs/auth-libs"
import Image from "next/image"

const Page = async () => {

    const user = await authUserSession()
    
    return (
        <div>
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
            <Image src={user.image} width={100} height={100}/>
        </div>
    )
}

export default Page