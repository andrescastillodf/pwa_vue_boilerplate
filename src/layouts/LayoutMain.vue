<template>
  <div class="Layout">
    <nav class="Layout__nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/404">404</router-link> |
      <router-link to="/error">error</router-link> |
      <router-link to="/product-edition">product-edition</router-link> |
    </nav>
    Header - Main
    <br />
    <br />
    <main class="Layout__main">
      <slot />
    </main>
    <br />
    <footer class="Layout__footer">
      &copy; Footer
    </footer>
  </div>
</template>
