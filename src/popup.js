// Popup.js is used to display the bigger image after clicking on an image in the gallery

import React, { Component } from "react";
import "./ImageDisplay.css";

class Popup extends Component {
    render() {
        return (
            <div className="popupParent">
                <div className="popupImage">
                    <button
                        className="imageClosingButton"
                        onClick={this.props.closePopup}
                    >
                        X
                    </button>
                    <img
                        className="popupImageDisplay"
                        alt="popup"
                        src={this.props.popImageUrl}
                    />
                </div>
            </div>
        );
    }
}
export default Popup;