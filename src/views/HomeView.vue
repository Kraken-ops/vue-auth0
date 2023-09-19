<template>
  <div>
    <h1 class="text">Home Component</h1>
    <div class="text">
      <!-- <input type="text" v-model="value" /> <br><br>
      <p>Value : {{ value }}</p> -->

      <input type="text" placeholder="Input" :value='modelValue' @input='$emit("update:modelValue",$event.target.value)' />
      <p>Value : {{ modelValue }}</p>
    </div>
    
  </div>
  
</template>

<script>
  

  export default {
    name: 'home',

    components: {
      
    },
    props: {
      modelValue: {
        type: String,
        default: ""
      },
    },
    data() {
      return {
        value: "Hello"
      }
    },
  }
</script>
<style>
.text{
  
    justify-content: center;
    display: flex;
    margin-top: 17px;
}
</style>