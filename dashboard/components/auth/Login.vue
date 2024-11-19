<template>

  <main class="p-6 min-h-[90vh] flex justify-center items-center">

    <section class="flex   flex-col justify-start items-center border-[3px] border-accent p-5 md:w-[70%] lg:w-[40%] w-[90%]">
        <h1 class="text-center text-black  my-10 text-[20px] md:text-[30px]">Login</h1>
  
        <form 
          @submit.prevent="submitForm" 
          class="flex flex-col w-[90%]  items-center  mx-auto">

          <section class="relative mt-5 w-full">
            <input
              type="text"
              id="username"
              v-model="username"
              required
              class="peer bg-gray w-full border border-accent rounded-md p-3 placeholder-transparent focus:outline-none focus:border-blue-500"
              placeholder="Username"
            />

            <label
              for="username"
              :class="{
                  '-top-5 text-sm text-blue-500': username,
                  'absolute left-3 text-black transition-all duration-200 ease-out text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-focus:-top-5 peer-focus:left-3 peer-focus:text-sm peer-focus:text-blue-500': true
              }"
            >
              Username
            </label>
          </section>

        
          <section class="relative mt-8 w-full">
            <input
              type="email"
              id="email"
              v-model="email"
              required
              class="peer bg-gray w-full border border-accent rounded-md p-3 placeholder-transparent focus:outline-none focus:border-blue-500"
              placeholder="Email"
            />

            <label
              for="email"
              :class="{
                  '-top-5 text-sm text-blue-500': email,
                  'absolute text-black left-3 transition-all duration-200 ease-out text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-focus:-top-5 peer-focus:left-3 peer-focus:text-sm peer-focus:text-blue-500': true
              }"
            >
              Email
            </label>
          </section>
          


          <button 
          type="submit" 
          class="w-[200px] after:bg-[#d0a668] dark:after:bg-[#eda95b] dark:before:bg-[#eda95b]  before:bg-[#d0a668] mt-5 z-0 overflow-hidden text-white flex justify-center items-center bg-accent button-reverse p-3">
            <span class="text-white z-10">Submit</span>
          </button>


          <h1 
          v-if="message" 
          :class="{'bg-red-200': errorMessage,'p-5 text-black text-center mt-5 text-sm w-full':true}">
              {{ message }}
          </h1>


        </form>


     </section>

    </main>

  </template>
  

  <script setup>
  const username = ref('');
  const email = ref('');
  const errorMessage = ref(false);
  const formData = ref({});
  const message=ref('');
  let timeoutId;



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
            sessionStorage.setItem('token', token);
        }
        navigateTo('/home');  
        resetForm();
      }
    }catch (err) {
    console.error('Request failed:', err);
    }
  }
  
  
  const resetForm = () => {
  username.value = '';
  email.value = '';
  clearTimeout(timeoutId);
  };


  const submitForm= ()=>{  
    formData.value.username = username.value;
    formData.value.email = email.value;
    loginUser(formData.value);   
  }

  </script>
  