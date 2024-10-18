<template>
 <div class="moodBoard"  >
    <div class="masonry" id="moodBoard" v-bind:style="{ backgroundColor: images[0]}">
      <div class="item" v-bind:class="{ 'indicate' : images[1]==='' && images[6] === 6}"><img v-bind:src="images[1]" v-show="images[1]!==''"/></div>
      <div class="item" v-bind:class="{ 'indicate' : images[2]==='' && images[6] === 5}"><p class="quote">{{images[2]}}</p><!--<img v-bind:src="images[2]" v-show="images[2]!==''"/>--></div>
      <div class="item" v-bind:class="{ 'indicate' : images[3]==='' && images[6] === 4}"><img v-bind:src="images[3]" v-show="images[3]!==''"/></div>
      <div class="item">
        <div class="item-sub" v-bind:class="{ 'indicate' : images[4]==='' && images[6] === 3}"><img v-bind:src="images[4]" v-show="images[4]!==''"/></div>
        <div class="item-sub" v-bind:class="{ 'indicate' : images[5]==='' && images[6] === 2}"><img v-bind:src="images[5]" v-show="images[5]!==''"/></div>
      </div>
    </div>
    
</div>
</template>

<script>
//import card from './components/card.vue';

export default {
  name: "Board",
  props: ['images'],
  data() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.moodBoard {
  width: 620px;
  height: 430px;
  border: 2px solid #41748d;
  margin: 0 auto;
  margin-top: 120px;
}
.masonry {
  /* Masonry container */
  column-count: 4;
  column-gap: 230px;
}

.item {
  /* Masonry bricks or child elements */
  display: inline-block;
  margin: 0 0 1em;
  width: 200px;
  
}
.item:nth-of-type(1) {
  height: 200px;
  margin-top: 30px;
  border: 1px solid #ccc;
  margin-left:20px;
  background-color: #fff;

}
.item:nth-of-type(2) {
  height: 150px;
  border: 1px solid #ccc;
  margin-left:20px;
  background-color: #fff;
}
.item:nth-of-type(3) {
  width: 350px;
  height: 250px;
  margin-top: 20px;
  border: 1px solid #ccc;
  background-color: #fff;
}
.item:nth-of-type(4) {
  height: 100px;
  width: 350px;
  text-align: left;
}

.item-sub {
  display: inline-flex;
  flex-direction: row;
  height: 120px;
  width: 200px;
  border: 1px solid #ccc;
  background-color: #fff;
}
.item-sub:nth-of-type(2) {
  margin-left: 10px;
  width: 140px;
  border: 1px solid #ccc;
  background-color: #fff;
}
.item-sub img, .item img{
  width:100%;
  height: 100%;
}
.indicate{
  border:2px solid #E9151C!important ;
  background-color: #F5DCDD!important ;  
}
.quote{
  text-align:center;
  font-size:14px;
  font-weight: 800;
  line-height: 80px;
}
</style>
