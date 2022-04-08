<script>
    import materialStore from '../material-store.js'
    export let id;
    export let name = '';
    export let price;


    $: mode = id === undefined ? "Add" : "Edit";
    $: canSubmit = price === undefined ? false : price !== '' && name !== '';

    function submit() {
        if(!canSubmit) {
            return;
        }

        if (mode === 'Add') {
            materialStore.add(name, price);
        }

        if (mode === 'Edit') {
            materialStore.edit(id, name, price);
        }

        price = '';
        name = '';
        id = undefined;        
    }

    function cancel() {
        price = '';
        name = '';
        id = undefined; 
    }


</script>
<form on:submit|preventDefault = {submit} >
    <fieldset class="field">
        <label class="label" for="nameField">Material </label>
        <div class="control">
            <input
                bind:value={name}
                class="input"
                type="text"
                id="nameField"
                placeholder="Wood, Glue, etc."
            />
        </div>
    </fieldset>

    <fieldset class="field">
        <label class="label" for="PriceField">Price </label>
        <div class="control">
            <input
                bind:value={price}
                class="input"
                type="Number"
                id="PriceField"
                placeholder="Price"
                min="0"
                step="any"
            />
        </div>
    </fieldset>

    <div class="buttons is-grouped is-right">
        <div class="control">
            {#if mode === "Edit"}
                <button class="button is-Ghost is-normal is-responsive" type="button" on:click={cancel} >Cancel</button>
            {/if}
        </div>

        <div class="control">
            <button class="button is-info is-normal is-responsive" type="submit"  disabled={!canSubmit} >{mode}</button>
        </div>
    </div>
</form>

<style>
    button:disabled {
        cursor: not-allowed;
    }

    button {
        width: 6em;
    }
</style>
