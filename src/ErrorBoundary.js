//this is mostly code from reactjs.org/docs/error-coundaries.html

//This code will catch any errors coming from the API or 3rd party end of things and will create a  link to return to home and redirect to home

//Error boundary does not work with hooks as there is no equivilent to methods like componentDidCatch(life cycle methods), But because this returns this.props.children doesnt care what its children are, you can wrap the error boundary around other components that use hooks.
import React, { Component } from "react";
import { Link, Redirect } from "@reach/router";

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an err", error, info);
  }
  //this will run anytime something gets a new state or new props
  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }
  //render method must return something
  render() {
    if (this.state.redirect) {
      //<Redirect component comes from reach router
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing. <Link to="/">Click here</Link>{" "}
          to go back to the home page or wait five seconds.
        </h1>
      );
    }
    //this.props.children is going to be what ever is contained within the component, in this ex. it would refer to the "Click here" which is what is contained within the link
    return this.props.children;
  }
}
export default ErrorBoundary;
