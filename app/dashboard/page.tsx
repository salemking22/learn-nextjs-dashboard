export const metadata = {
  title: "Dashboard | Cynthia Moyo",
  description: "View your profile and progress in the Learn Next.js tutorial.",
};

export const dynamic = "force-dynamic";

import styles from "./dashboard.module.css";
import DashboardContent from "./DashboardContent";
import AuthButton from "@/components/AuthButton"; // ✅ Added import

async function getProfileData() {
  const res = await fetch("https://learn-nextjs-dashboard-self.vercel.app/api/profile", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch profile data");
  }

  return res.json();
}

export default async function DashboardPage() {
  const data = await getProfileData();

  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>
      <DashboardContent data={data} />
      <div className="mt-6">
        <AuthButton /> {/* ✅ Button added here */}
      </div>
    </div>
  );
}