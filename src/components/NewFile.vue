<template>
  <div class="row g-0">
    <div class="card">
      <div class="card-title" style="background-color:#222">
        <div class="row">
          <div class="col-md-8">
            <h4 style="color:#fafafa; padding-top: 5px; padding-bottom: 5px; text-align: initial;">New Content</h4>
          </div>
          <div class="col-md-4">
            <button class="btn btn-primary" style="float:right;" v-on:click="toggleForm">{{show}}</button>
          </div>
        </div>
      </div>
      <div class="card-body" v-bind:class="{hide: !showCard}">
        <div class="row">
          <label>Title:</label>
          <input class="form-control" type="text" v-model="title"/>
        </div>
        <div class="row">
          <label>ContentId:</label>
          <input class="form-control" type="text" v-model="contentId"/>
        </div>
        <div class="row">
          <label>Asset Id:</label>
          <input class="form-control" type="text" v-model="assetId"/>
        </div>
        <div class="row"> 
          <label>Content Type:</label>
          <input class="form-control" type="text" v-model="contentType"/>
        </div>
        <button class="btn btn-success" v-on:click="createContent">Crear</button>  
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: 'File-keystone',
  props: [
    "info"
  ],
  data() {
    return {
      title: '',
      contentId: '',
      assetId: '',
      contentType: '',
      show: 'Show',
      showCard: false,
    }
  },
  methods: {
    ...mapActions([
      'addFile'
    ]),
    createContent() {
      console.log("Creando eventee", this.title, this.contentId, this.assetId, this.contentType);
      const { title, contentId, assetId, contentType } = this;
      this.addFile({
        title,
        contentId,
        assetId,
        contentType,
      });
      
    },
    toggleForm() {
      this.showCard = !this.showCard;
      this.show = this.show === 'Show'? 'Hide' : 'Show';
    }
  }

}
</script>
<style>
  .hide {
    display: none;
  }
</style>