<script setup lang="ts">
import IconMusic from '~/assets/icons/icon-music.svg?component'
import IconText from '~/assets/icons/icon-text.svg?component'
import { getClip } from '~/utils/clip'
import movie from '/bird.mp4'
import { ref, watchEffect } from 'vue'

const imgList = ref([])
watchEffect(async () => {
  imgList.value = (await getClip(movie)).map(it => ({
    img: URL.createObjectURL(it.img),
    ts: it.ts
  }))
})
</script>
<template>
  <div class="grid content-center flex-1 text-center">
    <div class="element-track">
      <div class="flex gap-2">
        <IconText />
        <span>+ 添加文字等素材</span>
      </div>
    </div>
    <div class="video-track">
      <div class="flex flex-row overflow-auto">
        <template v-for="img in imgList" :key="img.ts">
          <div class="tooltip flex-none" :data-tip="(img.ts / 1e6).toFixed(2) + 's'">
            <img :src="img.img" />
          </div>
        </template>
      </div>
    </div>
    <div class="music-track">
      <div class="flex gap-2">
        <IconMusic />
        <span>+ 添加音频</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.music-track,
.video-track,
.element-track {
  width: 100%;
  padding-left: 10px;
  font-size: 0.875rem;
  margin: 4px 0px;
  display: flex;
  align-items: center;
  border: 2px dashed rgb(59, 59, 79);
  color: rgb(110, 110, 134);
  border-radius: 5px;
  cursor: pointer;
  height: 28px;
}
.video-track {
  // justify-items: flex-start;
  // align-content: center;
  transition: width 200ms ease-out 0s;
  position: relative;
  height: 70px;
  background: rgb(30, 30, 41);
}
.music-track {
  background: url('~/assets/imgs/music-ripples.png') left center / auto 100% repeat-x;
}
</style>
