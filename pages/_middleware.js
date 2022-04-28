import { NextResponse } from "next/server";
import auth from "../utils/auth";

const isPageUnprotected = (path) =>
  !!["404", "notfound", "not-found", "login", "logout"].find(
    (name) => name === path.replace("/", "")
  );

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  if (isPageUnprotected(pathname) || auth.isAuthenticated) {
    return NextResponse.next();
  }

  const { origin } = request.nextUrl;
  return NextResponse.redirect(`${origin}/login`);
}
