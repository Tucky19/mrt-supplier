import { products, type ProductItem } from "@/data/products";
import Link from "next/link";
import { useMemo, useState } from "react";

type Props = {
  compact?: boolean;
};

function matchesQuery(product: ProductItem, rawQuery: string): boolean {
  const query = rawQuery.trim().toLowerCase();
  if (!query) return true;

  return [
    product.nameThEn,
    product.descriptionTh,
    product.samplePartNumbers.join(" "),
    product.brandHints.join(" "),
  ]
    .join(" ")
    .toLowerCase()
    .includes(query);
}

export default function PartLookup({ compact = false }: Props) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return products.filter((product) => matchesQuery(product, query)).slice(0, compact ? 4 : 8);
  }, [query, compact]);

  return (
    <div className="rounded-2xl border bg-white p-4 md:p-5">
      <label className="text-sm font-medium" htmlFor="part-lookup">
        ค้นหาเบอร์อะไหล่ Part Number Lookup
      </label>
      <input
        id="part-lookup"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="เช่น NTN 6203, Donaldson P55-1234"
        className="mt-2 w-full border rounded-xl px-4 py-3"
      />

      {query.trim().length === 0 ? (
        <p className="text-xs text-gray-500 mt-2">พิมพ์เบอร์รุ่นหรือคำสำคัญ แล้วเลือกดูรายละเอียดหรือส่ง RFQ ได้ทันที.</p>
      ) : results.length === 0 ? (
        <div className="mt-3 text-sm text-gray-600">
          ไม่พบผลลัพธ์ที่ตรงคำค้นหา กรุณาติดต่อทีมขายหรือส่ง RFQ พร้อมเบอร์รุ่นที่ต้องการ.
          <div className="mt-2">
            <Link href={`/quote?product=${encodeURIComponent(query)}&source=search-empty`} className="underline">
              ส่ง RFQ ด้วยคำค้นนี้
            </Link>
          </div>
        </div>
      ) : (
        <ul className="mt-3 grid gap-2">
          {results.map((product) => (
            <li key={product.slug} className="border rounded-xl p-3">
              <div className="font-medium text-sm">{product.nameThEn}</div>
              <div className="text-xs text-gray-600 mt-1">ตัวอย่างเบอร์: {product.samplePartNumbers.join(", ")}</div>
              <div className="mt-2 flex gap-2 flex-wrap text-xs">
                <Link href={`/products/${product.slug}`} className="px-2 py-1 rounded-lg border">
                  รายละเอียด
                </Link>
                <Link
                  href={`/quote?product=${encodeURIComponent(product.samplePartNumbers[0])}&source=search`}
                  className="px-2 py-1 rounded-lg bg-[var(--brand)] text-white"
                >
                  ขอราคา RFQ
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
