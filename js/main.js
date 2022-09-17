import pageMain from './components/pageMain.js';
import pageNews from './components/pageNews.js';
import pageService from './components/pageService.js';
import pageAbout from './components/pageAbout.js';
import pageContacts from './components/pageContacts.js';

import mainMenu from './widgets/mainMenu.js';
import search from './widgets/search.js';
import infoUser from './widgets/infoUser.js';

const routes = [
	{
		path: '/',
		component: pageMain,
		meta: pageMain.data()
	},
	{
		path: '/news',
		component: pageNews,
		meta: pageNews.data()
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

router.afterEach((to, from) => {
	App.$data.isSidebar = to.meta.isSidebar
})

const App = Vue.createApp({
	data() {
		return {
			title: 'Шаблон Platform',
			isSidebar: true
		}
	},
	components: {mainMenu, search, infoUser },
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
											<main-menu></main-menu>
										</nav>
									</div>
								</aside>
								<section class="col-9" id="pf-content-box">
									<div class="row">
										<div :class="isSidebar ? 'col-8' : 'col-12'">
											<header>
												<search></search>
											</header>
											<router-view></router-view>
										</div>
										<div class="col-4" v-if="isSidebar">
											<info-user></info-user>
										</div>
									</div>
								</section>
							</div>
						</div>
					</div>
				</div>`
}).use(router).mount('#app')