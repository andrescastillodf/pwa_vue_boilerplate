<template>
  <div class="Layout">
    <base-header-menu />
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
