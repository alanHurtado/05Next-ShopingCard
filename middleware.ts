import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  const sesion = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (req.nextUrl.pathname.startsWith("/checkout")) {
    const requestedPage = req.nextUrl.pathname;
    console.log("dame algo bonidto", requestedPage);

    const url = req.nextUrl.clone();
    url.pathname = `/auth/login`;
    url.search = `p=${requestedPage}`;
    if (!sesion) {
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
}
