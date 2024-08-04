"use server";

import { loggedInCookieName } from "@/utils/constants";
import { cookies } from "next/headers";

export async function setLoginCookie(token) {
  cookies().set(loggedInCookieName, "true");
  cookies().set('token', token);
}

export async function resetLoginCookie() {
  cookies().delete(loggedInCookieName);
  cookies().delete('token');
}
