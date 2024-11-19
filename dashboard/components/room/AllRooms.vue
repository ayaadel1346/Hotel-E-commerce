<template>

  <main class="text-tableText mx-5 my-5 flex justify-center items-center container-fluid">

    <section class="w-full min-h-[84vh] shadow-2xl rounded border-borderGray border-[1px]">

    <div class="flex justify-end p-5">

      <NuxtLink 
          to="/add-room"    
          class="flex  gap-1 justify-center mt-5 lg:mt-0 items-center px-6 py-2 lg:min-w-[80px] min-w-[120px]  rounded text-white  bg-yellow-400 hover:bg-yellow-500 transition-all duration-300 ease-in-out">
           <Icon
           name="ic:outline-plus"
           size="20"
           class="text-white "/>

           Add
     </NuxtLink>

    </div>

      <table class="w-full table-fixed">

        <thead>

          <tr class="border-b-[1px] text-center border-borderGray">

            <th class="p-3">Room Name</th>
            <th class="p-3">Description</th>
            <th class="p-3">Capacity</th>
            <th class="p-3">Price</th>
            <th class="p-3">Actions</th>

          </tr>
          
        </thead>


        <tbody>

          <tr 
           v-for="room in paginatedRooms" 
           :key="room.id" 
           class="hover:bg-rowHover text-center hover:text-black border-b-[1px] border-borderGray cursor-pointer">

            <td class="p-3">{{ room.roomName }}</td>
            <td class="p-3">{{ room.description }}</td>
            <td class="p-3">{{ room.capacity }} persons</td>
            <td class="p-3">${{ room.price.toFixed(2) }}</td>
            <td class="p-3 flex  justify-around items-center">
            <NuxtLink  :to="{
              path: `/rooms/${room.id}`, 
              query: {
               room:JSON.stringify(room)
              }
            }"
           class=" flex  gap-1 justify-center items-center px-6 py-2 lg:min-w-[80px] min-w-[120px] rounded text-white  bg-blue-400 hover:bg-blue-500 transition-all duration-300 ease-in-out ">
              <Icon
              name="ic:outline-mode-edit"
              size="20"
              class="text-white "/>
              Edit
            </NuxtLink>

            <button
             @click="deleteRooms(room.id)"
             class="flex gap-1 justify-center mt-5 lg:mt-0 items-center px-6 py-2 lg:min-w-[80px] min-w-[120px]  rounded text-white  bg-red-400 hover:bg-red-500 transition-all duration-300 ease-in-out">
              <Icon
              name="ic:outline-delete"
              size="20"
              class="text-white "/>

              Delete
            </button>

            </td>

          </tr>

        </tbody>

      </table>

    
      <div class="flex justify-center gap-3 mt-5">

        <button 
          @click="goToPage(currentPage - 1)" 
          :disabled="currentPage === 1"
          class="bg-gray-300 p-2 rounded-md">
          Previous
        </button>

        <span>Page {{ currentPage }} of {{ totalPages }}</span>

        <button 
          @click="goToPage(currentPage + 1)" 
          :disabled="currentPage === totalPages"
          class="bg-gray-300 p-2 rounded-md">
          Next
        </button>

      </div>

    </section>

  </main>

</template>



<script setup>
;
import Swal from 'sweetalert2';

const search = ref("");
const rooms = useState('roomsData',()=>[]);
const currentPage = ref(1);
const roomsPerPage = 8;


const fetchRooms = async () => {

  if (rooms.value.length) {
    return;
  }


try {
  const response = await $fetch("http://localhost:5000/rooms", {
    method: "GET",
  });

  if (response.rooms) {
    rooms.value = response.rooms;
  } else {
    console.error("No rooms data found");
  }
} catch (err) {
  console.error("Error fetching rooms:", err);
}
};


const filteredRooms = computed(() => {
if (!search.value) return rooms.value;
return rooms.value.filter((room) =>
  room.roomName.toLowerCase().includes(search.value.toLowerCase())
);
});



const deleteRooms = async (id) => {
  let token;

  if (import.meta.client) {
    token = sessionStorage.getItem("token");
    if (!token) {
      console.error("Authorization token is missing.");
      return;
    }
  }

  try {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'This will permanently delete the room!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    });

   
    if (result.isConfirmed) {
      await $fetch(`http://localhost:5000/remove-room/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

    
      rooms.value = rooms.value.filter((room) => room.id !== id);

      Swal.fire(
        'Deleted!',
        'The room has been deleted.',
        'success'
      );
    }
  } catch (error) {
    console.error("An error occurred during deleting the room:", error);
  }
};


const totalPages = computed(() => {
return Math.ceil(filteredRooms.value.length / roomsPerPage);
});


const paginatedRooms = computed(() => {
const startIndex = (currentPage.value - 1) * roomsPerPage;
const endIndex = startIndex + roomsPerPage;
return filteredRooms.value.slice(startIndex, endIndex);
});


const goToPage = (page) => {
if (page < 1 || page > totalPages.value) return;
currentPage.value = page;
};


await fetchRooms();
</script>


  
<style scoped>
  @media (max-width: 1024px) {
    
    table {
      display: block;
      width: 100%;
    }
    
    thead {
      display: none; 
    }
  
    tbody tr {
      display: block;
      margin-bottom: 10px;
      border: 1px solid #ddd; 
    }
  
    tbody td {
      display: block;
      width: 100%;
      text-align: left;
      padding: 10px;
      border-top: 1px solid #ddd;
    }
  
    tbody td:first-child {
      border-top: none; 
    }
  
 
    tbody td:before {
      content: attr(data-label);
      font-weight: bold;
      margin-right: 5px;
    }
  }
  </style>
  