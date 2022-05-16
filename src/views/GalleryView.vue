<template>
  <Gallery />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import Gallery from '../components/Gallery.vue';

export default defineComponent({
  name: 'GalleryView',
  components: {
    Gallery,
  },
});
</script>
