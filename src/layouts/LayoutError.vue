<template>
  <div class="Layout">
    <nav class="Layout__nav">
      <router-link to="/">Home</router-link>
    </nav>
    Header - Error Layout
    <br />
    <br />
    <main class="Layout__error">
      <slot />
    </main>
    <br />
    <footer class="Layout__footer">
      &copy; Error Footer
    </footer>
  </div>
</template>
