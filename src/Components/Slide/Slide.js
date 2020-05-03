import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import image_1 from '../../_assets/image_5.png';
import image_2 from '../../_assets/image_6.png';
import image_3 from '../../_assets/image_7.png';
import image_4 from '../../_assets/image_8.png';
import image_5 from '../../_assets/image_9.png';
import './Slide_swift.css';
import '../../App.css';
import Slider from 'react-slick';




export class Slide extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            security_inspiration_quote: <div id="slide_quote_one">
                                            <div className="quote_wrap" style={{width: '100%', textAlign: 'left'}}>
                                            <q style={{fontSize: '2.5vw'}}>{this.props.security_inspiration_quote}</q>
                                            <br />
                                            </div>
                                        </div>

        }
    }

    render(){
       
        const photos = [
            {
                name: '24/7 CCTV Camera',
                info: this.state.security_inspiration_quote,
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

        const settings = {
            dots: true,
            fade: false,
            arrows: false,
            infinite: true,
            speed: 500,
            lazyLoad: true,
            slidesToShow: 3,
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
                                        
                                        <img width="90%" alt="slides" src={photo.url} style={{paddingBlockEnd: '1em'}}/>
                                        <figcaption style={{paddingBlockEnd: '1em'}}><h2 style={{color: '#001A7D', margin: '0'}}>{photo.info}</h2></figcaption>
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