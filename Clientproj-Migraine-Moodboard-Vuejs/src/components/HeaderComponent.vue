<template>
  <div>
    <header>
      <h1><img src="../assets/Vyepti_logo.png" width="120" /> &nbsp; &nbsp; &nbsp; VYEPTI PATIENT ADVOCACY EVENT</h1>
    </header>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  props: {
    msg: String,
    logo:require('@/assets/Vyepti_logo.png'),
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  margin: 0;
  width: 100%;
  box-shadow: 0 6px 10px -10px rgba(0, 0, 0, 0.5);
  border-bottom: 1px solid #ccc;
  text-align: left;
  text-indent: 20px;
  padding: 10px 0;
}
h1 {
  
  color:#41748d;
  font-size:32px;
  font-weight: 800;
  
}

a {
  color: #42b983;
}
</style>
