import { writable } from 'svelte/store';


export let loan_forCustomers = writable({
    created_at: "2000-01-01 1:01:01",
    updated_at: null,
    customer_id: null,
    description: null,
    expDate: "2000-01-01 1:01:01",
    givenAmount: 1,
    id: null,
    interest: null,
    items: [],
    shop: {
        id: null,
        name: null,
        img: null,
    }

});