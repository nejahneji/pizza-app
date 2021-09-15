import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";


import UserNavbar from "./navbar/UserNavbar";


import PizzaList from "./pizzaList/PizzaList";

const UserDashbord = () => {
  const  {isAuth ,loading} = useSelector(state => state.userReducer)
  return ( 
    <div>
      { loading ? <h1>loading...</h1>: !isAuth ? <Redirect to='/'/> :
      <div>
      <UserNavbar />
      <PizzaList />
      
      
      </div>
}
    </div>
  );
};

export default UserDashbord;
