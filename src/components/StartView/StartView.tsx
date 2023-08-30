import React from "react";
import { StartViewContainer } from "./StartView.styles";
import jpg from "images/photo.jpg";

const StartView = () => {
	return (
		<StartViewContainer>
			{/* <div className="background-image">
				<h1 className="name">Герасименко Андрей</h1>
				<p className="specialization">
					Являюсь <span className="selected">Frontend разработчиком</span>
				</p>
			</div> */}
			<img src={jpg} className="background-image" alt="background-photo" />
			<h1 className="name">Герасименко Андрей</h1>
			<p className="specialization">
				Являюсь <span className="selected">Frontend разработчиком</span>
			</p>
		</StartViewContainer>
	);
};

export default StartView;
