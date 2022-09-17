const pageMain = {
	data() {
		return {
			title : 'Главная страница',
			isSidebar: true,
			option: {
				tooltip: {
					trigger: "item",
					formatter: "{a} <br/>{b} : {c} ({d}%)",
				},
				legend: {
					orient: "vertical",
					left: "left",
					data: [
						"Клиенты",
						"Продажа",
						"Возвраты",
						"Отказы",
						"Товары",
					],
				},
				series: [{
					name: "Статистика",
					type: "pie",
					radius: "55%",
					center: ["50%", "60%"],
					data: [
						{ value: 335, name: "Клиенты" },
						{ value: 310, name: "Продажа" },
						{ value: 234, name: "Возвраты" },
						{ value: 135, name: "Отказы" },
						{ value: 1548, name: "Товары" }
					],
					emphasis: {
						itemStyle: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: "rgba(0, 0, 0, 0.5)",
						}
					},
				}]
			},
		}
	},
	components: {"v-chart": VueECharts},
	template: 	`<h1> {{ title }} </h1>
		<p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.</p>
		<h2>Какая то статистика</h2>
		<div class="charts">
			<v-chart autoresize :option="option"/>
		</div>
	`
}

export default pageMain;