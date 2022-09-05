import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  const sesion: any = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const requestedPage = req.nextUrl.pathname;
  const url = req.nextUrl.clone();
  url.pathname = `/auth/login`;
  url.search = `p=${requestedPage}`;

  if (req.nextUrl.pathname.startsWith("/checkout")) {
    if (!sesion) {
      return NextResponse.redirect(url);
    }
  }

  if (req.nextUrl.pathname.startsWith("/admin")) {
    if (!sesion) {
      return NextResponse.redirect(url);
    }
    const validRoles = ["admin", "super-user", "SEO"];

    if (!validRoles.includes(sesion.user.role)) {
      const url = req.nextUrl.clone();
      url.pathname = `/`;
      console.log("que rol es este", sesion.user.role);
      return NextResponse.redirect(url);
    }
  }

  if (req.nextUrl.pathname.startsWith("/api/admin")) {
    if (!sesion) {
      return new Response(JSON.stringify({ message: "No autorizado" }), {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    const validRoles = ["admin", "super-user", "SEO"];

    if (!validRoles.includes(sesion.user.role)) {
      const url = req.nextUrl.clone();
      url.pathname = `/`;
      return new Response(JSON.stringify({ message: "No autorizado" }), {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  }

  return NextResponse.next();
}
