export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8 grid gap-4 md:grid-cols-3 text-sm leading-6">
        <div>
          <div className="font-semibold mb-2">บริษัท เอ็ม อาร์ ที ซัพพลายเออร์ จำกัด</div>
          <div>MRT SUPPLIER CO.,LTD</div>
          <div className="mt-2">15 ชั้น 2 ซอยบรมราชชนนี 39 ถนนบราราชชนนี แขวงตลิ่งชัน เขตตลิ่งชัน กรุงเทพมหานคร 10170</div>
        </div>
        <div>
          <div className="font-semibold mb-2">ติดต่อเรา</div>
          <div>Tel: 081-5581323</div>
          <div>Email: sales@mrtsupplier.com</div>
          <div>LINE: 0815581323</div>
        </div>
        <div>
          <div className="font-semibold mb-2">โซเชียล / แผนที่</div>
          <div>Google Maps (เพิ่มลิงก์ได้ภายหลัง)</div>
          <div>Facebook / Line (เพิ่มภายหลัง)</div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 py-4 border-t">
        © {new Date().getFullYear()} MRT Supplier. All rights reserved.
      </div>
    </footer>
  );
}