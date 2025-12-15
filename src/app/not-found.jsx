import DefaultError from "@/scenes/default-error";

export const metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return <DefaultError />;
}
