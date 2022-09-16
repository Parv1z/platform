const mainMenu = {
	data() {
		return {
			menuItems: [
				{url: '/', title: 'Главная страница', ico: 'ic-home'},
				{url: '/news', title: 'Новости', ico: 'ic-book'},
				{url: '/service', title: 'Услуги', ico: 'ic-cog'},
				{url: '/about', title: 'О компании', ico: 'ic-info'},
				{url: '/contacts', title: 'Контакты', ico: 'ic-location'},
			]
		}
	},
	template: 	`<ul class="nav flex-column menu-main">
					<li v-for="menu in menuItems">
						<router-link :to="menu.url"><i :class="menu.ico"></i> {{ menu.title }}</router-link>
					</li>
				</ul>`
}

export default mainMenu;