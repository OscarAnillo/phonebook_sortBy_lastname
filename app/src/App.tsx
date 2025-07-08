import { useState } from "react";

import { MainForm } from "./Components/form";
import { FormDataInputs } from "./Components/formDataInputs";
import type { UserData } from "./interfaces";
import "./App.css";

function App() {
  const [userData, setUserData] = useState<UserData[]>([]);

  return (
    <div className="App">
      <h1>Oscar Anillo</h1>
      <p>Front-end Developer</p>
      <hr />
      <MainForm userData={userData} setUserData={setUserData} />
      <FormDataInputs userData={userData} />
    </div>
  );
}

export default App;
