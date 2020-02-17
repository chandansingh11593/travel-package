import React from 'react';

export class ImageSlider extends React.Component {
    render() {
        const { images } = this.props;
        // const imagestemplate = images.map((image) => <img src={image} alt="" />)

        return (
            <div className="container">
                <div className="navigate__left"></div>
                <div className="navigate__right"></div>
            </div>
        );
    }
}