<template>
    <keep-alive>
        <div>
            <AboutTopSection/>
            <div id="services">
                <AboutServicesSection/>
            </div>
            <FooterMainFooter/>
        </div>
    </keep-alive>
</template>


<script setup>
useHead({
  title: 'Hotera-about',
})
</script>
