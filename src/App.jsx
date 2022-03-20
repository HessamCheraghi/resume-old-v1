import styles from "./App.module.css";

//components
import ContactInfo from "./components/ContactInfo";
import Education from "./components/Education";
import Hobby from "./components/Hobby";
import Skills from "./components/Skills";
import Summary from "./components/Summary";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.contentArea}>
          <Summary />
          <ContactInfo />
          <Education />
          <Hobby />
          <Skills />
          <WorkExperience />
        </div>
      </div>
    </div>
  );
}

export default App;
