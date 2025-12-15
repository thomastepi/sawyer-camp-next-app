import ProjectDetailPage from "@/scenes/projects/project-detail";
import projects from "@/data/projects";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) {
    return notFound();
  }
  return {
    title: project.title,
    description: project.description?.slice(0, 160),
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: project.title,
      description: project.description?.slice(0, 160),
      url: `/projects/${project.slug}`,
      images: project.image ? [{ url: project.image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description?.slice(0, 160),
      images: project.image ? [project.image] : undefined,
    },
  };
}

const ProjectDetail =  async ({ params }) => {
  const { slug } = await params;
  console.log("params: ", slug);
  const project = projects.find((p) => p.slug === slug);
  if (!project) {
    return notFound();
  }
  return <ProjectDetailPage project={project} />;
};

export default ProjectDetail;
