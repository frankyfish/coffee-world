<template>
  <div class="world">
    <l-map
        :zoom="zoom"
        @click="createMarker">

      <l-marker
          v-for="marker in markers" :key="marker"
            :lat-lng="marker"
            draggable>
        <l-popup :lat-lng="marker">Hey!</l-popup>
      </l-marker>
      <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          layer-type="base"
          name="OpenStreetMap"
          :attribution="attribution"
      ></l-tile-layer>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LPopup } from '@vue-leaflet/vue-leaflet';
import "leaflet/dist/leaflet.css";
import * as L from 'leaflet';

export default {
  name: 'CoffeeWorld',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  data() {
    return {
      zoom: 3,
      coordinates: [50, 50],
      markers: [], // https://stackoverflow.com/a/54499373/13981676
      // tile-layer
      attribution:
          '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    };
  },
  methods: {
    // dynamically pushing new coordinates to an array of LatLng objects
    // note: event is triggered as well in case of map being moved (on mouse down?)
    // produces error in such case (because doesn't contain coordinates
    createMarker: function createMarker(event) {
      console.log(event.latlng)
      if (typeof event !== "undefined"
          && typeof event.latlng !== "undefined") { // filtering only suitable event type
        // not sure if parseFloat is actually needed
        this.markers.push(L.latLng(event.latlng.lat, event.latlng.lng))
      }
    }
  }
};
// L-Map Vue doc: https://vue2-leaflet.netlify.app/components/LMap.html#demo
</script>

<style lang="scss">
.world {
  width: 100%;
  height: 100%;
}
</style>