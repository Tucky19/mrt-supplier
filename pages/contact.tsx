import Layout from "@/components/Layout";

export default function Contact() {
  return (
    <Layout title="ติดต่อเรา" description="ติดต่อ MRT Supplier เพื่อขอใบเสนอราคาและสอบถามสินค้า">
      <section className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6">ติดต่อฝ่ายขาย</h1>
        <div className="rounded-2xl border bg-white p-6 space-y-4">
          <div>
            <div className="font-semibold">บริษัท เอ็ม อาร์ ที ซัพพลายเออร์ จำกัด (MRT SUPPLIER CO.,LTD)</div>
            <div className="text-sm text-gray-600 mt-1">
              15 ชั้น 2 ซอยบรมราชชนนี 39 ถนนบราราชชนนี แขวงตลิ่งชัน เขตตลิ่งชัน กรุงเทพมหานคร 10170
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-gray-500">โทร</div>
              <div className="font-semibold">081-5581323</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">อีเมล</div>
              <div className="font-semibold">sales@mrtsupplier.com</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">LINE (ส่วนตัว)</div>
              <div className="font-semibold">0815581323</div>
            </div>
          </div>
          <form className="grid gap-4 pt-4">
            <input className="border rounded-xl px-4 py-3" placeholder="ชื่อของคุณ" />
            <input className="border rounded-xl px-4 py-3" placeholder="อีเมลหรือเบอร์โทรติดต่อกลับ" />
            <textarea className="border rounded-xl px-4 py-3 min-h-40" placeholder="ระบุสินค้าที่ต้องการ เช่น NTN 6203, Donaldson P55-1234 ฯลฯ"></textarea>
            <button type="button" className="px-5 py-3 bg-[var(--brand)] text-white rounded-xl w-full md:w-auto">ส่งข้อความ</button>
            <div className="text-xs text-gray-500">* ปุ่มนี้เป็นตัวอย่าง (สามารถเชื่อมต่ออีเมล/LINE OA ได้ภายหลัง)</div>
          </form>
        </div>
      </section>
    </Layout>
  );
}
