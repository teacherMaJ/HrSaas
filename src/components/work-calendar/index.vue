<template>
   <div class="container">
        <button 
            class="btn"
            :class={}
        >
            <slot/>
        </button>
   </div>
</template>

<script>
export default {
    props:{
      type:{
          default:'primary'
      }
    }
}
</script>

<style scoped>
   .container .btn{
       display: inline-block;
       
       
   }

</style>