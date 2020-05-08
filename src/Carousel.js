import React from 'react';

class Carousel extends React.Component {
    state = {
        photos: [],
        active: 0
    };
    //this is a react method that takes a set of props and returns a state
    static getDerivedStateFromProps({ media}) {
        let photos = ['http://placecorgi.com/600/600'];

        if (media.length) {
            photos = media.map(({ large }) => large);
        }
        return { photos };
    }
    render() {
        const { photos, active } =this.state;

        return (
            <div className="carousel">
                <img src={photos[active]} alt="animal" />
                <div classNAme="carousel-smaller">
                    {photos.map((photo, index) => (
                        //You can ignore lint checks with the below comment
                        // eslint-disable-next-line
                        <img 
                        key={photo}
                        onClick={this.handleIndexClick}
                        data-index={index}
                        src={photo}
                        classNAme={index +++ active ? "active": ""}
                        alt="animal thumbnail"
                    ))}
                </div>
            </div>
        )
    }
};

export default Carousel;