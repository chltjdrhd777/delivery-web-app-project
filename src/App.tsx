import React, { createContext, useContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderLayout from "components/styled/Header.layout";
import Delivery from "routes/Delivery";
import PickUp from "routes/PickUp";

const PathContext = createContext<{
  path?: string;
  setPath?: React.Dispatch<React.SetStateAction<string>>;
}>({});

export const usePathContext = () => useContext(PathContext);

function App() {
  const [path, setPath] = useState(window.location.pathname);

  return (
    <Router>
      <PathContext.Provider value={{ path, setPath }}>
        <HeaderLayout>
          <Switch>
            <Route exact path={["/", "/delivery"]}>
              <Delivery />
            </Route>

            <Route path="/pickup">
              <PickUp />
            </Route>
          </Switch>
        </HeaderLayout>
      </PathContext.Provider>
    </Router>
  );
}

export default App;
