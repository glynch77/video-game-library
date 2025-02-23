// import { useState } from "react"; // This import is not needed for now
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

function App() {
  // Define the background image URL
  const backgroundImage = "./assets/call_of_duty.png"; // Adjust the path if needed

  return (
    <div>
      <NavBar />
      {/* Pass the backgroundImage prop to the Hero component */}
      <Hero backgroundImage={backgroundImage} />
    </div>
  );
}

export default App;
