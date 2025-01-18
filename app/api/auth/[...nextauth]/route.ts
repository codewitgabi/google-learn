import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        phone: { label: "Username", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch("http://localhost:8000/auth/login/", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const user = await res.json();

        if (res.ok && user) {
          return user;
        }
        
        return null;
      },
    }),
  ],

  callbacks: {
    async session({ session, token }) {
      session.user = token.user; // Attach user data to session
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user; // Add user data to token
      }
      return token;
    },
  },
  secret: process.env.NEXT_AUTH_SECRET
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
