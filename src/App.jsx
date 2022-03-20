import styles from "./App.module.css";

//components
import Contact from "./components/Contact";
import Education from "./components/Education";
import Hobby from "./components/Hobby";
import Skills from "./components/Skills";
import Summary from "./components/Summary";
import WorkExperience from "./components/WorkExperience";

import { data } from "./data";

function App() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.contentArea}>
          <Summary fullName={data.fullName} jobTitle={data.jobTitle} />
          <Contact contact={data.contact} />
          <WorkExperience projects={data.projects} />
          <Education />
          <Hobby />
          <Skills />
        </div>
      </div>
    </div>
  );
}

export default App;
