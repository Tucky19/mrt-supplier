import Layout from "@/components/Layout";
import PartLookup from "@/components/PartLookup";
import { productsByGroup, type ProductItem } from "@/data/products";
import Link from "next/link";

function CategoryCard({ product }: { product: ProductItem }) {
  return (
    <div className="border rounded-2xl p-5 bg-white hover:shadow-sm transition">
      <div className="font-semibold">{product.nameThEn}</div>
      <p className="text-sm text-gray-600 mt-1">{product.descriptionTh}</p>
      <p className="text-xs text-gray-500 mt-2">ตัวอย่างเบอร์: {product.samplePartNumbers.join(", ")}</p>
      <div className="mt-3 flex gap-2 flex-wrap">
        <Link
          href={`/quote?product=${encodeURIComponent(product.samplePartNumbers[0])}&source=products`}
          className="text-sm px-3 py-2 rounded-lg bg-[var(--brand)] text-white"
        >
          ขอใบเสนอราคา RFQ
        </Link>
        <Link href={`/products/${product.slug}`} className="text-sm px-3 py-2 rounded-lg border">
          รายละเอียดสินค้า Product Detail
        </Link>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <Layout title="สินค้า Products" description="หมวดหมู่ตลับลูกปืนและไส้กรอง พร้อมทางลัดไปยังการขอใบเสนอราคา RFQ">
      <section className="bg-gray-50 border-b">
        <div className="max-w-6xl mx-auto px-4 py-14 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">สินค้าอุตสาหกรรม Industrial Products</h1>
          <p className="text-gray-600 mt-3">
            ตลับลูกปืน (Bearings) และไส้กรอง (Filters) จากแบรนด์ระดับโลก พร้อมเส้นทางขอใบเสนอราคา RFQ ที่ชัดเจน
          </p>
          <div className="mt-6 flex justify-center gap-3 flex-wrap">
            <Link href="#bearings" className="px-4 py-2 rounded-xl border">หมวดตลับลูกปืน Bearings</Link>
            <Link href="#filters" className="px-4 py-2 rounded-xl border">หมวดไส้กรอง Filters</Link>
            <Link href="/quote" className="px-4 py-2 rounded-xl bg-[var(--brand)] text-white">ขอใบเสนอราคา RFQ</Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-8">
        <PartLookup />
      </section>

      <section id="bearings" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6">ตลับลูกปืน Bearings</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {productsByGroup.bearings.map((product) => (
            <CategoryCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section id="filters" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6">ไส้กรอง Filters</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {productsByGroup.filters.map((product) => (
            <CategoryCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
