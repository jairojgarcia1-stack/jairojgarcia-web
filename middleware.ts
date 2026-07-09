import { NextResponse, type NextRequest } from "next/server";

const LOCALE_COOKIE = "NEXT_LOCALE";
const ONE_YEAR = 60 * 60 * 24 * 365;

function prefersEnglish(acceptLanguage: string | null): boolean {
  if (!acceptLanguage) return false;

  const languages = acceptLanguage
    .split(",")
    .map((entry) => {
      const [tag, qPart] = entry.trim().split(";q=");
      return { tag: tag.trim().toLowerCase(), q: qPart ? parseFloat(qPart) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  const top = languages[0];
  if (!top) return false;
  if (top.tag.startsWith("es")) return false;
  return top.tag.startsWith("en");
}

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname !== "/") {
    return NextResponse.next();
  }

  const existingLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  if (existingLocale === "es") {
    return NextResponse.next();
  }
  if (existingLocale === "en") {
    return NextResponse.redirect(new URL("/en", request.url), 307);
  }

  if (prefersEnglish(request.headers.get("accept-language"))) {
    const response = NextResponse.redirect(new URL("/en", request.url), 307);
    response.cookies.set(LOCALE_COOKIE, "en", { path: "/", maxAge: ONE_YEAR });
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)"],
};
