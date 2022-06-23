import React, { Component } from 'react';

// class Card extends Component{
// 	render(){
// 		return(
// 			<div>
// 				<h1>Hello World</h1>
// 			</div>
// 		);
// 	}
// }

const Card = () => {
	return (
		<div className="bg-light-green dib br3 pa3 ma2 grow">
			<img alt="photo" src="https://robohash.org/torrex"/>
			<div>
				<h2>Hello Name</h2>
				<p>someEmail@mailEmail.com</p>
			</div>
		</div>
	);

}


export default Card;