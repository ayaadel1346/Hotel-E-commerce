<template>

    <main class="container-fluid text-tableText mx-5 rounded shadow-2xl py-[1%] lg:min-h-[80vh] border-[1px] 
                 border-borderGray my-[2%] flex flex-col justify-center items-center">
      
      <h1 class="text-center text-tableText leading-[30px] text-[20px] md:text-[30px]">
        Edit Room
      </h1>
  

      <form 
       @submit.prevent="submitForm(room.id)" 
       class="flex flex-col w-[90%] md:w-[70%] lg:w-[50%] items-center mx-auto">
        
        <section 
         v-for="(input, index) in rooms" 
         :key="index" 
         class="relative mt-5 w-full">
          
         
          <template v-if="input.type !== 'images'">

            <input
              v-if="input.type === 'text' || input.type === 'number'"
              :type="input.type"
              :id="input.name"
              v-model="inputValues[input.name]"
              required
              class="peer capitalize bg-gray w-full border border-accent rounded-md p-3 placeholder-transparent 
                     focus:outline-none focus:border-blue-500"
              :placeholder="input.name"
            />
            
            <label
              :for="input.name"
              :class="{
                '-top-5 text-sm capitalize text-blue-500': inputValues[input.name],
                'absolute capitalize left-3 text-tableText transition-all duration-200 ease-out text-gray-500':true, 
                'peer-placeholder-shown:top-0 peer-placeholder-shown:left-3 peer-placeholder-shown:text-lg ':true,
                'peer-placeholder-shown:text-gray-400 peer-focus:-top-5 peer-focus:left-3 peer-focus:text-sm peer-focus:text-blue-500': true
              }"
            >
              {{ input.name }}
            </label>

          </template>
  

         
          <template v-if="input.type === 'images'">

            <input
              type="file"
              @change="handleFileChange"
              multiple
              accept="image/jpeg, image/png, image/gif, image/jpg"
              class="peer bg-gray w-full border border-accent rounded-md p-3 placeholder-transparent focus:outline-none focus:border-blue-500"
            />

          </template>
  
        </section>
  
        <button 
         type="submit" 
         class="submit-button">
          <span class="text-white z-10">Submit</span>
        </button>

      </form>

    </main>

  </template>
  
  <script setup>
  const roomsData = useState('roomsData');


  const props =defineProps({
  room: {
    type: Object,
    default: () => ({
      id:0,
      roomName: '',
      description: '',
      capacity: 0,
      price: 0,
      images: []
    })
  }
 });


  const rooms = [
    { name: 'roomName', type: 'text' },
    { name: 'description', type: 'text' },
    { name: 'capacity', type: 'number' },
    { name: 'price', type: 'number' },
    { name: 'images', type: 'images' } 
  ];
  

  const inputValues = reactive({
  roomName: props.room.roomName,
  description: props.room.description,
  capacity: props.room.capacity,
  price: props.room.price,
  images: [...props.room.images]
});


const handleFileChange = (event) => {
  const files = Array.from(event.target.files);
 
  inputValues.images.push(...files);
};


const submitForm = async (id) => {
  try {
    if (import.meta.client) {
      const token = sessionStorage.getItem('token');

     
      const formData = new FormData();
      formData.append('roomName', inputValues.roomName);
      formData.append('description', inputValues.description);
      formData.append('capacity', inputValues.capacity);
      formData.append('price', inputValues.price);

     
      inputValues.images.forEach((image) => {
        if (image instanceof File) {
          formData.append('images', image); 
        }
      });

      const { data, error } = await $fetch(`http://localhost:5000/edit-room/${id}`, {
        method: 'PUT',
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });

      if (!error) {
        if (Array.isArray(roomsData.value)) {
          roomsData.value = roomsData.value.map((roomData) => {
            return roomData.id === props.room.id ? { ...roomData, ...inputValues } : roomData;
          });
        } else {
          console.error("roomsData is not an array");
        }
        navigateTo('/rooms');
      }
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
};
 
</script>
  
