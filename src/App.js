import React, { useEffect } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Loading from "./components/Loading";
// import MessageBox from "./components/MessageBox";
// import SignUp from "./pages/SignUp";
// import Login from "./pages/Login";
// import MySpace from "./pages/MySpace";
// import Spaces from "./pages/Spaces";
// import SpaceDetails from "./pages/SpaceDetails";

// import { useDispatch, useSelector } from "react-redux";
// import { selectAppLoading } from "./store/appState/selectors";
// import { getUserWithStoredToken } from "./store/user/actions";

function App() {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectAppLoading);

  // useEffect(() => {
  //   dispatch(getUserWithStoredToken());
  // }, [dispatch]);

  return (
    <div className="App">
      {/* <NavBar /> */}
      {/* <MessageBox />  */}
      <h1>HELLO TALENT HUB</h1>
      <Switch>
        {/* {isLoading ? <Loading /> : null} */}
        {/* <Route exact path="/" component={} /> */}
      </Switch>
    </div>
  );
}

export default App;
