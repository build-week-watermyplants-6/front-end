import React, { useState } from "react";
import Login from "./components/login-logout/Login";
import Register from "./components/Register";
import Header from "./components/Header";
import plantList from "./plantlist";
import Plant from "./components/plants/Plant";
import { Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import PlantsList from "./components/plants/PlantsList";
import Logout from "./components/login-logout/Logout";
import Accessibility from "./components/Accessibility";
import userinfo from "./userinfo";
import "./App.css";


function App() {
  const [plantsList, setPlantsList] = useState(plantList);
  console.log(plantsList)
  const [profile, setProfile] = useState(userinfo);
  return (
    <div> 
      <Register />
      <Header />
      {/* <Switch> */}
        <Route exact path="/register" component={Register} />
        <Route exact path="/access">
          <Accessibility
            profile={profile}
            setProfile={setProfile}
            plantsList={plantsList}
            setPlantsList={setPlantsList}
          />
        </Route>

        <Route exact path="/" component={Login} />
        <Route exact path="/plants">
          <PlantsList plantsList={plantsList} setPlantsList={setPlantsList} />
        </Route>

        <Route exact path="/login" component={Login} />
        <Route path="/plants/:id">
          <Plant plantsList={plantsList} setPlantsList={setPlantsList} />
        </Route>
        <Route exact path="/profile">
          <Profile profile={profile} setProfile={setProfile} />
        </Route>
        <Route exact path="/logout" component={Logout} />
      {/* </Switch> */}
    </div>
  );
}

export default App;
