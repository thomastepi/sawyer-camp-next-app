import ErrorPage from "@/scenes/projects/error";

export const metadata = {
  title: "Project Not Found",
  description: "The project you are looking for does not exist.",
};
export default function NotFound() {
  return (
    <>
      <ErrorPage />
    </>
  );
}
