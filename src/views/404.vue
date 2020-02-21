<template>
  <LayoutManager :name="$system_config.viewSettings.error404.layout">
    <div class="404">
      <h1>404</h1>
    </div>
  </LayoutManager>
</template>

<script>
export default {
  name: "NotFoundPage"
};
</script>
