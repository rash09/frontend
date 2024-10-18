<template>
  <div class="migraineQuote">
    <h4>{{heading}}</h4>

    <ul class="imageList">
      <li v-for="item in items" :key="item.quote">
        <span v-bind:data_id="item.quote" @click="sendMigraineFreeImg">{{item.quote}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MigraineQuote",
  props: {
    heading: String,
    subheading: String
  },
  data() {
    return {
      items: [
        { quote: "Hello quote 1" },
        { quote: "Hello quote 2" },
        { quote: "Hello quote 3" },
        { quote: "Hello quote 4" },
        { quote: "Hello quote 5" },
        { quote: "Hello quote 6" },
        { quote: "Hello quote 7" },
        { quote: "Hello quote 8" }
      ]
      /*items: [
        { url: require('@/assets/airplane.png')},
        { url: require('@/assets/monarch.png')},
        { url: require('@/assets/tulips.png')},
        { url: require('@/assets/fruits.png')},
        { url: require('@/assets/pool.png')},
        { url: require('@/assets/watch.png')},
        { url: require('@/assets/girl.png')},
        { url: require('@/assets/peppers.png')}
      ]*/
    };
  },
  methods: {
    sendMigraineFreeImg(e) {
      var cCode = e.currentTarget.getAttribute("data_id");
      //console.log("clikc" + e.currentTarget.getAttribute("data_id"));
      this.$emit("send-migraine-quote-img", { url: cCode });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.migraineQuote {
  margin-top: 40px;
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
  text-align:center;
  font-size:14px;
  font-weight: 800;
  line-height: 100px;
}
.imageList li span img {
  width: 100%;
  height: 100%;
}
</style>
