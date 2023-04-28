import React, { Fragment } from "react";
import { connect } from "react-redux";
import "../App.css";

const ShowProfile = props => {
  return (
    <div className="getData">
       <div className="tools">
    <div className="circle">
      <span className="red box"></span>
    </div>
    <div className="circle">
      <span className="yellow box"></span>
    </div>
    <div className="circle">
      <span className="green box"></span>
    </div>
  </div>
      <img src={props.image_url} alt="" />
      <h1>Username : {props.username}</h1>
      <p>Repositories : {props.repos}</p>
      <p>Following : {props.following}</p>
      <p>Followers : {props.followers}</p>
      <p>Email : {props.email}</p>
      <br />
      <form action="/">
         <button className="homePage" type="submit">HOME</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    username: state.username,
    repos: state.repos,
    following: state.following,
    followers: state.followers,
    email: state.email,
    grabbedData: state.grabbedData,
    image_url: state.image_url
  };
};

export default connect(
  mapStateToProps,
  null
)(ShowProfile);
