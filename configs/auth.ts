import type { AuthOptions } from "next-auth";
import Google from "next-auth/providers/google";

export const authConfig: AuthOptions = {
    providers:[
        Google({
            clientId: "930381326586-f5b9j2hcs2a5j706m33gdb7d2bo1tjhf.apps.googleusercontent.com",
            clientSecret: "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"
        })
    ]
}