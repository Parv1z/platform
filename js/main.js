import pageMain from './components/pageMain.js';
import pageNews from './components/pageNews.js';
import pageService from './components/pageService.js';
import pageAbout from './components/pageAbout.js';
import pageContacts from './components/pageContacts.js';

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

const componentHeader = {
	template: 	`<header>
					<form action="/search" method="get">
						<input type="text" name="query" value="" placeholder="Найти на сайте">
					</form>
				</header>`
}

const routes = [
	{
		path: '/',
		component: pageMain
	},
	{
		path: '/news',
		component: pageNews
	},
	{
		path: '/service',
		component: pageService
	},
	{
		path: '/about',
		component: pageAbout
	},
	{
		path: '/contacts',
		component: pageContacts
	}
]

const router = VueRouter.createRouter({
	history: VueRouter.createWebHashHistory(),
	routes,
})

const App = Vue.createApp({
	data() {
		return {
			title: 'Шаблон Platform',
		}
	},
	components: {mainMenu, componentHeader },
	template: 	`<div class="container">
					<div class="row justify-content-center">
						<div class="col-12" id="pf-main-box">
							<div class="row">
								<aside class="col-3" id="pf-sidebar-box">
									<div class="pf-sidebar-inner pfs-sticky">
										<div class="pf-logo_box">
											<a href="/"><img src="img/logo.svg" alt="Logo"></a>
										</div>
										<nav>
											<main-menu></sidebar-main>
										</nav>
									</div>
								</aside>
								<section class="col-9" id="pf-content-box">
									<div class="row">
										<div class="col-8">
											<component-header></component-header>
											<router-view></router-view>
										</div>
										<div class="col-4">
										sidebar
										</div>
									</div>
								</section>
							</div>
						</div>
					</div>
				</div>`
}).use(router).mount('#app')