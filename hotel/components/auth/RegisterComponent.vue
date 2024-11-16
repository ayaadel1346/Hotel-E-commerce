<template>

    <main class="p-6">

      <h1 class="text-center text-white my-5 text-[20px] md:text-[30px]">
        Create Account
      </h1>
  
      <form 
       @submit.prevent="submitForm" 
       class="flex flex-col items-center w-full mx-auto">

        <section class="relative mt-5 w-full">
          <input
            type="text"
            id="username"
            v-model="username"
            @blur="validateUsername"
            required
            class="peer w-full border border-accent rounded-md p-3 placeholder-transparent focus:outline-none focus:border-blue-500"
            placeholder="Username"
          />
  
          <label
            for="username"
            :class="{
                '-top-5 text-sm text-white': username,
                'absolute left-3 transition-all duration-200 ease-out text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-focus:-top-5 peer-focus:left-3 peer-focus:text-sm peer-focus:text-white': true
            }"
          >
            Username
          </label>
  
          <span 
           v-if="errors.username" 
           class="text-red-500 text-sm">
            {{ errors.username }}
          </span>
        </section>
  
       
        <section class="relative mt-8 w-full">
          <input
            type="email"
            id="email"
            v-model="email"
            required
            class="peer w-full border border-accent rounded-md p-3 placeholder-transparent focus:outline-none focus:border-blue-500"
            placeholder="Email"
          />
  
          <label
            for="email"
            :class="{
                '-top-5 text-sm text-white': email,
                'absolute left-3 transition-all duration-200 ease-out text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-focus:-top-5 peer-focus:left-3 peer-focus:text-sm peer-focus:text-white': true
            }"
          >
            Email
          </label>
  
          <span 
           v-if="errors.email" 
           class="text-red-500 text-sm">
            {{ errors.email }}
          </span>
        </section>
        
  
        <section class="relative mt-8 w-full">
          <input
            type="text"
            id="phoneNumber"
            v-model="phoneNumber"
            @blur="validatePhoneNumber"
            required
            class="peer w-full border border-accent rounded-md p-3 placeholder-transparent focus:outline-none focus:border-blue-500"
            placeholder="Phone Number"
          />
  
          <label
            for="phoneNumber"
            :class="{
                '-top-5 text-sm text-white': phoneNumber,
                'absolute left-3 transition-all duration-200 ease-out text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-focus:-top-5 peer-focus:left-3 peer-focus:text-sm peer-focus:text-white': true
            }"
          >
            Phone Number
          </label>
  
          <span 
           v-if="errors.phoneNumber" 
           class="text-red-500 text-sm">
            {{ errors.phoneNumber }}
          </span>
        </section>
  

        <button 
         type="submit" 
         class="w-[200px] after:bg-[#d0a668]  before:bg-[#d0a668] mt-5 z-0 overflow-hidden text-white flex justify-center items-center bg-accent button-reverse p-3">
          <span class="text-white z-10">Submit</span>
        </button>

        

        <h1 
         v-if="message" 
         :class="{'bg-red-200': errorMessage,'p-5 text-black text-center mt-5 text-sm w-full':true}">
            {{ message }}
        </h1>

      </form>


      <div class="flex justify-center items-center">

        <button 
         @click="toggleIsRegistered"
         class="w-[200px] mt-10 text-white   reverse-lines-dark p-3">
          login
        </button>

     </div>

    </main>

  </template>
  

  <script setup>
  const username = ref('');
  const email = ref('');
  const phoneNumber = ref('');
  const formData = ref({});
  const errors = ref({});
  const message=ref('');
  const errorMessage = ref(false);
  const isRegistered= useState('isRegistered');
  let timeoutId;



const toggleIsRegistered=()=>{
  isRegistered.value=!isRegistered.value;
}


const registerReq = async (userData) => {
  try {
    const { data, error } = await useLazyAsyncData('registerData', () =>
      $fetch('http://localhost:5000/register', {
        method: 'POST',
        body: JSON.stringify(userData), 
        headers: {
          'Content-Type': 'application/json'
        }
      })
    );

    if (error.value) {
      message.value='An error occur please try again later';
      errorMessage.value = true;
      resetForm();
      timeoutId=setTimeout(()=>{message.value='';},6000)
    } else {
      message.value='Registered successfuly';
      errorMessage.value = false;
      resetForm();
      toggleIsRegistered();
    }
  } catch (err) {
    console.error('Request failed:', err);
  }
};


const resetForm = () => {
  username.value = '';
  email.value = '';
  phoneNumber.value = '';
  clearTimeout(timeoutId);
};


const validateUsername=() =>{
    errors.value.username = username.value.length >= 4 ? '' : 'Username must be at least 4 characters long.';
}
  

const validatePhoneNumber = ()=> {
    const phonePattern = /^[0-9]{10,15}$/;
    errors.value.phoneNumber = phonePattern.test(phoneNumber.value)
      ? ''
      : 'Phone number must be between 10 and 15 digits.';
}
  
  
const submitForm = () => {
    validateUsername();
    validatePhoneNumber();
  
    if (!errors.value.username && !errors.value.phoneNumber) {
      formData.value.username = username.value;
      formData.value.email = email.value;
      formData.value.phoneNumber = phoneNumber.value;
      registerReq(formData.value);
    }
}

  </script>
  