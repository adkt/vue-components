<style>
  .redText {
    color: red
  }
</style>

<template>
  <div class="redText">
    {{ message }}
  </div>
</template>

<script>
  module.exports = {
    data: function() {
      return {
        message: 'My Red Text'
      }
    }
  }
</script>