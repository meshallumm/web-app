import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Home.css";
import { Redirect, Route, Switch, Router } from "react-router-dom";
import MessageConfirmation from "../SignUp/MessageConfirmation.jsx";
// import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { NavLink, withRouter } from "react-router-dom";
import MishaalAm from "./Mishaal-Am.jsx";
import Petitions from "./Petitions.jsx";
import Surveys from "./Surveys";

const Home = ({ userIDNumber, setIfSignUp }) => {
  const history = useHistory();
  const [userID, setUserID] = useState(userIDNumber);
  const [messageConfirmation, setMessageConfirmation] = useState(false);
  const onExitHandler = () => {
    localStorage.clear();
    setIfSignUp(false);
  };

  useEffect(() => {
    //setIfSignUp(false);
    if (userIDNumber.length) {
      localStorage.setItem("userID", JSON.stringify(userIDNumber));
      console.log("userIDNumber", userIDNumber);
    } else if (userIDNumber === "") {
      setUserID(JSON.parse(localStorage.getItem("userID")));
      console.log("userID", userID);
    }
  }, []);

  useEffect(() => {
    //window.history.replaceState(null, null, '/');
    // window.addEventListener('popstate', () => {
    //   history.go(1);
    // });
    // window.addEventListener('popstate', function () {
    //  history.pushState(null, document.title, window.location.href);
    //
    // window.onpopstate = function () {
    //   history.pushState(null, null, window.location.href);
    //   history.go(1);
    //   console.log('window.onpopstate = function');
    // };
  }, []);

  return (
    <div className="home-div">
      <header className="home-header">
        משאל עם
        <nav className="nav">
          <NavLink activeClassName="active-nav" exact to="/Home/Petitions">
            עצומות
          </NavLink>
          <NavLink
            activeClassName="active-nav"
            to="/Home/Mishaal-Am"
            className="mishaal-am"
          >
            משעל עם
          </NavLink>
          <NavLink
            activeClassName="active-nav"
            to="/Home/Surveys"
            className="surveys"
          >
            סקרים
          </NavLink>
        </nav>
      </header>
      <div style={{ textAlign: "center" }}>
        <h3 className="id-style">{userID}</h3>
        <br />
        {!messageConfirmation ? (
          <MessageConfirmation
          setMessageConfirmation={setMessageConfirmation}
          />
        ) : (
          <h1>Hello</h1>
        )}
       
      </div>
          <div>
            {/* <Router> 
          <Switch> 
           <Route to={'/Home/Petitions'} component={Petitions}קקקעצומות />
           <Route path={'/Home/Mishaal-Am'} component={MishaalAm}משאל עם/> 
  
         </Switch>
          </Router>  */}
            {/* <Router>  */}
            <Redirect to="/Home" />
            <Switch>
              <Route path={"/Home/Petitions"} component={Petitions} />
              <Route path={"/Home/Mishaal-Am"}>
                <MishaalAm />{" "}
              </Route>
              <Route path={"/Home/Surveys"} component={Surveys} />
            </Switch>
            {/* </Router>  */}
          </div>
          <button onClick={onExitHandler}> יציאה</button>
    </div>
  );
};

// export default Home= withRouter(_Home);
export default Home;
