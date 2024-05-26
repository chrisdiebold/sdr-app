import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css";
import "./App.css";
import Navbar from "./components/navbar";

import { config, monitoring } from "./state";
import { RuxContainer, RuxSegmentedButton } from '@astrouxds/react';

function App() {
  const [count, setCount] = useState(0);
  const [activeContentIndex, setActiveContentIndex] = useState(0);

    const [content, setContent] = useState("List");

  return (
    <>
      <Navbar
        appName={config.name}
        appOrganization={config.organization}
        appVersion={config.version}
        theme="Dark"
        status={monitoring}
      />
      <div style={{ height: "50vh" }}>
        <RuxContainer className="transmittable-signals">
          <div slot="header" className="header">
            Transmittable Signals
            <RuxSegmentedButton
              style={
                content === "Timeline"
                  ? { marginLeft: "1rem" }
                  : { marginLeft: "auto" }
              }
              data={[{ label: "TX 1" }, { label: "TX 2" }]}
              onRuxchange={() => console.log('hi')}
            ></RuxSegmentedButton>
          </div>
          <RuxSegmentedButton></RuxSegmentedButton>
        </RuxContainer>
      </div>
      <div>
        <div id="tabs">
          <menu>
            <button
              className={activeContentIndex === 0 ? "active" : ""}
              onClick={() => setActiveContentIndex(0)}
            >
              Spectrum
            </button>
            <button
              className={activeContentIndex === 1 ? "active" : ""}
              onClick={() => setActiveContentIndex(1)}
            >
              Logs
            </button>
          </menu>
          <div id="tab-content"></div>
        </div>
      </div>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
