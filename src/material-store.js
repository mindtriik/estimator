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

const edit = (id, name, price) => {
    materialStore.update ((items) => {
       const index = items.findIndex((i) => i.id === id);

       items[index].name = name;
       items[index].price = price;

       return items;
    });
};

const remove = (id) => {
    materialStore.update ((items) => {
        const idx = items.findIndex((i) => i.id === id);

        items.splice(idx, 1);

        return items;
    });

};


if (localStorage.getItem(key)) {
    materialStore.set(JSON.parse (localStorage.getItem(key)));
}

materialStore.subscribe((items) => {
    const jsonString = JSON.stringify(items);
    localStorage.setItem(key, jsonString);
});

export default {
    subscribe: materialStore.subscribe, add, edit, remove
}