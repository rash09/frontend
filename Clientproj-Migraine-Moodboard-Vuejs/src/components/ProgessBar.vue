<template>
  <div class="progressBar">
    <button class="btn btn-outline-primary" @click="backBtn()" v-show="isBackVisible()">Back</button>
    <div class="bar">
      <div class="barProgress" v-bind:style="{ width: stepCount+'px'}"></div>
      <div class="barBg"></div>
    </div>
    <!--<ul class="progressbar">
      <li class="step1" id="step1">Step 1</li>
      <li class="step2" id="step2">Step 2</li>
      <li class="step3" id="step3">Step 3</li>
      <li class="step4" id="step4">Step 4</li>
      <li class="step5" id="step5">Step 5</li>
    </ul>-->
    <button class="btn btn-outline-primary next-btn" @click="nextBtn()" v-show="isNextVisible()">Next</button>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: ["steps"],
  data() {
    return {
      stepCount: Number,
      stepsNum: Number,
      btns:{
          isBackVisible:true,
          isNextVisible:true

      }

    };
  },
  mounted: function() {
    //console.log("mounted");
  },
  created: function() {
    this.setSteps();
    this.$data.btns.isBackVisible=false;
    //console.log("created");
  },
  beforeUpdate() {
    //console.log("updated");
  },
  watch: {
    stepsNum: function(val) {
      if (val) {
        this.getStatus();
      }
    },
    isBackVisible:function(){
        this.isBackVisible();
    },
    isNextVisible:function(){
        this.isNextVisible();
    }
  },
  methods: {
    setSteps() {
      this.stepsNum = this.steps; //Props
    },
    getStatus() {
      this.stepCount = this.stepsNum * 75;
    },
    nextBtn() {
        //console.log('next-'+this.$data.btns.isNextVisible);
      if (this.stepsNum < 6) {
        this.stepsNum += 1;
        this.$data.btns.isNextVisible=true;
        this.$data.btns.isBackVisible=true;
        this.$emit("get-steps", { num: this.stepsNum });

      }else{
          this.$data.btns.isNextVisible=false;
           this.$emit("get-steps", { num: this.stepsNum+1 });
      }
      
    },
    backBtn() {
        //console.log('back-'+this.$data.btns.isBackVisible);
      if (this.stepsNum !== 1) {
        this.stepsNum -= 1;
        this.$data.btns.isBackVisible=true;
         this.$data.btns.isNextVisible=true;
         this.$emit("get-steps", { num: this.stepsNum });
      }else{
          this.$data.btns.isBackVisible=false
      }
     
    },
    isBackVisible() {
      return this.$data.btns.isBackVisible;
    },
    isNextVisible() {
      return this.$data.btns.isNextVisible;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.progressBar {
  margin: 30px auto;
  width: 600px;
  position: absolute;
  z-index: 1;
  left: 15%;
}
.bar {
  width: 450px;
  position: relative;
  left: 12%;
  margin-top: 6px;
}
.bar .barBg {
  position: absolute;
  border-radius: 15px;
  background-color: #bebebe;
  padding: 6px;
  width: 100%;
  left: 0;
}
.bar .barProgress {
  position: absolute;
  left: 0;
  border-radius: 15px;
  background-color: #ddd;
  padding: 6px;
  width: 90px;
  z-index: 10;
}
.btn {
  float: left;
}
.next-btn {
  float: right;
  margin-top: -10px;
}
.progressbar {
  counter-reset: step;
}
.progressbar li {
  float: left;
  width: 15%;
  position: relative;
  text-align: center;
  list-style: none;
  margin-left: 10px;
}
.progressbar li:before {
  content: counter(step);
  counter-increment: step;
  width: 30px;
  height: 30px;
  border: 2px solid #bebebe;
  display: block;
  margin: 0 auto 10px auto;
  border-radius: 50%;
  line-height: 27px;
  background: white;
  color: #bebebe;
  text-align: center;
  font-weight: bold;
}
.progressbar li:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  background: #979797;
  top: 15px;
  left: -50%;
  z-index: -1;
}
.progressbar li:first-child:after {
  content: none;
}
.progressbar li.active + li:after {
  background: #3aac5d;
}
.progressbar li.active + li:before {
  border-color: #3aac5d;
  background: #3aac5d;
  color: white;
}
</style>
