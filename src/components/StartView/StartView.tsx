import React from "react";
import { StartViewContainer } from "./StartView.styles";
import jpg from "../../images/photo.jpg";

// const photoSrc = require("@public/photo.jpg");

const StartView = () => {
	return (
		<StartViewContainer>
			<img src={jpg} className="background-image" alt="background-photo" />
		</StartViewContainer>
	);
};

export default StartView;
