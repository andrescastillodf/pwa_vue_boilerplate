<template>
  <LayoutManager :name="$system_config.viewSettings.error404.layout">
    <div class="Error">
      <h1>Error</h1>
    </div>
  </LayoutManager>
</template>

<script>
export default {
  name: "Error"
};
</script>
