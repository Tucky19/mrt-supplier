import Layout from "@/components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout title="หน้าแรก" description="ผู้จัดจำหน่ายอะไหล่อุตสาหกรรม ครบ จบ ในที่เดียว">
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-20 grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              ครบ จบ ทุกเบอร์ <span className="text-[var(--brand)]">อะไหล่อุตสาหกรรม</span>
            </h1>
            <p className="mt-4 text-gray-600">
              ตลับลูกปืน และไส้กรองแบรนด์ชั้นนำ เช่น NTN, Donaldson, MANN, Fleetguard
              พร้อมทีมผู้เชี่ยวชาญให้คำปรึกษา
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/products" className="px-5 py-3 bg-[var(--brand)] text-white rounded-xl">ดูสินค้า</Link>
              <Link href="/contact" className="px-5 py-3 border rounded-xl">ติดต่อฝ่ายขาย</Link>
            </div>
          </div>
          <div className="rounded-2xl border p-6 bg-white">
            <ul className="grid grid-cols-2 gap-3 text-sm">
              <li className="p-3 rounded-xl bg-gray-50 border">NTN Bearings</li>
              <li className="p-3 rounded-xl bg-gray-50 border">Donaldson Filters</li>
              <li className="p-3 rounded-xl bg-gray-50 border">MANN Filters</li>
              <li className="p-3 rounded-xl bg-gray-50 border">Fleetguard</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
