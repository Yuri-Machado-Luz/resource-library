import React from "react";

import { NavBar } from "@layouts/Navbar/Navbar.component";

import "./App.css";

const AppWrapper = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <div className="AppWrapper">{children}</div>
    </>
  );
};

function App() {
  return (
    <>
      <AppWrapper>
        <NavBar />
        <Header />
        <Main>
          <p>Welcome to the App!</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
            asperiores maxime. Laborum nihil vitae eveniet et fugit id natus
            ullam.
          </p>
        </Main>
      </AppWrapper>
    </>
  );
}

const Header = () => {
  return (
    <>
      <header className="AppHeader">
        <h1>TITLE</h1>
      </header>
    </>
  );
};

const Main = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <main className="AppMain">{children}</main>
    </>
  );
};

export default App;
