<template>
  <app-navbar></app-navbar>
    <main class="router-view">
      <router-view></router-view>
    </main>
  <app-footer></app-footer>
</template>

<script>

</script>


<style scoped>
  main {
    min-height: calc(100vh - 260px);
    /* margin-bottom: 20px; */
  }
</style>
