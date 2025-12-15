import ErrorComponent from "@/components/errorPage/error";

const props = {
  heading: "Article Not Found",
  text: "Sorry, the article you are looking for does not exist.",
  btnText: "Back to Blog",
  btnLink: "/blog",
};

export default function ErrorPage() {
  return <ErrorComponent {...props} />;
}
