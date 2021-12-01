import React from "react";
import "./App.scss";
import Button from "./shared/components/Button/Button";
import CodePane from "./shared/components/CodePane/CodePane";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <>
      <div style={{ position: "absolute", top: "64px", left: "64px" }}>
        <Button text="Test" />
      </div>
      <div style={{ position: "absolute", top: "300px", left: "64px" }}>
        <CodePane>
          <>
            TestTestTestTestTestTestTestTestTest TestTestTest Test TestTestTestTestTest  TestTest TestTestTest
          </>
        </CodePane>
      </div>
      <div style={{ position: "absolute", top: "500px", left: "64px" }}>
        <Menu />
      </div>
      
    </>
  );
}

export default App;
