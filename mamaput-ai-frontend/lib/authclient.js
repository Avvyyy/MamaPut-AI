import { createAuthClient } from "better-auth/react"
import { emailOTPClient } from "better-auth/client/plugins"

export const authClient =  createAuthClient({
    baseURL: "http://localhost:3005",
    plugins: [
        emailOTPClient()
    ]
})