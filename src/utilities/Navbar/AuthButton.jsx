import { authUserSession } from "@/libs/auth-libs"
import Link from "next/link"

const AuthButton = async () => {

    const user = await authUserSession()
    const actionLabel = user? "Sign-out" : "Sign-in"
    const actionUrl = user? "/api/auth/signout" : "/api/auth/signin"

    return (
        <div className="flex flex-row gap-3 justify-between items-center">
            {
                user? (
                    <Link href="/users/dashboard">
                        Dashboard
                    </Link>
                ) :
                null
            }
            <Link rel="stylesheet" href={actionUrl} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {actionLabel}
            </Link>
        </div>
    )
}

export default AuthButton