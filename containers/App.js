import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBar from '../components/SearchBar';
import Scroll from '../components/Scroll';
import './App.css';


class App extends Component{
	constructor () {
		super();
		this.state = {
			robots:[],
			searchBar:''
		}
	};

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(answer=> answer.json())
		.then(siteUsers => this.setState({ robots: siteUsers }));
	}

	currentSearchBar = (ev) => {
		this.setState({ searchBar: ev.target.value })
	}

	render(){
		    const {robots,searchBar} = this.state;
			const searchedRobots = robots.filter(oneRobot => {
				return oneRobot.name.toLowerCase().includes(searchBar.toLowerCase());
			})
			return !robots.length ? //The same as if/else
			<h1 className='tc'>LOADING!</h1>:
			(
				<div className='tc page'>
					<h1 className='f1'>ROBOFRIENDS</h1>
					<SearchBar currentSearch={this.currentSearchBar}/>
					<hr className='b--white-20'/>
					<Scroll>
						<CardList robots={searchedRobots} />
					</Scroll>
				</div>
				)
	}

}

export default App;