import "./App.css";

//components
import ContactInfo from "./components/ContactInfo";
import Education from "./components/Education";
import Hobby from "./components/Hobby";
import Skills from "./components/Skills";
import Summary from "./components/Summary";
import WorkExperience from "./components/WorkExperience";
import Frame from "./components/Frame";
function App() {
  return (
    <div className="App">
      <Frame>
        <ContactInfo />
        <Education />
        <Hobby />
        <Skills />
        <Summary />
        <WorkExperience />
      </Frame>
    </div>
  );
}

export default App;
