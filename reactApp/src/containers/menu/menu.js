import React from 'react';
import uuid from 'uuid';
import style from './menu.scss';
import MenuItem from './menuItem'


class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isSubmenu: this.props.isSubmenu || false,
			display: this.props.isDisplay
		};
		this.setWrapperRef = this.setWrapperRef.bind(this);
		this.handleClickOutside = this.handleClickOutside.bind(this);
	}

	setClasses() {
		return [
			this.state.isSubmenu ? 'sub-level' : 'main-level',
			this.state.display ? 'show' : ''
		]
	}

	get menu() {
		return this.props.itemsList.map(item => 
			<MenuItem
				key={item.id} 
				text={item.name} 
				action={item.action}
			/>
		);
	}

	componentWillReceiveProps(nextProps) {
		this.setState({display: nextProps.isDisplay})

	}
	setWrapperRef(node) {
		this.wrapperRef = node;
	}

	componentDidMount() {
		document.addEventListener('click', this.handleClickOutside);
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handleClickOutside);
	}

	handleClickOutside(event) {	
		if (
			this.state.display &&
			this.state.isSubmenu && 
			this.wrapperRef && 
			!this.wrapperRef.contains(event.target) &&
			!this.wrapperRef.parentNode.contains(event.target)
		) {
			this.setState({ display: false })
			this.props.synchro(this.state.display);
		}
	}

	render() {
		return (
			<ul ref={this.setWrapperRef} className={this.setClasses().join(' ')}>
				{this.menu}
			</ul>
		)
	}
}

export default Menu;
