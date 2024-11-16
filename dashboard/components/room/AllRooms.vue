<template>

    <main class="text-tableText mx-5 my-5 flex justify-center items-center container-fluid">

      <section class="w-full min-h-[84vh] shadow-2xl rounded border-borderGray border-[1px]">

        <table class="w-full table-fixed">

          <thead>

            <tr class="border-b-[1px] border-borderGray">

              <th class="p-3 text-left">Room Name</th>
              <th class="p-3 text-left">Description</th>
              <th class="p-3 text-left">Capacity</th>
              <th class="p-3 text-left">Price</th>
              <th class="p-3 text-left">Actions</th>

            </tr>
            
          </thead>
  

          <tbody>

            <tr 
             v-for="room in paginatedRooms" 
             :key="room.id" 
             class="hover:bg-rowHover hover:text-black border-b-[1px] border-borderGray cursor-pointer">

              <td class="p-3">{{ room.roomName }}</td>
              <td class="p-3">{{ room.description }}</td>
              <td class="p-3">{{ room.capacity }} persons</td>
              <td class="p-3">${{ room.price.toFixed(2) }}</td>
              <td class="p-3"></td>

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
  const search = ref("");
  const rooms = ref([]);
  const currentPage = ref(1);
  const roomsPerPage = 8;
  

  const fetchRooms = async () => {
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

  @media (max-width: 767px) {
    
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
  