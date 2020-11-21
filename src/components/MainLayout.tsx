import React from "react";
import { Interpreter } from "xstate";

import { AuthMachineContext, AuthMachineEvents } from "../machines/authMachine";
import Footer from "./Footer";
import NavBar from "./NavBar";

interface Props {
  children: React.ReactNode;
  authService: Interpreter<AuthMachineContext, any, AuthMachineEvents, any>;
}

const MainLayout: React.FC<Props> = ({ children, authService }) => {
  return (
    <>
      <NavBar />

      <main data-test="main">
        <div />

        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
};

export default MainLayout;
