import HomePage from "@/scenes/home";

const Home = () => {
  return (
    <>
      <HomePage googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY} />
    </>
  );
};

export default Home;
