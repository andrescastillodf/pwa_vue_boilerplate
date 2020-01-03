<template>
  <div class="LayoutDefault">
    <nav class="LayoutDefault__nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/404">404</router-link> |
      <router-link to="/error">error</router-link> |
      <router-link to="/product-edition">product-edition</router-link> |
    </nav>
    Header - default
    <br />
    <br />
    <main class="LayoutDefault__main">
      <slot />
    </main>
    <br />
    <footer class="LayoutDefault__footer">
      &copy; Footer
    </footer>
  </div>
</template>
