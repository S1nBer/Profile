import React from "react";
import { StartViewContainer } from "./StartView.styles";

// const photoSrc = require("@public/photo.jpg");

const StartView = () => {
	return (
		<StartViewContainer>
			{/* <img src={photoSrc} alt="photo" /> */}
			<div className="background-image"></div>
		</StartViewContainer>
	);
};

export default StartView;
