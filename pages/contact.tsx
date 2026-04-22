import Layout from "@/components/Layout";
import Link from "next/link";

export default function Contact() {
  return (
    <Layout title="ติดต่อเรา Contact" description="ช่องทางติดต่อฝ่ายขาย MRT Supplier เพื่อสนับสนุนการขอใบเสนอราคา RFQ">
      <section className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6">ติดต่อฝ่ายขาย Contact Sales</h1>
        <div className="rounded-2xl border bg-white p-6 space-y-5">
          <div>
            <div className="font-semibold">บริษัท เอ็ม อาร์ ที ซัพพลายเออร์ จำกัด (MRT SUPPLIER CO., LTD.)</div>
            <div className="text-sm text-gray-600 mt-1">
              15 ชั้น 2 ซอยบรมราชชนนี 39 ถนนบรมราชชนนี แขวงตลิ่งชัน เขตตลิ่งชัน กรุงเทพมหานคร 10170
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <a href="tel:0815581323" className="rounded-xl border p-4 block hover:bg-gray-50">
              <div className="text-sm text-gray-500">โทร Phone</div>
              <div className="font-semibold">081-558-1323</div>
            </a>
            <a href="mailto:sales@mrtsupplier.com" className="rounded-xl border p-4 block hover:bg-gray-50">
              <div className="text-sm text-gray-500">อีเมล Email</div>
              <div className="font-semibold">sales@mrtsupplier.com</div>
            </a>
          </div>

          <div className="rounded-xl bg-gray-50 border p-4 text-sm text-gray-700">
            หน้านี้เป็นช่องทางสนับสนุนการติดต่อเท่านั้น หากต้องการส่งรายละเอียดแบบเป็นระบบ แนะนำให้ไปที่หน้า
            <Link href="/quote" className="underline ml-1">ขอใบเสนอราคา RFQ</Link>
            .
          </div>

          <div className="flex gap-3 flex-wrap">
            <Link href="/quote" className="px-5 py-3 bg-[var(--brand)] text-white rounded-xl">ไปหน้า RFQ</Link>
            <Link href="/products" className="px-5 py-3 border rounded-xl">กลับไปดูสินค้า Products</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
