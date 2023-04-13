<template>
  <div class="container">    
    <div class="row">
      <NewFile />
    </div> 
    <hr>
    <div class="row">
      <File
          v-for="(file, index) in files"
          :key="index"
          :info="file"
          :index="index"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import File from './File-keystone.vue';
import NewFile from './NewFile.vue';

export default {
  components: {
    File,
    NewFile,
  },
  name: 'Archivos-keystone',
  methods: mapActions([
      'initFiles'
  ]),
  data() {
    return {
        info: null,
    }
  },
  created() {
    this.initFiles();
  },
  computed: {
    ...mapGetters([
      'files'
    ])
  }
}
</script>