<template>

<RoomEditForm :room="room"/>
   
</template>


<script setup>

const route=useRoute();
const routeId=ref('');

let room = {};

if (route.query.room) {
  try {
    room = JSON.parse(route.query.room);
  } catch (error) {
    console.error('Error parsing room query:', error);
  }
}




if(route){
    routeId.value=route.params.id;
}



definePageMeta({
    layout:'home',
})

</script>