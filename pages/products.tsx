import Layout from "@/components/Layout";
import Link from "next/link";

const bearingCategories = [
  { name: "Deep Groove Ball Bearing", desc: "ตลับลูกปืนเม็ดกลมร่องลึก ใช้แพร่หลายในมอเตอร์และเครื่องจักรทั่วไป" },
  { name: "Angular Contact Ball Bearing", desc: "รองรับแรงแนวรัศมีและแนวแกน เหมาะกับความเร็วสูง" },
  { name: "Self-Aligning Ball Bearing", desc: "ปรับแนวได้เอง เหมาะกับเพลาที่โก่งตัว" },
  { name: "Cylindrical Roller Bearing", desc: "รับแรงรัศมีสูง งานโหลดหนัก" },
  { name: "Tapered Roller Bearing", desc: "รับแรงรัศมีและแรงแกน ใช้ในรถยนต์/อุตสาหกรรม" },
  { name: "Spherical Roller Bearing", desc: "รับแรงหนักและปรับแนวได้เอง" },
  { name: "Thrust Bearing", desc: "ออกแบบมารับแรงแนวแกนโดยเฉพาะ" },
  { name: "Needle Roller Bearing", desc: "ขนาดกะทัดรัด พื้นที่จำกัดแต่รับแรงได้สูง" },
  { name: "Linear Motion / Slide", desc: "รางเลื่อน/ลูกปืนเชิงเส้น (CNC/Automation)" },
  { name: "Pillow Block / Insert Unit", desc: "ชุดฐานพร้อมตลับลูกปืน ติดตั้งง่าย" },
];

const filterCategories = [
  { name: "Oil Filter", desc: "ไส้กรองน้ำมันเครื่อง ยืดอายุการใช้งาน" },
  { name: "Air Filter", desc: "ไส้กรองอากาศ สำหรับเครื่องยนต์/ระบบอัดอากาศ" },
  { name: "Hydraulic Filter", desc: "สำหรับระบบไฮดรอลิก ป้องกันสิ่งแปลกปลอม" },
  { name: "Fuel Filter", desc: "ไส้กรองน้ำมันเชื้อเพลิง" },
  { name: "Coolant Filter", desc: "ไส้กรองน้ำหล่อเย็น" },
  { name: "Cabin / AC Filter", desc: "ไส้กรองอากาศภายในห้องโดยสาร" },
  { name: "Dust Collector / Industrial Filter", desc: "สำหรับระบบดูดฝุ่น/อุตสาหกรรม" },
  { name: "Compressor Filter", desc: "ไส้กรองสำหรับระบบอัดอากาศ" },
];

function CategoryCard({ name, desc }: { name: string; desc: string }) {
  return (
    <div className="border rounded-2xl p-5 bg-white hover:shadow-sm transition">
      <div className="font-semibold">{name}</div>
      <p className="text-sm text-gray-600 mt-1">{desc}</p>
      <div className="mt-3 flex gap-2">
        <Link href="/contact" className="text-sm px-3 py-2 rounded-lg bg-[var(--brand)] text-white">สอบถามสินค้า</Link>
        <Link href="#" className="text-sm px-3 py-2 rounded-lg border">ดูรายละเอียด</Link>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <Layout title="สินค้า (Products)" description="หมวดหมู่ตลับลูกปืนและไส้กรอง ครบ จบ ในที่เดียว">
      <section className="bg-gray-50 border-b">
        <div className="max-w-6xl mx-auto px-4 py-14 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">สินค้าอุตสาหกรรม — ครบ จบ ทุกเบอร์</h1>
          <p className="text-gray-600 mt-3">ตลับลูกปืน (Bearings) และไส้กรอง (Filters) จากแบรนด์ระดับโลก พร้อมทีมผู้เชี่ยวชาญให้คำปรึกษา</p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="#bearings" className="px-4 py-2 rounded-xl border">หมวดตลับลูกปืน</Link>
            <Link href="#filters" className="px-4 py-2 rounded-xl border">หมวดไส้กรอง</Link>
          </div>
        </div>
      </section>

      <section id="bearings" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6">ตลับลูกปืน (Bearings)</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {bearingCategories.map((c) => <CategoryCard key={c.name} name={c.name} desc={c.desc} />)}
        </div>
      </section>

      <section id="filters" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6">ไส้กรอง (Filters)</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filterCategories.map((c) => <CategoryCard key={c.name} name={c.name} desc={c.desc} />)}
        </div>
      </section>
    </Layout>
  );
}
