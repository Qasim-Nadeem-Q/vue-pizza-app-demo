<template>
	<div class="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
		<router-link to="/">
			<div class="logo">

				<a class="simple-text logo-normal" @click="set_active_id(1)">
					Pizza Hut
				</a>
			</div>
		</router-link>

		<div class="sidebar-wrapper">
			<ul class="nav">
				<span v-for="item in nav_items" :key="item.id" style="text-align: initial;">
					<router-link :to="item.link_to">
						<li :class="item.class" @click="set_active_id(item.id)">
							<a class="nav-link">
								<i class="material-icons">{{ item.icon }}</i>
								<p> {{ item.title }} </p>
							</a>
						</li>
					</router-link>
				</span>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: "Side-bar",

	data() {
		return {
			nav_items: [
				{ id: 1, title: "Home", icon: "home", class: "nav-item active", link_to: "/" },
				{ id: 2, title: "Food Category", icon: "filter_frames", class: "nav-item", link_to: "/food-category" },
				{ id: 3, title: "New Order", icon: "bubble_chart", class: "nav-item", link_to: "" },
				{ id: 4, title: "Product", icon: "production_quantity_limits", class: "nav-item", link_to: "/products-index" },
				{ id: 5, title: "Customer List", icon: "perm_identity", class: "nav-item", link_to: "/customerList" },
				{ id: 6, title: "Pizza Topping", icon: "receipt", class: "nav-item", link_to: "/pizza-topping" },
			],
			active_nav_id: this.$store.state.actcategoryive_nav_item,
		}
	},

	mounted() {
		this.active_nav_id = this.$store.state.active_nav_item;
		// console.log(this.nav_items[id].link_to);
		this.$router.push(this.nav_items[this.active_nav_id - 1].link_to);
	},

	methods: {
		set_active_id(id) {
			this.active_nav_id = this.$store.state.active_nav_item;
			if (this.active_nav_id === id) return
			this.nav_items.find(item => item.id === this.active_nav_id).class = 'nav-item'
			this.nav_items.find(item => item.id === id).class = 'nav-item active'
			this.$store.commit("updateNavItem", id);
		}
	}
}
</script>