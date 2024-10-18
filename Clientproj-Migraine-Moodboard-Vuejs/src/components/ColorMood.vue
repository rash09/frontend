<template>
  <div class="colorMood">
    <h4>{{heading}}</h4>
    <h6>{{subheading}}</h6>
    <ul class="colorPalette">
      <li v-for="item in items" :key="item.backgroundColor">
        <span
          :style="{ backgroundColor: item.backgroundColor }"
          v-bind:data_id="item.backgroundColor"
          @click="sendColorCode"
        ></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ColorMood",
  props: {
    heading: String,
    subheading: String
  },
  data() {
    return {
      items: [
        { backgroundColor: "#F5B7B1" },
        { backgroundColor: "#D7BDE2" },
        { backgroundColor: "#A9CCE3" },
        { backgroundColor: "#A3E4D7" },
        { backgroundColor: "#F7DC6F" },
        { backgroundColor: "#F0B27A" },
        { backgroundColor: "#E59866" },
        { backgroundColor: "#A9DFBF" }
      ]
    };
  },
  methods: {
    sendColorCode(e) {
      var cCode = e.currentTarget.getAttribute("data_id");
      this.$emit("send-color-code", { colorCode: cCode });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.colorMood{
    margin-top:40px;
}
h3 {
  text-align: center;
}
.colorPalette {
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
}
.colorPalette li {
  display: inline-flex;
  width: 45%;
  border: 1px solid #ccc;
  min-height: 100px;
  margin-right: 10px;
  margin-top: 10px;
}
.colorPalette li:nth-child(even) {
  margin-right: 0;
}
.colorPalette li span {
  display: block;
  width: 100%;
  height: 100px;
  cursor: pointer;
}
</style>
