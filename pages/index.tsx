import Layout from "@/components/Layout";
import PartLookup from "@/components/PartLookup";
import Link from "next/link";

export default function Home() {
  return (
    <Layout title="หน้าแรก Home" description="ผู้จัดจำหน่ายอะไหล่อุตสาหกรรมแบบ B2B พร้อมเส้นทางขอใบเสนอราคา RFQ ที่ชัดเจน">
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-20 grid gap-8 md:grid-cols-2 items-start">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              ครบ จบ ทุกเบอร์ <span className="text-[var(--brand)]">อะไหล่อุตสาหกรรม</span>
            </h1>
            <p className="mt-4 text-gray-600">
              ตลับลูกปืน และไส้กรองแบรนด์ชั้นนำ เช่น NTN, Donaldson, MANN, Fleetguard พร้อมทีมผู้เชี่ยวชาญดูแลใบเสนอราคา RFQ สำหรับงานจัดซื้อ B2B
            </p>
            <div className="mt-6 flex gap-3 flex-wrap">
              <Link href="/quote" className="px-5 py-3 bg-[var(--brand)] text-white rounded-xl">ขอใบเสนอราคา RFQ</Link>
              <Link href="/products" className="px-5 py-3 border rounded-xl">ดูสินค้า Products</Link>
              <Link href="/contact" className="px-5 py-3 border rounded-xl">ติดต่อฝ่ายขาย Contact</Link>
            </div>
          </div>
          <div className="space-y-4">
            <PartLookup compact />
            <div className="rounded-2xl border p-6 bg-white">
              <ul className="grid grid-cols-2 gap-3 text-sm">
                <li className="p-3 rounded-xl bg-gray-50 border">NTN Bearings</li>
                <li className="p-3 rounded-xl bg-gray-50 border">Donaldson Filters</li>
                <li className="p-3 rounded-xl bg-gray-50 border">MANN Filters</li>
                <li className="p-3 rounded-xl bg-gray-50 border">Fleetguard</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
