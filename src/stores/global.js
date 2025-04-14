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