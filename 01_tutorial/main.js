var app = new Vue({
	el: '#app',
	data: {
		product: 'Socks',
		brand: 'Vue Mastery',
		image: './assets/vmSocks-green.png',
		inStock: true,
		onSale: true,
		details: ['80% cotton', '20% polyester', 'Gender-neutral'],
		variants: [
			{
				variantId: 1,
				variantColor: 'green',
				variantImage: './assets/vmSocks-green.png',
			},
			{
				variantId: 2,
				variantColor: 'blue',
				variantImage: './assets/vmSocks-blue.png',
			},
		],
		cart: 0,
	},
	methods: {
		addToCart() {
			this.cart += 1;
		},
		removeToCart() {
			if (this.cart < 1) {
				return false;
			}
			this.cart -= 1;
		},
		updateProduct(variantImage) {
			this.image= variantImage;
		}
	},
	computed: {
		title() {
			return this.brand + ' ' + this.product;
		}
	}
});