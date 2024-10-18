<template>
  <div id="app">
    <div class="container-fuid">
      <div class="row">
        <div class="col-lg-12">
          <header-component />
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <ColorMood
            heading="Select color mood"
            subheading="Subheading"
            @send-color-code="setCode"
            v-show="getNumber==1"
          />
          <MigraineFeel
            heading="Select image that reflects how you feel when you're having a migraine"
            @send-migraine-feel-img="setFeelUrl"
            v-show="getNumber==2"
          />
          <MigraineExperience
            heading="Select a quote that reflects how you feel when experiencing migraine"
            @send-migraine-exp-img="setExpUrl"
            v-show="getNumber==3"
          />
          <MigraineFree
            heading="Select an image that reflects how you feel when you're free of migraine"
            @send-migraine-free-img="setFreeUrl"
            v-show="getNumber==4"
          />
          <MigraineQuote
            heading="Select a quote that reflects how you feel when you're free of migraine"
            @send-migraine-quote-img="setQuoteUrl"
            v-show="getNumber==5"
          />
          <MigraineLast
            heading="Select an image or quote that relfects how you feel when you're free of migraine"
            @send-migraine-last-img="setLastUrl"
            v-show="getNumber==6"
          />
          <ThankYou
            content="Link to VYEPTI/Signup"
            subheading="Thank you for taking the time to create this moldboard, feel free to share it and tag #migrainemoods"
            v-show="getNumber==7"
            @download-img="downloadImg"
            @fb-share="fbsharing"
            :metashare="metaimages.ogimage"
          />
        </div>
        <div class="col-lg-9">
          <progress-bar :steps="stepsNumber" :key="stepsNumber" @get-steps="getSteps" />

          <board
            v-bind:images="[backColor, block1Image, block2Image, block3Image, block4Image, block5Image, highlightCount]"
          />
        </div>
      </div>
    </div>
    <div class="container-fuid">
      <div class="row">
        <div class="col-lg-12">
          <footer-component />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import htmlToImage from "html-to-image";
import download from "downloadjs";
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import ColorMood from "./components/ColorMood.vue";
import Board from "./components/Board.vue";
import ProgressBar from "./components/ProgessBar.vue";
import MigraineFeel from "./components/MigraineFeel.vue";
import MigraineExperience from "./components/MigraineExperience.vue";
import MigraineFree from "./components/MigraineFree.vue";
import MigraineQuote from "./components/MigraineQuote.vue";
import MigraineLast from "./components/MigraineLast.vue";
import ThankYou from "./components/ThankYou.vue";



export default {
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent,
    ColorMood,
    Board,
    ProgressBar,
    MigraineFeel,
    MigraineExperience,
    MigraineFree,
    MigraineQuote,
    MigraineLast,
    ThankYou
  },
  data() {
    //var self=this;
    return {
      stepsNumber: 1,
      getNumber: 1,
      backColor: "",
      json: "",
      block1Image: "",
      block2Image: "",
      block3Image: "",
      block4Image: "",
      block5Image: "",
      download: false,
      highlightCount: 1,
      metaimages:{
        ogimage:''
      },
      fbshare:false,
      metaData:this.metaInfo
    };
  },
   metaInfo() {
    // var self=this;
     return{
    title: 'Migraine Moods | Lundbeck',
    titleTemplate: '%s | vue-meta Example App',
    htmlAttrs: {
      reptilian: 'gator'
    },
    headAttrs: {
      nest: 'eggs'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'Create a unique mood board that evokes the complex experience of migraine, before, during, and after one strikes' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property:'og:image', content: 'http://localhost:8080/assets/moodlogo.png' },
      { property:'og:title', content: 'Migraine Moods | Lundbeck' }
    ]
  }
   },
  methods: {
    // Define method that will use the payload to update the data property
    setCode(payload) {
      this.backColor = payload.colorCode;
    },
    setFeelUrl(payload) {
      this.block5Image = payload.url;
    },
    setExpUrl(payload) {
      this.block4Image = payload.url;
    },
    setFreeUrl(payload) {
      this.block3Image = payload.url;
    },
    setQuoteUrl(payload) {
      this.block2Image = payload.url;
    },
    setLastUrl(payload) {
      this.block1Image = payload.url;
    },
    getSteps(payload) {
      this.getNumber = payload.num;
      this.highlightCount = payload.num;
    },
    downloadImg(payload) {
      this.download = payload.download;
      if (this.download) {
        var node = document.getElementById("moodBoard");
        htmlToImage
          .toPng(node)
          .then(function(dataUrl) {
            console.log(dataUrl);
            /*console.log('success');
          var img = new Image();
          img.src = dataUrl;
          document.body.appendChild(img);*/
            download(dataUrl, "my-node.png");
          })
          .catch(function(error) {
            console.error("oops, something went wrong!", error);
          });
      }
    },
    fbsharing:function(payload){
      this.fbshare = payload.fbshare;
      var self=this;
      if (this.fbshare) {
       var node = document.getElementById("moodBoard");
        htmlToImage
          .toPng(node)
          .then(function(dataUrl) {
            console.log(dataUrl);
        //console.log(self.fbshare);
            self.metaimages.ogimage=dataUrl;
            //this.metaInfo();
            //document.querySelector('meta[name="description"]').setAttribute("content", _desc);
            //var img = new Image();
            /*console.log('success');
          var img = new Image();
          img.src = dataUrl;
          document.body.appendChild(img);*/
            //download(dataUrl, "my-node.png");
          })
          .catch(function(error) {
            console.error("oops, something went wrong!", error);
          });
          }

    }
  }
};
</script>

<style lang="less">
@import 'https://use.typekit.net/kya0rtt.css';
@import './assets/less/main.less';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}
.moodBoard {
  width: 620px;
  height: 430px;
  border: 1px solid #ccc;
  margin: 0 auto;
  margin-top: 120px;
}
</style>
