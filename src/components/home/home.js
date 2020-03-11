import React from 'react';
import { ImageSlider } from '../../shared/image-slider/image-slider';

export class Home extends React.Component {
    images = [
        'images/travel-city.jpg',
        'images/home-image-second.jpg',
        'images/hawa-mahal-palace-894443.jpg',
        'images/landscape-photography-of-mountains-and-trees-during-daylight-2314983.jpg'
    ];
    render() {
        return (
            <div className="container">
                <ImageSlider images={this.images}></ImageSlider>
            </div>
        );
    }
}