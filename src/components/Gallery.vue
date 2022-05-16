<script>
export default {
  name: 'Gallery',
  props: {
  },
  data: () => ({
    active_id: 1,
    last_id: 17,
    audio: undefined,
    play_audio: false,
    audio_icon: "fas fa-ear-deaf"
  }),
  beforeMount(){
    // Set the active_id from the path
    if (this.$route.params.id == "") {
      this.active_id = 1
    } else if (this.$route.params.id > this.last_id ){
      this.active_id = this.last_id
    } else {
      this.active_id = parseInt(this.$route.params.id)
    }
    // Set the play_audio from the query
    if (this.$route.query.audio) {
      this.play_audio = true
    }
    this.getAudio()
  },
  methods: {
    nextElement() {
      if (this.isNotLastElement) {
        this.active_id += 1
      }
      this.changeElement()
    },
    previousElement() {
      if (this.isNotFirstElement) {
        this.active_id -= 1
      }
      this.changeElement()
    },
    changeElement() {
      this.audio.pause()
      this.$router.push(`/${this.active_id}`)
      this.getAudio()
    },
    getImage() {
      return new URL(`../assets/fotos/${this.active_id}.jpg`, import.meta.url).href
    },
    getAudio() {
      this.audio = new Audio(new URL(`../assets/audio/${this.active_id}.mp3`, import.meta.url).href)
      this.audio_icon = "fas fa-ear-deaf"
      if (this.play_audio) {
        this.audio_icon = "fas fa-pause"
        this.audio.play()
      }
    },
    toogleAudio() {
      this.play_audio = ! this.play_audio
      if (this.play_audio) {
        this.audio.play()
        this.audio_icon = "fas fa-pause"
      } else {
        this.audio.pause()
        this.audio_icon = "fas fa-ear-deaf"
      }
    },
  },
  computed: {
    isNotFirstElement() {
      return this.active_id != 1
    },
    isNotLastElement() {
      return this.active_id != this.last_id
    },
  },
}
</script>

<template>
  <v-container class="d-flex flex-column fill-height fill-width">
    <v-row justify=center>
      <v-img
        :src="getImage(active_id)"
        contain
        eager
        max-height="82vh"
        alt="Foto"
      ></v-img>
    </v-row>

    <v-row align=end justify=center class="mt-auto">
      <v-col align=center>
        <v-btn
          v-show=isNotFirstElement
          data-cy="prev_button"
          icon="fas fa-arrow-left"
          size="small"
          @click="previousElement"
        >Button</v-btn>
      </v-col>
      <v-col align=center>
        <v-btn
          data-cy="ear"
          :icon="audio_icon"
          size="small"
          @click="toogleAudio"
        >Button</v-btn>
      </v-col>
      <v-col align=center>
        <v-btn
          v-show="isNotLastElement"
          data-cy="next_button"
          icon="fas fa-arrow-right"
          size="small"
          @click="nextElement"
        >Button</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
