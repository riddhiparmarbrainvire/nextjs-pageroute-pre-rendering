import React from "react";
import useSWR from "swr";

export default function DashboardSwr() {
  const fetcher = async () => {
    const response = await fetch("http://localhost:3001/dashboard");
    const data = await response.json();
    return data;
  };

  const { data, error } = useSWR("dashboard", fetcher);

  if (error) {
    return "an error";
  }
  if (!data) {
    return "loading";
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <h4>swr - {data.posts}</h4>
      <h4>swr - {data.likes}</h4>
      <h4>swr - {data.followers}</h4>
      <h4>swr - {data.following}</h4>
    </div>
  );
}
