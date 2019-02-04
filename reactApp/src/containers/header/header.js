import React from 'react';
import uuid from 'uuid';
import Menu from '../menu/menu';
import Logo from './logo';
import style from './header.scss';


const items = [
	{
		id: uuid.v4(),
		name: 'Strona główna',
		type: 'menu-item',
		action: 'http://www.google.pl'
	},
	{
		id: uuid.v4(),
		name: 'O nas',
		type: 'menu-item',
		action: [
			{
				id: uuid.v4(),
				name: 'Ville',
				type: 'menu-item',
				action: 'http://www.google.pl'
			},
			{
				id: uuid.v4(),
				name: 'Apartamenty',
				type: 'menu-item',
				action: [
					{
						id: uuid.v4(),
						name: 'Ville',
						type: 'menu-item',
						action: 'http://www.google.pl'
					},
					{
						id: uuid.v4(),
						name: 'Apartamenty',
						type: 'menu-item',
						action: 'http://www.google.pl'
					}
				]
			}
		]
	},
	{
		id: uuid.v4(),
		name: 'Oferta',
		type: 'menu-item',
		action: 'http://www.google.pl'
	},
	{
		id: uuid.v4(),
		name: 'Bistro',
		type: 'menu-item',
		action: 'http://www.google.pl'
	},
	{
		id: uuid.v4(),
		name: 'Dla Grup',
		type: 'menu-item',
		action: 'http://www.google.pl'
	},
	{
		id: uuid.v4(),
		name: 'Kontakt',
		type: 'menu-item',
		action: 'http://www.google.pl'
	},
]

const images = {
		id: uuid.v4(),
		title: 'Bistro',
		url: 'src/images/logo.png',
		action: 'http://www.google.pl'
}





class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menu: this.menuPart(),
			logo: images
		};
	}
	menuPart() {
		const itm = items;

		if (itm.length % 2 > 0) return 'error';

		return {
			left: itm.slice(0, itm.length/2),
			right: itm.slice(itm.length/2, itm.length)
		}
	}
	render() {
		return (
			<header className={'dark'}>
				<Menu itemsList={this.state.menu.left} />
				<Logo image={this.state.logo} />
				<Menu itemsList={this.state.menu.right} />
			</header>
		)
	}
}

export default Header;
