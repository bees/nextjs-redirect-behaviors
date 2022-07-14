import { NextFetchEvent, NextMiddleware, NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: ["/both-defined", "/middleware-only"],
};

const middlewares: Record<string, NextMiddleware> = {
  "/both-defined": (req) =>
    NextResponse.redirect(new URL("/?fromMiddleware=true", req.url)),
  "/middleware-only": (req) =>
    NextResponse.redirect(new URL("/?fromMiddleware=true", req.url)),
};

export function middleware(request: NextRequest, event: NextFetchEvent) {
  const path = request.nextUrl.pathname;
  if (path in middlewares) {
    return middlewares[path](request, event);
  }
  return NextResponse.next();
}
