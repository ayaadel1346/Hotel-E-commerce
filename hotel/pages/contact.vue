<template>
    <keep-alive>
       <div>
        <ContactsTopSection/>
        <div id="form">
            <ContactsFormSection/>
        </div>
        <FooterMainFooter/>
       </div>
   </keep-alive>
</template>

<script setup>
useHead({
  title: 'Hotera-contact Us',
})
</script>
