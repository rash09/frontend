<template>
  <div class="migraineFree">
    <h4>{{heading}}</h4>
    
    <ul class="imageList">
      <li v-for="item in items" :key="item.url">
        <span
          v-bind:data_id="item.url"
          @click="sendMigraineFreeImg"
        ><img v-bind:src="item.url" /></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MigraineFree",
  props: {
    heading: String,
    subheading: String
  },
  data() {
    return {
      items: [
        { url: require('@/assets/set3/pic1.jpeg')},
        { url: require('@/assets/set3/pic2.jpeg')},
        { url: require('@/assets/set3/pic3.jpeg')},
        { url: require('@/assets/set3/pic4.jpeg')},
        { url: require('@/assets/set3/pic5.jpeg')},
        { url: require('@/assets/set3/pic6.jpeg')},
        { url: require('@/assets/set3/pic7.jpeg')},
        { url: require('@/assets/set3/pic8.jpeg')}
      ]
    };
  },
  methods: {
    sendMigraineFreeImg(e) {
      var cCode = e.currentTarget.getAttribute("data_id");
      //console.log("clikc" + e.currentTarget.getAttribute("data_id"));
      this.$emit("send-migraine-free-img", { url: cCode });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.migraineFree{
    margin-top:40px;
}
h3 {
  text-align: center;
  padding: 20px;
}
.imageList {
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
}
.imageList li {
  display: inline-flex;
  width: 45%;
  border: 1px solid #ccc;
  min-height: 100px;
  margin-right: 10px;
  margin-top: 10px;
}
.imageList li:nth-child(even) {
  margin-right: 0;
}
.imageList li span {
  display: block;
  width: 100%;
  height: 100px;
  cursor: pointer;
}
.imageList li span img{
    width:100%;
    height:100%
}
</style>
