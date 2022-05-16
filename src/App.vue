<template>
  <v-app style="background: #510561">
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
}
</script>

<style lang="sass">
  @import '../node_modules/typeface-roboto/index.css'
</style>
