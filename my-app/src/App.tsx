import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Section from "./components/Section";

function App() {
  // Define the background image URL
  const backgroundImage = "./assets/call_of_duty.png"; // Adjust the path if needed
  
  // Define Section props
  const title = "Video Game Genres";
  const description = "Explore various genres of video games";

  return (
    <div>
      <NavBar />
      {/* Pass the backgroundImage prop to the Hero component */}
      <Hero backgroundImage={backgroundImage} />
      {/* Pass the correct props to the Section component */}
      <Section title={title} description={description}>
        {/* You can add child components or content here */}
        <div>Action Games</div>
        <div>Role Playing Games</div>
        <div>Sports Games</div>
      </Section>
    </div>
  );
}

export default App;
