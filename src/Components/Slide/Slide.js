import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import image_1 from '../../_assets/image_5.png';
import image_2 from '../../_assets/image_6.png';
import image_3 from '../../_assets/image_7.png';
import image_4 from '../../_assets/image_8.png';
import image_5 from '../../_assets/image_9.png';
import './Slide_swift.css';
import Slider from 'react-slick';




const photos = [
    {
        name: '24/7 CCTV Camera',
        url: image_1
    },
    {
        name: 'Rotational Guards',
        url: image_2
    },
    {
        name: 'Biometric System',
        url: image_3
    },
    {
        name: 'Digital Guess Sign in Tracking',
        url: image_4
    },
    {
        name: 'Secure Generator',
        url: image_5
    },
]

export class Slide extends React.Component{

    render(){

        const settings = {
            dots: true,
            fade: false,
            arrows: false,
            infinite: true,
            speed: 500,
            lazyLoad: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            className: 'slides'

            // className: "center",
            // centerMode: true,
            // infinite: true,
            // centerPadding: "60px",
            // slidesToShow: 3,
            // speed: 500
        };

        return(
            // eslint-disable-next-line no-sequences
            <div className="slide-container">
                <Slider {...settings}>
                    {photos.map((photo) => {
                        return(
                            <div className="slide-inner-container">
                                <center>
                                    <div className="slide-content">
                                        <figcaption><h2 style={{color: '#001A7D'}}>{photo.name}</h2></figcaption>
                                        <img width="50%" alt="slides" src={photo.url} />
                                        
                                    </div>
                                </center>
                                
                            </div>
                        );
                    })}
                </Slider>
            </div>
        );
    }
}
export default Slide;