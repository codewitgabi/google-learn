import authService from "@/services/auth.service";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", name: "email" },
        password: { label: "Password", type: "password", name: "password" },
      },
      async authorize(credentials) {
        const response = await fetch(`${API_BASE_URL}/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        });

        const responseData = await response.json();

        if (response.ok) {
          const user = responseData.data.user;
          await authService.setUserId(user._id);
          return user;
        }

        throw new Error(responseData.message);
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/login",
  },
  secret: process.env.NEXT_AUTH_SECRET,
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
});

export { handler as GET, handler as POST };
