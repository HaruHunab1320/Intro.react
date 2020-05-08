import React from "react";
import pet from '@frontendmasters/pet';

class Details extends React.Component {
//class components must have a render method
//You cannot use hooks in class components
render() {
//component did mount runs once when things are created.
this.componentDidMount () {
    constructor(props) {
        //super props says call the constructor on my parent class called React.Component
        super(props);
        //this.state is self contained within the class. no other component can modify its state.
        //this.state is instantiating the initial state
        this.state = {
            loading: true
        };
    }
    //this.props is immutable info coming from the parent
    pet.animal(this.props.id)
    .then(({ animal }) => {
        //this.setState will update the above this.state loading: true
        //This is considered a "shallow merge", anything that collides with be overwritten, everything else is added. deeply nested items will be overwritten as it only does the top level. 
        this.setState({
            name: animal.name,
            animal: animal.type,
            location: `${animal.contact.address.city}, 
            ${animal.contact.address.state}`,
            description: animal.description,
            media: animal.photos,
            breed: animal.breeds.primary,
            loading: false
        })
    })
}
render() {

}
}

}

export default Details;
