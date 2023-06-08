<script setup lang="ts">
import { ref, onMounted, shallowRef } from "vue";
import "cesium/Build/Cesium/Widgets/widgets.css";

import { Viewer } from "cesium";

window.CESIUM_BASE_URL = "libs/cesium/";
const viewerDivRef = ref<HTMLDivElement>();
const viewerRef = shallowRef<Viewer>();

onMounted(() => {
  viewerRef.value = new Viewer(viewerDivRef.value as HTMLElement);
});
</script>

<template>
  <div id="cesium-viewer" ref="viewerDivRef"></div>
</template>

<style scoped>
#cesium-viewer {
  width: 100%;
  height: 100%;
}
</style>
