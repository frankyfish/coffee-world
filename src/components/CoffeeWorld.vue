<template>
<div class="world">
    <l-map 
      :zoom="zoom" 
      :center="center"
      :bounds="bounds" 
      style="height: 800px; width: 900px">
      
      <l-tile-layer
       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
       layer-type="base"
       name="OpenStreetMap"
      ></l-tile-layer>
    <!-- <l-marker :lat-lng="coordinates" draggable> </l-marker> -->
    </l-map>
</div>
</template>

<script>
import { LMap, LTileLayer } from '@vue-leaflet/vue-leaflet';
import "leaflet/dist/leaflet.css";

export default {
  name: 'CoffeeWorld',
  components: {
    LMap,
    LTileLayer
  },
  data() {
    return {
      zoom: 3,
      coordinates: [50, 50],
      bounds: null
    };
  },
};
// L-Map Vue doc: https://vue2-leaflet.netlify.app/components/LMap.html#demo
</script>

<style>
.world {
    width: 100%;
    height: 100%;
}
</style>