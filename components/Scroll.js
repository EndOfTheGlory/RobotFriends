import React from 'react';

const Scroll = (props) => {
	console.log(props)
	return(
		<div style = {{overflowY:'scroll',height: '1000px',border:'1px solid blue'}}>
			{props.children}
		</div>
		)
};

export default Scroll