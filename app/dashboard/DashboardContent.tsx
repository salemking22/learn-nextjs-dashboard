"use client";

import Card from "../../components/Card";

type Props = {
  data: {
    name: string;
    role: string;
    chapter: string;
    status: string;
  };
};

export default function DashboardContent({ data }: Props) {
  const profileData = [
    { label: "Name", value: data.name },
    { label: "Role", value: data.role },
  ];

  const progressData = [
    { label: "Chapter", value: data.chapter },
    { label: "Status", value: data.status },
  ];

  return (
    <>
      <Card title="Profile" items={profileData} />
      <Card title="Progress" items={progressData} />
    </>
  );
}