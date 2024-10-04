
import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = async () => NextAuth({

    session: {
        strategy: "jwt",
        maxAge: " 30*24*60*60"
    },
    providers: [
        CredentialsProvider({
            credentials:{
                email:{},
                password:{}
            },
            async authorize (credentials){
               return true;
            }
        })
    ],
    collbacks: {},
    pages: {
        login: "/login"
    }


})


export { handler as GET, handler as POST }