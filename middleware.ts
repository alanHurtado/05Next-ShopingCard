import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { jwt } from "./utils";

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  const token = req.cookies.get("token");

  if (req.nextUrl.pathname.startsWith("/checkout")) {
    console.log("imprime esto", token);
    // try {
    //   await jwt.isValidToken(token!);
    //   return NextResponse.next();
    // } catch (error) {
    //     return Response.redirect('/auth/login');
    // //   const requestedPage = req.page;
    // //   return NextResponse.redirect(`http://localhost:3000/auth/login?p=${requestedPage}`);
    // }
  }
}
