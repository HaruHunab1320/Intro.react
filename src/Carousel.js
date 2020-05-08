import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0,
  };
  //this is a react method that takes a set of props and returns a state
  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placecorgi.com/600/600"];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }
    return { photos };
  }
  //when even your are passing functions onto children or using event listeners, use an '=>' function
  handleIndexClick = (event) => {
    this.setState({
      // the "+event..." is called a unairy plus. It turns the data string coming from the DOM into a number so we can compute with it in the carousel
      //dataset index is receiving that data from the html img tag attribute data-index
      active: +event.target.dataset.index,
    });
  };
  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            //You can ignore lint checks with the below comment
            // eslint-disable-next-line
            <img
              key={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo}
              classNAme={index++ + active ? "active" : ""}
              alt="animal thumbnail"
            ></img>
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
