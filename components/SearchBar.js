import React from 'react';

const SearchBar = ({currentSearch}) =>{
	return(
		<div className='pa2 ma5'>
			<input 
			className='ba b--light-red bg-moon-gray pa4'
			type='search' 
			placeholder='Find your Robofriend!' 
			onChange={currentSearch}
			/>
		</div>
	)
};

export default SearchBar;