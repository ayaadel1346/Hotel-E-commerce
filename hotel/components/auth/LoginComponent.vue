<template>

    <main class="p-6">

      <h1 class="text-center my-10 text-[20px] md:text-[30px] text-white">Login</h1>
  
      <form 
       @submit.prevent="submitForm" 
       class="flex flex-col items-center w-full mx-auto">

        <section class="relative mt-5 w-full">
          <input
            type="text"
            id="password"
            v-model="password"
            required
            class="peer w-full border border-accent rounded-md p-3 placeholder-transparent focus:outline-none focus:border-blue-500"
            placeholder="Password"
          />
  
          <label
            for="password"
            :class="{
                '-top-5 text-sm text-blue-500': password,
                'absolute left-3 transition-all duration-200 ease-out text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-focus:-top-5 peer-focus:left-3 peer-focus:text-sm peer-focus:text-blue-500': true
            }"
          >
          Password
          </label>
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
                '-top-5 text-sm text-blue-500': email,
                'absolute left-3 transition-all duration-200 ease-out text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-focus:-top-5 peer-focus:left-3 peer-focus:text-sm peer-focus:text-blue-500': true
            }"
          >
            Email
          </label>
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
          Create Account
        </button>

     </div>

    </main>

  </template>
  

  <script setup>
  const password = ref('');
  const email = ref('');
  const errorMessage = ref(false);
  const formData = ref({});
  const message=ref('');
  const isRegistered= useState('isRegistered',()=>false);
  let timeoutId;


  const toggleIsRegistered=()=>{
  isRegistered.value=!isRegistered.value; 
 }


  const loginUser= async (userData)=>{
    try{
      const {data,error}=await useLazyAsyncData('login',()=>$fetch('http://localhost:5000/login',{
        method:'POST',
        body:JSON.stringify(userData),
        headers:{
          'Content-Type': 'application/json'
        }
      }))

      if(error.value){
        errorMessage.value=true;
        message.value=error.value.data.message;
        resetForm();
        timeoutId=setTimeout(()=>{message.value='';},6000)    
      }else{
        const token = data.value.token;
        if(token){
            localStorage.setItem('token',token)
        }
        navigateTo('/');  
        resetForm();
      }
    }catch (err) {
    console.error('Request failed:', err);
    }
  }
  
  
  const resetForm = () => {
  password.value = '';
  email.value = '';
  clearTimeout(timeoutId);
  };


  const submitForm= ()=>{  
    formData.value.password = password.value;
    formData.value.email = email.value;
    loginUser(formData.value);   
  }

  </script>
  