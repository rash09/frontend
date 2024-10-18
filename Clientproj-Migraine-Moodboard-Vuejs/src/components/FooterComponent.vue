<template>
  <div>
    <footer>
      <p>© 2020 Lundbeck. All rights reserved. VYEPTI is a trademark of Lundbeck Seattle BioPharmaceuticals,</p><img src="../assets/Lundbeck_logo.png" width="120" /> 
    </footer>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
  props: {
    msg: String,
    logo:require('@/assets/Vyepti_logo.png'),
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
  margin: 0;
  width: 100%;
  border-top: 1px solid #ccc;
  text-align: left;
  text-indent: 20px;
  padding: 10px 0;
  bottom: 0;
   height: 100px;
   margin-top:150px;
}
p{
  color:#484848;
  font-size:13px;
  display:inline-block; 
}
footer img{
    float:right;
    margin-right:60px;
}

a {
  color: #42b983;
}
</style>
