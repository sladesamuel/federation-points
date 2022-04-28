import { NextResponse } from "next/server";
import Cookies from "universal-cookie";

const isPageUnprotected = (path) =>
  !!["404", "notfound", "not-found", "login", "logout"].find(
    (name) => name === path.replace("/", "")
  );

const isUserAuthenticated = async (request) => {
  const cookies = new Cookies(request.cookies);
  const token = cookies.get("nf-jwt");

  if (!token) {
    return false;
  }

  // TODO: Query Netlify API to check that the user is legit.
  return true;
};

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  if (isPageUnprotected(pathname) || (await isUserAuthenticated(request))) {
    return NextResponse.next();
  }

  const { origin } = request.nextUrl;
  return NextResponse.redirect(`${origin}/login`);
}
