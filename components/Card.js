import React from 'react';

const Card = ({name, email, id}) =>{//we are destructuring the props.
	return(
		<div className='bg-purple br3 dib pa4 ma2 grow shadow-5 bw3 tc'>
			<img src ={`https://robohash.org/${id}?250x250`} alt='Card component' />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;