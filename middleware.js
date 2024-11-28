import { NextResponse } from 'next/server'
import acceptLanguage from 'accept-language'
import { fallbackLng, languages, cookieName } from './app/i18n/settings'

acceptLanguage.languages(languages)

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest|sitemap.xml|sitemap-0.xml|error.js|not-found.js).*)']
}

export function middleware(req) {
  let lng
  if (req.cookies.has(cookieName)) lng = acceptLanguage.get(req.cookies.get(cookieName).value)
  if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'))
  if (!lng) lng = fallbackLng

  const pathname = req.nextUrl.pathname
  
  if(pathname === `/${fallbackLng}`)
  {
    return NextResponse.redirect(new URL(pathname.replace(`/${fallbackLng}`, '/'), req.url))
  }
    
    
  if(pathname.startsWith(`/${fallbackLng}/`) )
  {
    return NextResponse.redirect(new URL(pathname.replace(`/${fallbackLng}/`, '/'), req.url))
  }

  // // 处理根路径 - 只在首次访问时重定向到检测到的语言
  // if (pathname === '/') {
  //   // 如果是默认语言(英文)，保持在根路径
  //   if (lng === fallbackLng) {
  //     return NextResponse.next()
  //   }
  //   // 其他语言重定向到对应语言路径
  //   return NextResponse.redirect(new URL(`/${lng}`, req.url))
  // }

  // // 检查当前URL是否已经包含语言前缀
  // const pathnameHasLang = languages.some(loc => pathname.startsWith(`/${loc}`))
  
  // // 如果URL中没有语言前缀，且不是系统路径，添加语言前缀
  // if (!pathnameHasLang && !pathname.startsWith('/_next')) {
  //   // 如果是默认语言，不添加语言前缀
  //   if (lng === fallbackLng) {
  //     return NextResponse.next()
  //   }
  //   return NextResponse.redirect(new URL(`/${lng}${pathname}`, req.url))
  // }

  // 处理 referer 并设置 cookie
  if (req.headers.has('referer')) {
    const refererUrl = new URL(req.headers.get('referer'))
    const lngInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`))
    const response = NextResponse.next()
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer)
    return response
  }

  return NextResponse.next()
}