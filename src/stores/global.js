import { writable } from 'svelte/store';


export let loan_forCustomers = writable({
    created_at: "2000-01-01 1:01:01",
    updated_at: null,
    customer_id: null,
    description: null,
    expDate: "2000-01-01 1:01:01",
    givenAmount: 0,
    id: null,
    interest: 0,
    items: [],
    shop: {
        id: null,
        name: null,
        img: null,
    }

});

export let product_forCustomers = writable({
    description: null,
    estimatedValue: 0,
    id: null,
    img: null,
    loan_id: null,
    name: null,
    payedValue: 0,
    shop_id: null,
    type: {
        id: null,
        name: null
    }

})

export let loan_forShops = writable({
    created_at: "2000-01-01 1:01:01",
    updated_at: null,
    customer_id: null,
    description: null,
    expDate: "2000-01-01 1:01:01",
    givenAmount: 0,
    id: null,
    interest: 0,
    items: [],
    customer: {
        id: null,
        name: null,
        img: null,
    }

});

export let loan_empty = writable({
    created_at: "2000-01-01 1:01:01",
    updated_at: null,
    customer_id: null,
    description: null,
    expDate: "2000-01-01 1:01:01",
    givenAmount: 0,
    id: null,
    interest: 0,
    items: [],
    shop: {
        id: null,
        name: null,
        img: null,
    }

});

export let product_forShops = writable({
    description: null,
    estimatedValue: 0,
    id: null,
    img: null,
    loan_id: null,
    name: null,
    payedValue: 0,
    shop_id: null,
    type: {
        id: null,
        name: null
    }

})

export let image_forCustomers = writable("")
export let image = writable("")

export let isNewEntry = writable(false)

export let productList_forNewLoan = writable([])
export let customer_forNewLoan = writable(null)
