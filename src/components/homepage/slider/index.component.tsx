import React from "react";
import ImageGallery from "react-image-gallery";
import "../../../../node_modules/react-image-gallery/styles/scss/image-gallery.scss"
import "./styles.scss";

const hardcodedImages = [
    {
        original: "https://zonaguadalajara.com/wp-content/uploads/2013/08/Punto-Sao-Paulo1.jpg",
        originalAlt: "Punto Sao Paulo",
        originalTitle: "Example"
    },
    {
        original: "https://puntosaopaulo.com/wp-content/uploads/2018/09/HOME-03-1024x680.jpg",
        originalAlt: "Punto Sao Paulo"
    },
    {
        original: "https://www.emporis.com/images/show/770572-Large-lookingup-view-from-the-southeast.jpg",
        originalAlt: "View from the other sidewalk"
    },
    {
        original: "https://i.pinimg.com/564x/af/79/80/af798083cd48b583dd32f44ca8c6d9f8.jpg",
        originalAlt: "(Not the actual office)"
    }
];

const defaultProps = {
    showNav: true,
    showThumbnails: false,
    showFullscreenButton: false,
    showPlayButton: false,
    showBullets: true,
    onErrorImageURL: "https://i2.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png",
    onClick: console.log
}

function Slider(props: any) {
    return <ImageGallery items={hardcodedImages} {...defaultProps} {...props} />
}

export default Slider;