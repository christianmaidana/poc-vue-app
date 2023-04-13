<template>
  <div class="card col-md-4 col-sm-6" style="max-width: 540px; margin-bottom: 10px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img v-if="info.image" :src="info.image.url" class="img-fluid rounded-start" alt="...">
      <img v-if="!info.image" src="default.png" class="img-fluid rounded-start">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ info.title }}</h5>
        <p class="card-text">{{ info.contentId }} - {{ info.assetId }}</p>
        <p class="card-text"><small class="text-body-secondary">{{ info.contentType }}</small></p>
        <button class="btn btn-danger" @click="removeFile(info.id)">Delete</button>
      </div>
    </div>
  </div>
  <hr>
  <div class="row g-0">
      <video v-if="info.video" :src="info.video.url" class="object-fit-sm-contain border rounded" controls></video>
      <svg v-if="!info.video" class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="40%" y="50%" fill="#dee2e6" dy=".3em">Video cap</text></svg>
  </div>  
</div>
</template>
<script>
import {mapActions} from 'vuex';

export default {
  name: 'File-keystone',
  props: [
    "info"
  ],
  methods: mapActions([
      'removeFile'
  ]),
}
</script>