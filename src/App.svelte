<script>
  import Table from "./lib/Table.svelte";
  import Form from "./lib/Form.svelte";
</script>

<main class="section">
  <div class="container">
    <div class="columns">
      <div class="column is-four-fifths">
        <h1 class="title is-1">Project Estimator</h1>
        
        <div class="section">
          <Form />
        </div>

        <div class="section">
          <Table />
        </div>
        
      </div>
    </div>
  </div>
</main>
