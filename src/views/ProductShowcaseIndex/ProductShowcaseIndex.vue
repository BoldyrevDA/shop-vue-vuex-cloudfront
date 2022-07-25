<template>
	<div class="grey lighten-5 py-4">
		<v-alert
			class="mx-4"
			v-if="error"
			border="bottom"
			colored-border
			type="error"
			elevation="2"
		>
			{{ error.name }}: {{ error.message }}
		</v-alert>
		<v-container v-else>
			<v-row>
				<v-col
					sm="12"
					md="4"
					lg="3"
					cols="auto"
					v-for="(product, index) in products"
					:key="product.id"
				>
					<v-card
						class="pa-2"
						data-test-id="product-card"
						outlined
						elevation="2"
					>
						<v-img
							height="250"
							:src="`https://source.unsplash.com/random?sig=${index}`"
						></v-img>

						<v-card-title>{{ product.title }}</v-card-title>
						<v-card-text>
							<p height="250" class="subtitle-2 text-truncate">
								{{ product.description }}
							</p>
							<p class="ma-0">
								{{
									$t('products.dynamicPrice', {
										price: formatPrice(product.price),
									})
								}}
							</p>

							<p class="ma-0">
								{{ $t('products.dynamicCount', { count: product.count }) }}
							</p>
						</v-card-text>

						<v-card-actions>
							<v-spacer></v-spacer>
							<v-add-product-to-cart
								isEditable
								@increment="handleProductIncrement(product)"
								@decrement="handleProductDecrement(product.id)"
								:maxCount="product.count"
							></v-add-product-to-cart>
						</v-card-actions>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

import { VAddProductToCart } from '@/components/AddProductToCart';

import { Product } from '@/models/product';
import { productApi } from '@/api/product-api';
import { formatter as priceFormatter } from '@/libs/price';

export default Vue.extend({
	name: 'ProductShowcaseIndex',
	components: { VAddProductToCart },
	data() {
		return {
			isFetching: false,
			products: [] as Product[],
			error: null,
		};
	},
	created() {
		this.fetchProducts();
	},
	methods: {
		formatPrice(price: number) {
			return priceFormatter.number(price);
		},
		fetchProducts() {
			this.isFetching = true;

			productApi
				.fetchAvailableProducts()
				.then(products => {
					this.products = products;
					this.error = null;
				})
				.catch(e => {
					this.error = e;
				})
				.finally(() => {
					this.isFetching = false;
				});
		},

		handleProductIncrement(product: Product) {
			this.$store.dispatch('cart/addProductToCart', product);
		},

		handleProductDecrement(productId: string) {
			this.$store.dispatch('cart/removeProductFromCart', productId);
		},
	},
});
</script>
