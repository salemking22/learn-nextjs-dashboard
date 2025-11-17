export const metadata = {
  title: "Dashboard | Cynthia Moyo",
  description: "View your profile and progress in the Learn Next.js tutorial.",
};

export const dynamic = "force-dynamic";

import styles from "./dashboard.module.css";
import Card from "../../components/Card";

async function getProfileData() {
  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : `https://${process.env.VERCEL_URL}`;

  const res = await fetch(new URL("/api/profile", baseUrl), { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch profile data");
  }

  return res.json();
}

export default async function DashboardPage() {
  const data = await getProfileData();

  const profileData = [
    { label: "Name", value: data.name },
    { label: "Role", value: data.role },
  ];

  const progressData = [
    { label: "Chapter", value: data.chapter },
    { label: "Status", value: data.status },
  ];

  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>
      <Card title="Profile" items={profileData} />
      <Card title="Progress" items={progressData} />
    </div>
  );
}