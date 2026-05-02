import VolunteerPage from "@/scenes/volunteer";

export const metadata = {
  title: "Volunteer with Us",
  description:
    "Volunteers are the backbone of our efforts at SCF-CIG. By donating your time and skills, you can help us make a significant impact in our community.",
};

const Volunteer = () => (
  <VolunteerPage typeformId={process.env.TYPEFORM_ID_VOLUNTEER} />
);

export default Volunteer;
