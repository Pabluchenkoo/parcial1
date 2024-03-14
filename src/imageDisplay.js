import React, { Component } from "react";
import "./ImageDisplay.css";
import Popup from "./popup";

class ImageDisplay extends Component {
    constructor(props) {
        super(props);
        // I used only one image for display since I didn't
        // want to waste time on looking for images
        // just in case i could not finish it in 30min
        this.state = {
            // if we are displaying different images, I can simply add a imageUrlArray
            // to the state and then map it for each image, however we only have
            // one image for now
            imageUrl:
                "https://picsum.photos/350",
            showModal: false,
            popImageUrl: ""
        };
    }

    handlePopup = (url) => {
        this.setState({
            showModal: !this.state.showModal,
            popImageUrl: url
        });
    };

    render() {
        return (
            <div>
                <img
                    className="singleImage"
                    src={this.state.imageUrl}
                    alt="Apple"
                    onClick={() => this.handlePopup(this.state.imageUrl)}
                />

                {this.state.showModal ? (
                    <Popup
                        popImageUrl={this.state.popImageUrl}
                        closePopup={this.handlePopup}
                    />
                ) : null}
            </div>
        );
    }
}

export default ImageDisplay;