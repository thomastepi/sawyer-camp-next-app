import ErrorComponent from "@/components/errorPage/error";

const props = {
  heading: "Page Not Found",
  text: "Sorry, the page you are looking for does not exist.",
  btnText: "Go Back Home",
  btnLink: "/",
};

export default function DefaultError() {
  return <ErrorComponent {...props} />;
}
