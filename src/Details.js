import React from "react";
import pet from "@frontendmasters/pet";
import { navigate } from "@reach/router";
import Modal from "./Modal";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";

//Details is a class so we cannot use any hooks. To use context with classes we need to build a react component within <ThemeContext.Consumer
class Details extends React.Component {
  //this takes place of the constructor below this. We had to access the babel config to allow this
  state = { loading: true, showModal: false };
  //   //class components must have a render method
  //   //You cannot use hooks in class components
  //   //component did mount runs once when things are created.
  //   constructor(props) {
  //     //super props says call the constructor on my parent class called React.Component
  //     super(props);
  //     //this.state is self contained within the class. no other component can modify its state.
  //     //this.state is instantiating the initial state
  //     this.state = {
  //       loading: true,
  //     };
  //   }
  componentDidMount() {
    //this.props is immutable info coming from the parent
    pet.animal(this.props.id).then(({ animal }) => {
      //this.setState will update the above this.state loading: true
      //This is considered a "shallow merge", anything that collides with be overwritten, everything else is added. deeply nested items will be overwritten as it only does the top level.
      this.setState({
        url: animal.url,
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, 
            ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false,
      });
    }, console.error);
  }
  toggleModal = () => this.setState({ showModal: !this.state.showModal });
  adopt = () => navigate(this.state.url);
  render() {
    if (this.state.loading) {
      return <h1>loading...</h1>;
    }
    const {
      animal,
      breed,
      location,
      description,
      name,
      media,
      showModal,
    } = this.state;

    //Any function that returns markup is a react component. so in the example below we are technically creating a smaller react component within the ThemeContext.Consumer
    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button
                onClick={this.toggleModal}
                style={{ backgroundColor: theme }}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}?</h1>
                <div className="buttons">
                  <button onClick={this.adopt}>Yes</button>
                  <button onClick={this.toggleModal}>No, Im a monster</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

export default function DetailsWithErrorBoundary(props) {
  return (
    //ErrorBoundary only catches errors that are contained within it. it doesnt care about {...props}.
    //Spread: {...props} is the same as saying id={props.id}. If you had multiple values, it would essentially take care of all this for you.
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
