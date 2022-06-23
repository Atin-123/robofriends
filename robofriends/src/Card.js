import React from 'react';

// class Card extends Component{
// 	render(){
// 		return(
// 			<div>
// 				<h1>Hello World</h1>
// 			</div>
// 		);
// 	}
// }

const Card = ({id, name, email}) => {
	return (
		<div className="tc bg-light-green dib br3 pa3 ma2 grow">
			<img alt="robots" src={`https://robohash.org/${id}`}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);

}


export default Card;