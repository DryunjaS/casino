import type { AuthOptions, RequestInternal } from "next-auth";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
// paov pggl puzj hhdq
import Credentials from "next-auth/providers/credentials";

interface CustomUser{
    id:Date,
    name:string,
    email:string
}
interface NextAuthUser {
    id: string;
    name: string;
    email: string;
  }
const transformToNextAuthUser = (customUser: CustomUser): NextAuthUser => {
    return {
      id: customUser.id.toString(), // Преобразуем Date в строку
      name: customUser.name,
      email: customUser.email,
    };
  };
const authorize = async (
    credentials: Record<"email" | "password", string> | undefined,
    req: Pick<RequestInternal, "headers" | "body" | "query" | "method">
  ): Promise<NextAuthUser | null> => {
    if (!credentials?.email || !credentials.password) {
      return null;
    } else {
      const user: CustomUser = {
        id: new Date(),
        name: 'User',
        email: credentials.email
      };
      const nextAuthUser: NextAuthUser = transformToNextAuthUser(user);
      return nextAuthUser;
    }
  };
export const authConfig: AuthOptions = {
    providers:[
        Google({
            clientId: "930381326586-f5b9j2hcs2a5j706m33gdb7d2bo1tjhf.apps.googleusercontent.com",
            clientSecret: "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"
        }),
        Github({
          clientId: "c7a53a857fd33c5ad063",
          clientSecret: "9d54ac5aedd1d6e41411fe128f5dda02ab85f14c"
        }),
        Credentials({
            credentials: {
              email: { label: 'email', type: 'email', required: true },
              password: { label: 'password', type: 'password', required: true },
            },
            authorize: authorize,
          }),
    ]
}