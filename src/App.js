import React, { useEffect } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar/Navbar";
// import Loading from "./components/Loading";
// import MessageBox from "./components/MessageBox";

import { useDispatch } from "react-redux";
// import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import HomePage from "./pages/HomePage/HomePage";
import AllTalents from "./pages/AllTallents/AllTalents";
import SinlgeTalent from "./pages/SinlgeTalent/SinlgeTalent";
import AllCampaigns from "./pages/AllCampaigns/AllCampaigns";
import SingleCampaign from "./pages/SingleCampaign/SingleCampaign";
import AddCampaign from "./pages/AddCampaign/AddCampaign";
import MyCampaigns from "./pages/MyCampaign/MyCampaigns";
import MySingleCampaign from "./pages/MySingleCampaign/MySingleCampaign";

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
        <Route exact path="/talents" component={AllTalents} />
        <Route exact path="/campaigns" component={AllCampaigns} />
        <Route exact path="/talents/:talentId" component={SinlgeTalent} />
        <Route exact path="/campaigns/:campaignId" component={SingleCampaign} />
        <Route
          exact
          path="/myCampaigns/:campaignId"
          component={MySingleCampaign}
        />
        <Route exact path="/addCampaign" component={AddCampaign} />
        <Route exact path="/myCampaigns" component={MyCampaigns} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
