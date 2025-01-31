import { cookies } from "next/headers";

class AuthService {
  async setUserId(userId: string) {
    const cookieStore = await cookies();
    cookieStore.set("userId", userId);
  }

  async getUserId() {
    const cookieStore = await cookies();
    const hasUserId = cookieStore.has("userId");
    const userId = cookieStore.get("userId")?.value;

    return { userId, hasUserId };
  }
}

const authService = new AuthService();
export default authService;
