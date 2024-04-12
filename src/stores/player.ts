import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const usePlayerStore = defineStore('playerStore', () => {
  // 播放状态
  const playStatus = ref(false)
  // 切换播放状态
  function togglePlay(state?: boolean) {
    playStatus.value = state === undefined ? !playStatus.value : state
  }
  // 播放列表
  const playList = ref<string[]>([])
  // 轨道数
  const trackCount = computed(() => playList.value.length)

  const canvasRef = ref<HTMLCanvasElement | null>(null)

  const fullScreen = ref(false)

  function toggleFullScreen() {
    fullScreen.value = !fullScreen.value
  }

  const videoRef = ref<HTMLVideoElement | null>(null)

  const currentTime = ref<number>(0)

  function forward(seconds: number) {
    if (videoRef.value) {
      videoRef.value.currentTime += seconds
    }
  }

  const duration = ref<number>(0)

  return {
    playStatus,
    togglePlay,
    playList,
    trackCount,
    canvasRef,
    toggleFullScreen,
    fullScreen,
    videoRef,
    forward,
    currentTime,
    duration
  }
})
