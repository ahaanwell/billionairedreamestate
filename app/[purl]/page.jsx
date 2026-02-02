"use client"; // optional if you make it a Client Component
import { use } from "react";
import { notFound } from "next/navigation";
import propertiesData from "@/constants/propertiesData";
import ProjectViewPage from "./ProjectViewPage";

export default function Page({ params: paramsPromise }) {
  const params = use(paramsPromise); // unwrap the Promise
  const { purl } = params;

  const project = propertiesData.find((p) => p.slug === purl);

  if (!project) {
    notFound();
  }

  return <ProjectViewPage key={project.slug} project={project} />;
}
