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
        '/assets',
        '/api/webhook/clerk',
        '/api/webhook/stripe',
        '/api/uploadthing',
    ]
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};