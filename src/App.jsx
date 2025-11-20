import { useState, useRef } from "react";
import Header from "./components/Header/Header";
import FirstScreen from "./components/FirstScreen/FirstScreen";

function App() {



  const [projects, setProjects] = useState([]);

  function handleAddProject(name, description) {

    setProjects(
      (prevProjects) => {
        return [...prevProjects, {"name": name, "description": description}]
      }
    );
    
  }


  return (
    <>
      <Header></Header>

      {projects.length == 0 ? <FirstScreen onAddProject={handleAddProject}/> : <p>Mostra dashboard</p>}
        

    </>
  );
}

export default App;
