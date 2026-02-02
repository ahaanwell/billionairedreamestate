import ProjectViewPage from "./ProjectViewPage";

export default async function Page({ params }) {
  const { purl } = params;
  
  // Example: Fetch project data
//   const res = await fetch(`https://api.example.com/projects/${purl}`);
//   const project = await res.json();
  
  return <ProjectViewPage purl={purl} />;
}
