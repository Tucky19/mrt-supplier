import Layout from "@/components/Layout";
import { findProductBySlug, products, type ProductItem } from "@/data/products";
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";

type Props = {
  product: ProductItem;
  relatedProducts: ProductItem[];
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: products.map((product) => ({ params: { slug: product.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = typeof params?.slug === "string" ? params.slug : "";
  const product = findProductBySlug(slug);

  if (!product) {
    return { notFound: true };
  }

  const relatedProducts = products
    .filter((candidate) => candidate.group === product.group && candidate.slug !== product.slug)
    .slice(0, 3);

  return {
    props: { product, relatedProducts },
  };
};

export default function ProductDetailPage({
  product,
  relatedProducts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout title={`${product.nameThEn} | รายละเอียดสินค้า`} description={`${product.descriptionTh} พร้อมช่องทางขอใบเสนอราคา RFQ`}>
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-sm text-gray-500 mb-4">
          <Link href="/products" className="underline">สินค้า Products</Link> / <span>{product.nameThEn}</span>
        </div>

        <div className="rounded-2xl border bg-white p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold">{product.nameThEn}</h1>
          <p className="mt-4 text-gray-700">{product.descriptionTh}</p>
          <p className="mt-2 text-sm text-gray-600">ตัวอย่างเบอร์ที่พบในงานจริง: {product.samplePartNumbers.join(", ")}</p>

          <div className="mt-6 grid md:grid-cols-3 gap-3 text-sm">
            <div className="rounded-xl border bg-gray-50 p-3">
              <p className="font-semibold">Sourcing Support</p>
              <p className="mt-1 text-gray-700">ช่วย cross-reference เบอร์เดิม/เบอร์เทียบก่อนเสนอราคา.</p>
            </div>
            <div className="rounded-xl border bg-gray-50 p-3">
              <p className="font-semibold">Authenticity</p>
              <p className="mt-1 text-gray-700">จัดหาสินค้าตามแบรนด์ที่ลูกค้าระบุ พร้อมข้อมูลอ้างอิง.</p>
            </div>
            <div className="rounded-xl border bg-gray-50 p-3">
              <p className="font-semibold">Lead-time Clarity</p>
              <p className="mt-1 text-gray-700">แจ้ง lead time และเงื่อนไขก่อนยืนยันใบเสนอราคา.</p>
            </div>
          </div>

          <div className="mt-6 rounded-xl bg-gray-50 border p-4 text-sm text-gray-700">
            <p className="font-semibold">สำหรับงานจัดซื้อ B2B</p>
            <p className="mt-1">ระบุเบอร์รุ่น/จำนวน/กำหนดส่ง แล้วส่ง RFQ เพื่อรับการยืนยันสเปกและใบเสนอราคาจากทีมฝ่ายขาย.</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={`/quote?product=${encodeURIComponent(product.samplePartNumbers[0])}&source=product-detail`}
              className="px-5 py-3 rounded-xl bg-[var(--brand)] text-white"
            >
              ขอใบเสนอราคา RFQ สำหรับรายการนี้
            </Link>
            <Link href="/contact" className="px-5 py-3 rounded-xl border">ติดต่อฝ่ายขาย Contact</Link>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold">รายการใกล้เคียง Related Products</h2>
            <div className="mt-3 grid md:grid-cols-3 gap-3">
              {relatedProducts.map((related) => (
                <Link key={related.slug} href={`/products/${related.slug}`} className="rounded-xl border p-4 bg-white hover:bg-gray-50">
                  <div className="font-medium text-sm">{related.nameThEn}</div>
                  <div className="text-xs text-gray-600 mt-1">{related.samplePartNumbers[0]}</div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
}
