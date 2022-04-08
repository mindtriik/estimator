<script>
    import { each } from "svelte/internal";

    import materialStore from "../material-store.js";

    let materials = [];
    materialStore.subscribe((items) => {
        materials = items;
    });

    const formatter = new Intl.NumberFormat('en-CA', {style: 'currency', currency: "CAD"});


    $: total = materials.reduce((prev, next) => {return prev + Number(next.price)}, 0);



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
            <th colspan="2">
                Total Price: 
            </th>
            <th>{formatter.format(total)}</th>
        </tr>
    </tfoot>
    <tbody>
        {#each materials as material, idx}
            <tr class="has-text-centered">
                <td>{material.name}</td>
                <td>{formatter.format(material.price)}</td>
                <td>
                    <button class="button is-danger is-outlined">
                        <span class="icon is-medium">
                            <i class="far fa-trash-alt" />
                        </span>
                    </button>
                </td>
            </tr>
        {/each}
    </tbody>
</table>
