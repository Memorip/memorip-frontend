// import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// import ROUTE from '@/constants/route'
// import { isAuthenticated } from '@/features/auth/token'

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}

export function middleware(request: NextRequest) {
  // List of paths that don't require authentication
  // const unauthenticatedPaths: string[] = [ROUTE.HOME, ROUTE.SIGN_IN, ROUTE.SIGN_UP]
  // // If the request path is in the list of unauthenticated paths, return next()
  // if (unauthenticatedPaths.includes(request.nextUrl.pathname)) {
  //   return NextResponse.next()
  // }
  // // If the request path is not in the list of unauthenticated paths and the user is not authenticated, redirect to the sign in page
  // if (!isAuthenticated(request) && request.nextUrl.pathname !== ROUTE.SIGN_IN) {
  //   const url = request.nextUrl.clone()
  //   url.pathname = ROUTE.SIGN_IN
  //   return NextResponse.redirect(new URL(ROUTE.SIGN_IN, request.url))
  // }
}
