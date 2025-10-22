import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Footer from "./Footer";
import GA from "./analytics/GA";

type Props = { title?: string; description?: string; children: React.ReactNode };

export default function Layout({ title, description, children }: Props) {
  const router = useRouter();
  const pageTitle = title ? `${title} | MRT Supplier` : "MRT Supplier | ครบ จบ ทุกเบอร์ อะไหล่อุตสาหกรรม";
  const pageDesc = description ?? "ผู้จัดจำหน่ายตลับลูกปืนและไส้กรองอุตสาหกรรม แบรนด์ชั้นนำ NTN, Donaldson, MANN ฯลฯ ครบ จบ ในที่เดียว";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MRT Supplier" />
      </Head>
      <GA />
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="font-bold text-lg tracking-wide">
            <span className="text-[var(--brand)]">MRT</span> Supplier
          </Link>
          <nav className="flex gap-5 text-sm">
            <Link href="/" className={router.pathname === "/" ? "font-semibold" : ""}>Home</Link>
            <Link href="/products" className={router.pathname.startsWith("/products") ? "font-semibold" : ""}>Products</Link>
            <Link href="/contact" className={router.pathname === "/contact" ? "font-semibold" : ""}>Contact</Link>
          </nav>
        </div>
      </header>
      <main className="min-h-[70vh]">{children}</main>
      <Footer />
    </>
  );
}
