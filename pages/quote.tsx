import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";

type QuoteForm = {
  company: string;
  contactName: string;
  contactChannel: string;
  requestedItems: string;
  quantity: string;
  notes: string;
};

type SubmitState = "idle" | "submitting" | "success" | "fallback";

const initialForm: QuoteForm = {
  company: "",
  contactName: "",
  contactChannel: "",
  requestedItems: "",
  quantity: "",
  notes: "",
};

const RFQ_ENDPOINT = process.env.NEXT_PUBLIC_RFQ_ENDPOINT;

export default function QuotePage() {
  const router = useRouter();
  const productQuery = typeof router.query.product === "string" ? router.query.product : "";
  const sourceQuery = typeof router.query.source === "string" ? router.query.source : "website";

  const [form, setForm] = useState<QuoteForm>({
    ...initialForm,
    requestedItems: productQuery,
  });
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  const hasAnyInput = useMemo(() => {
    return Object.values(form).some((value) => value.trim().length > 0);
  }, [form]);

  const canSendRfq = form.contactChannel.trim().length > 0 && form.requestedItems.trim().length > 0;

  function updateField<K extends keyof QuoteForm>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (submitState !== "idle") {
      setSubmitState("idle");
    }
  }

  function buildMailtoHref(): string {
    const subject = encodeURIComponent(`RFQ Request | ${form.company || "MRT Supplier Website Lead"}`);
    const body = encodeURIComponent(
      [
        "สวัสดีทีม MRT Supplier,",
        "",
        `แหล่งที่มา Source: ${sourceQuery}`,
        `บริษัท Company: ${form.company || "-"}`,
        `ผู้ติดต่อ Contact Name: ${form.contactName || "-"}`,
        `ช่องทางติดต่อกลับ Contact Channel: ${form.contactChannel || "-"}`,
        `รายการที่ต้องการ Requested Items: ${form.requestedItems || "-"}`,
        `จำนวน Quantity: ${form.quantity || "-"}`,
        `หมายเหตุ Notes: ${form.notes || "-"}`,
        "",
        "กรุณาส่งใบเสนอราคากลับตามข้อมูลด้านบน ขอบคุณครับ/ค่ะ",
      ].join("\n")
    );

    return `mailto:sales@mrtsupplier.com?subject=${subject}&body=${body}`;
  }

async function trySubmitToEndpoint(): Promise<boolean> {
    if (!RFQ_ENDPOINT) return false;
    try {
      const response = await fetch(RFQ_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          source: sourceQuery,
          submittedAt: new Date().toISOString(),
          ...form,
        }),
      });

      return response.ok;
    } catch {
      return false;
    }
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canSendRfq) return;

    setSubmitState("submitting");

    if (RFQ_ENDPOINT) {
      const isSubmitted = await trySubmitToEndpoint();
      if (isSubmitted) {
        setSubmitState("success");
        setForm(initialForm);
        return;
      }
    }

    setSubmitState("fallback");
    window.location.href = buildMailtoHref();
  }

  return (
    <Layout title="ขอใบเสนอราคา RFQ" description="ส่งคำขอใบเสนอราคาอะไหล่อุตสาหกรรมแบบ B2B ไปยังทีม MRT Supplier">
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold">ขอใบเสนอราคา RFQ</h1>
        <p className="text-gray-600 mt-2">
          สำหรับงานจัดซื้อ B2B: ระบุเบอร์รุ่น/จำนวน/ข้อมูลติดต่อ แล้วส่งคำขอไปยังฝ่ายขายโดยตรง.
        </p>

        {!hasAnyInput && (
          <div className="mt-6 border rounded-2xl p-5 bg-gray-50">
            <h2 className="font-semibold">ยังไม่มีข้อมูลรายการที่ต้องการ</h2>
            <p className="text-sm text-gray-600 mt-1">
              เริ่มจากหน้าสินค้าเพื่อเลือกรายการ หรือกรอกเบอร์รุ่นที่ทราบได้ทันทีในฟอร์มด้านล่าง.
            </p>
            <div className="mt-3 flex gap-3 flex-wrap">
              <Link href="/products" className="px-4 py-2 rounded-xl border">ไปหน้าสินค้า Products</Link>
              <Link href="/contact" className="px-4 py-2 rounded-xl border">ติดต่อฝ่ายขาย Contact</Link>
            </div>
          </div>
        )}

        <form onSubmit={onSubmit} className="mt-6 grid gap-4 rounded-2xl border bg-white p-6">
          <input
            className="border rounded-xl px-4 py-3"
            placeholder="ชื่อบริษัท Company"
            value={form.company}
            onChange={(event) => updateField("company", event.target.value)}
          />
          <input
            className="border rounded-xl px-4 py-3"
            placeholder="ชื่อผู้ติดต่อ Contact Name"
            value={form.contactName}
            onChange={(event) => updateField("contactName", event.target.value)}
          />
          <input
            className="border rounded-xl px-4 py-3"
            placeholder="อีเมลหรือเบอร์โทร Contact Channel *"
            value={form.contactChannel}
            onChange={(event) => updateField("contactChannel", event.target.value)}
            required
          />
          <textarea
            className="border rounded-xl px-4 py-3 min-h-32"
            placeholder="รายการที่ต้องการ Requested Items * เช่น NTN 6203, Donaldson P55-1234"
            value={form.requestedItems}
            onChange={(event) => updateField("requestedItems", event.target.value)}
            required
          />
          <input
            className="border rounded-xl px-4 py-3"
            placeholder="จำนวน Quantity"
            value={form.quantity}
            onChange={(event) => updateField("quantity", event.target.value)}
          />
          <textarea
            className="border rounded-xl px-4 py-3 min-h-28"
            placeholder="หมายเหตุ Notes (เช่น กำหนดส่ง, เงื่อนไขเอกสารภาษี)"
            value={form.notes}
            onChange={(event) => updateField("notes", event.target.value)}
          />

          <div className="flex gap-3 flex-wrap">
            <button
              type="submit"
              className="px-5 py-3 bg-[var(--brand)] text-white rounded-xl disabled:opacity-50"
              disabled={!canSendRfq || submitState === "submitting"}
            >
              {submitState === "submitting" ? "กำลังส่ง RFQ..." : "ส่ง RFQ"}
            </button>
            <Link href="/contact" className="px-5 py-3 rounded-xl border">ช่องทางอื่นที่ /contact</Link>
          </div>

          {submitState === "success" && (
            <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-xl px-3 py-2">
              ส่ง RFQ สำเร็จแล้ว ทีมงานจะติดต่อกลับตามข้อมูลที่ให้ไว้.
            </p>
          )}

          <p className="text-xs text-gray-500">
            {RFQ_ENDPOINT
              ? "ระบบจะพยายามส่งเข้า endpoint ก่อน หากไม่สำเร็จจะ fallback เป็นอีเมลโดยอัตโนมัติ."
              : "ยังไม่ได้ตั้งค่า endpoint จึงส่ง RFQ ผ่านอีเมลโดยอัตโนมัติ."}
          </p>
        </form>
      </section>
    </Layout>
  );
}
