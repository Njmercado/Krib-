<template>
  <iframe
    class="video-styles"
    :src="'https://www.youtube.com/embed/'+videoid+'?showinfo=0&controls=0'"
    :width="width"
    :height="height"
  ></iframe>
</template>

<script>
export default {
  name: 'Video',
  data: () => ({}),
  props: [
    'videoid',
    'width',
    'height'
  ]
}
</script>

<style>
  .video-styles {
    border-radius: 16px;
    border-width: 0px;
    box-shadow: 2px 2px 4px rgba(0,0,0,.4);
  }
</style>
