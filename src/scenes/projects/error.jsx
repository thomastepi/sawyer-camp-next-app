import ErrorComponent from "@/components/errorPage/error";

const props = {
  heading: "Project Not Found",
  text: "Sorry, the project you are looking for does not exist.",
  btnText: "Back to Projects",
  btnLink: "/projects",
};

export default function ErrorPage() {
  return <ErrorComponent {...props} />;
}
