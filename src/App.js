import React, { useEffect } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Loading from "./components/Loading";
// import MessageBox from "./components/MessageBox";

import { useDispatch } from "react-redux";
// import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      {/* <MessageBox />  */}

      <Switch>
        {/* {isLoading ? <Loading /> : null} */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
