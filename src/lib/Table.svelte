<script>
    import { createEventDispatcher } from "svelte";
    import materialStore from "../material-store.js";

    const dispatch = createEventDispatcher();

    let materials = [];
    materialStore.subscribe((items) => {
        materials = items;
    });

    function edit(id, name, price) {
        dispatch("edit", { id, name, price });
    }

    const formatter = new Intl.NumberFormat("en-CA", {
        style: "currency",
        currency: "CAD",
    });

    $: total = materials.reduce((prev, next) => {
        return prev + Number(next.price);
    }, 0);
</script>

<table class="table is-fullwidth is-bordered">
    <thead>
        <tr>
            <th>Material</th>
            <th>Price</th>
            <th />
        </tr>
    </thead>
    <tfoot>
        <tr>
            <th colspan="2"> Total Price: </th>
            <th>{formatter.format(total)}</th>
        </tr>
    </tfoot>
    <tbody>
        {#each materials as material, idx}
            <!-- See https://stackoverflow.com/questions/51977823/type-void-is-not-assignable-to-type-event-mouseeventhtmlinputelement -->
            <tr
                on:click={() => {
                    edit(material.id, material.name, material.price);
                }}
                class="has-text-centered"
            >
                <td>{material.name}</td>
                <td>{formatter.format(material.price)}</td>
                <td>
                    <span class="icon is-medium">
                        <i
                            class="far fa-trash-alt"
                            on:click|stopPropagation={() => {
                                materialStore.remove(material.id);
                            }}
                        />
                    </span>
                </td>
            </tr>
        {/each}
    </tbody>
</table>

<style>
    tr {
        cursor: pointer;
    }
    tfoot > tr {
        cursor: inherit;
    }
</style>
