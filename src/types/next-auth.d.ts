// types/next-auth.d.ts
import "next-auth";
import { IUser } from "./user.types";

declare module "next-auth" {
  interface Session {
    user: IUser & User;
  }

  interface JWT {
    user?: IUser & User;
  }
}
