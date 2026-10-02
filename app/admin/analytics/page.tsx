import { requireAdminAuth } from "@/lib/auth";
import { getAllAnalytics, getAnalyticsStats } from "@/lib/analytics-repository";
import AdminHeader from "@/components/admin/AdminHeader";
import AnalyticsTableClient from "./AnalyticsTableClient";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Analytics Management | Krishna Nand Yadav Admin",
  description: "Manage cricket analytics visualizations, featured visuals, order, and publishing status."
};

export default async function AdminAnalyticsDashboardPage() {
  await requireAdminAuth("/admin/analytics");

  const [items, stats] = await Promise.all([
    getAllAnalytics(true),
    getAnalyticsStats()
  ]);

  return (
    <div style={{ minHeight: "100vh", background: "#F8FAFC" }}>
      <AdminHeader activeTab="analytics" />

      <main style={{ padding: "32px 0 64px" }}>
        <div className="container">
          {/* Page Heading */}
          <div style={{ marginBottom: "28px" }}>
            <h1
              style={{
                fontSize: "26px",
                fontWeight: 900,
                color: "var(--navy)",
                margin: "0 0 6px",
                letterSpacing: "-0.5px"
              }}
            >
              Analytics Management
            </h1>
            <p style={{ margin: 0, fontSize: "14px", color: "#64748B" }}>
              Manage Cricket Analytics Visualizations
            </p>
          </div>

          <AnalyticsTableClient initialItems={items} stats={stats} />
        </div>
      </main>
    </div>
  );
}
