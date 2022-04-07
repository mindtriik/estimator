import { writable } from "svelte/store";

const materialStore = writable([]);
const key = 'Materials'
const add = (name, price) => {
    materialStore.update((items) => {
        const item = {
            name,
            price,
            id: new Date().getTime()
        }

        return [item, ...items];
    });
};

materialStore.subscribe((items) => {
    console.log(items, 'materials');
    const jsonString = JSON.stringify(items);
    localStorage.setItem(key, jsonString);
});

export default {
    subscribe: materialStore.subscribe, add,
}