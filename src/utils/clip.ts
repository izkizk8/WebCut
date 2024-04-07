import { MP4Clip } from '@webav/av-cliper'

export async function getClip(src: string) {
  const clip = new MP4Clip((await fetch(src)).body!)
  await clip.ready
  return await clip.thumbnails()
}
