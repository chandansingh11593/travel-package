import React from 'react';
import { ImageSlider } from '../../shared/image-slider/image-slider';

export class Home extends React.Component {
    images = ['images/travel-city.jpg', 'images/home-image-second.jpg'];
    render() {
        console.log(process.env, process.env.PUBLIC_URL);
        return (
            <div className="container">
                <ImageSlider images={this.images}></ImageSlider>
                {/* <div>
                    <img height="80%" width="100%" src={'images/travel-city.jpg'} alt="" />
                </div>
                <div>
                    <img height="80%" width="100%" src={'images/home-image-second.jpg'} alt="" />
                </div> */}
            </div>
        );
    }
}