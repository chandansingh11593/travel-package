import React from 'react';
import './image-slider.scss'

export class ImageSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            defaultCounter: this.props.images.length - 1
        }
        setInterval(this.tick.bind(this), 10000);
    }

    tick() {
        console.log(this.state);
        const { counter } = this.state;

        if (counter > 0) {
            this.setState({ ...this.state, counter: counter - 1 });
        } else {
            this.setState({ ...this.setState, counter: this.state.defaultCounter });
        }
    }

    setActiveImage(index) {
        this.setState({ ...this.state, counter: index });
    }

    getImageLink() {
        const { images } = this.props;
        const { counter } = this.state;
        return images.map((image, index) => {
            const shift = 2;
            const translateLink = `translateX(${index * shift}vw)`;
            const width = 1;
            const totalWidth = (width + shift) * images.length;
            const left = (100 - totalWidth) / 2;
            console.log(totalWidth, left)

            if (counter === index) {
                return (<div key={image + 'link'}
                    className="slider__link slider__link--active"
                    style={{ transform: translateLink, left: `${left}vw` }}
                    onClick={() => this.setActiveImage(index)}></div>);
            } else {
                return (
                    <div key={image + 'link'}
                        className="slider__link"
                        style={{ transform: translateLink, left: `${left}vw` }}
                        onClick={()=> this.setActiveImage(index)}></div>);
            }
        })
    }

    render() {
        const { images } = this.props;
        const { counter } = this.state;

        return (
            <div className="slider__container">
                <img className="slider__image" key={'images-slider'} src={images[counter]} alt="" style={{ margin: 'auto' }} />
                {/* <div className="slider__link__wrapper"> */}
                    {this.getImageLink()}
                {/* </div> */}
            </div>
        );
    }
}