import { notFound } from "next/navigation";
import { requireAdminAuth } from "@/lib/auth";
import { getAnalyticsById } from "@/lib/analytics-repository";
import { updateAnalyticsAction } from "@/app/admin/actions";
import AdminHeader from "@/components/admin/AdminHeader";
import AnalyticsForm from "@/components/admin/AnalyticsForm";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = await getAnalyticsById(id);
  if (!item) return { title: "Edit Analytics | Krishna Nand Yadav Admin" };
  return {
    title: `Edit: ${item.title} | Admin`,
    description: `Edit analytics visual ${item.title}`
  };
}

export default async function EditAnalyticsPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  await requireAdminAuth(`/admin/analytics/${id}/edit`);

  const item = await getAnalyticsById(id);
  if (!item) {
    notFound();
  }

  return (
    <div style={{ minHeight: "100vh", background: "#F8FAFC" }}>
      <AdminHeader />

      <main style={{ padding: "32px 0 64px" }}>
        <div className="container">
          <div style={{ marginBottom: "28px", textAlign: "center" }}>
            <h1
              style={{
                fontSize: "26px",
                fontWeight: 900,
                color: "var(--navy)",
                margin: "0 0 6px",
                letterSpacing: "-0.5px"
              }}
            >
              Edit Analytics Visualization
            </h1>
            <p style={{ margin: 0, fontSize: "14px", color: "#64748B" }}>
              Update visual image, metrics, category, order, or visibility.
            </p>
          </div>

          <AnalyticsForm
            initialData={item}
            isEdit={true}
            onSubmit={async (data) => {
              "use server";
              return await updateAnalyticsAction(id, data);
            }}
          />
        </div>
      </main>
    </div>
  );
}
