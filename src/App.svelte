<script>
  import Table from "./lib/Table.svelte";
  import Form from "./lib/Form.svelte";

  let id;
  let name = '';
  let price;

  function edit(e) {
   ({id, name, price } = e.detail);
  }

</script>

<main class="section">
  <div class="container">
    <div class="columns">
      <div class="column is-four-fifths">
        <h1 class="title is-1">Project Estimator</h1>
        
        <div class="section">
          <Form bind:id bind:name bind:price/>
        </div>

        <div class="section">
          <Table on:edit={edit}/>
        </div>
        
      </div>
    </div>
  </div>
</main>
