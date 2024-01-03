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
            <Link rel="stylesheet" className="bg-slate-800 p-3 border-2 rounded-md" href={actionUrl}>{actionLabel}</Link>
        </div>
    )
}

export default AuthButton