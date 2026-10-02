import { requireAdminAuth } from "@/lib/auth";
import { getAllAnalytics } from "@/lib/analytics-repository";
import { createAnalyticsAction } from "@/app/admin/actions";
import AdminHeader from "@/components/admin/AdminHeader";
import AnalyticsForm from "@/components/admin/AnalyticsForm";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Add New Analytics | Krishna Nand Yadav Admin",
  description: "Upload and publish a new cricket analytics visualization."
};

export default async function NewAnalyticsPage() {
  await requireAdminAuth("/admin/analytics/new");

  const items = await getAllAnalytics(true);
  const maxOrder = items.reduce((max, i) => Math.max(max, i.displayOrder || 0), 0);
  const nextOrder = maxOrder + 1;

  return (
    <div style={{ minHeight: "100vh", background: "#F8FAFC" }}>
      <AdminHeader activeTab="new" />

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
              Add New Analytics Visualization
            </h1>
            <p style={{ margin: 0, fontSize: "14px", color: "#64748B" }}>
              Upload your match study graphic, set metrics, and publish to portfolio in under 1 minute.
            </p>
          </div>

          <AnalyticsForm
            initialData={{
              displayOrder: nextOrder,
              published: true,
              featured: false
            }}
            onSubmit={async (data) => {
              "use server";
              return await createAnalyticsAction(data);
            }}
          />
        </div>
      </main>
    </div>
  );
}
