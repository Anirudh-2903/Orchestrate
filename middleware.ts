import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes:[
        '/',
        '/events/:id',
        '/api/webhook/clerk',
        '/api/webhook/stripe',
        '/api/uploadthing',
    ],
    ignoredRoutes:[
        '/icon.png',
        '/assets/images/logo.png',
        '/assets/images/dotted-pattern.png',
        '/manifest.json',
        '/api/webhook/clerk',
        '/api/webhook/stripe',
        '/api/uploadthing',
    ]
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};