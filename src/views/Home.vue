<template lang="pug">
 div#begin
  div#imagenInicio
    img(src="https://i.ibb.co/jJVXytY/Captura-de-pantalla-de-2019-05-04-16-56-12.png")
  div.container
    div#separacion 
  div#contenido
    div#contenedor.container
      div#texto
        label#descripcion Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit ligula dolor, nec porta magna interdum ac. Aliquam non cursus neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam congue sapien non felis imperdiet dictum. Aenean placerat nibh ac mi gravida, ac pretium quam auctor. Etiam quis augue id urna semper tincidunt et a nisl. Donec condimentum, enim ut molestie suscipit, lorem urna cursus risus, ut iaculis arcu tortor eu mi. Sed lorem neque, rutrum quis lobortis a, elementum in arcu. Nullam pellentesque et nisl nec posuere. Nam semper tincidunt velit, non pulvinar tortor sagittis vel.Aliquam in elit eu eros tincidunt convallis sed ac risus. Pellentesque id dui ipsum. Morbi facilisis scelerisque tempus. Sed ultrices enim et purus rhoncus feugiat. Nam iaculis hendrerit facilisis. Integer vitae egestas lacus, quis auctor tellus. Praesent volutpat tempus maximus. Fusce maximus nibh eget condimentum molestie. Nullam in nisl commodo orci aliquam vulputate at in magna. In quis laoreet felis.Morbi aliquam gravida nibh, quis porttitor purus consequat eu. Cras in pharetra massa. Phasellus fringilla, elit vitae cursus feugiat, mi felis aliquam lacus, eu fringilla nulla quam sed nulla. Mauris vel mollis mi, a hendrerit ligula. Quisque eget efficitur odio. Donec mollis magna sed lacus volutpat, at porttitor sem pretium. Curabitur nulla nibh, tristique a risus eu, condimentum dignissim purus. Quisque quis ultricies nunc.

</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
}
</script>

<style>
  #imagenInicio > img{
    height: 100%;
    width: 100%;
  }

  #separacion{
    margin-top: 5px;
    background: #8c3420;
    height: 1px;
  }

  #contenedor{
    margin-top: 10px;
    margin-bottom: 10px;
    background: #8c3420;
    border-radius:15px;
    height: 100%;
    width: 90%
  }

  #texto{
    text-align: center;
    color: #dba238;
    margin-top: 5px;
    vertical-align: middle;
  }

  label#descripcion{
    font-size: calc(0.60em + 0.5vw);
  }
</style>
