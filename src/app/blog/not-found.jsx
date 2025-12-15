import ErrorPage from "@/scenes/blogs/error";

export const metadata = {
  title: "Article Not Found",
  description: "The article you are looking for does not exist.",
};
export default function NotFound() {
  return (
    <>
      <ErrorPage />
    </>
  );
}
