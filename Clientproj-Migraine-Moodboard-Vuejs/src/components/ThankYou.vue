<template>
  <div class="thankYou">
    <h6>{{subheading}}</h6>
    <p>{{content}}</p>
    <button class="btn btn-primary">Stay in touch</button>
    <span class="shareLinks"><a href="" class="download" @click="downloadimg">Download</a>&nbsp; <a href="" class="fb-share" @click="fbsharing">Facebook</a></span>
    <ShareNetwork
    network="facebook"
    :url="sharing.url"
    title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
    description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
    quote="I’m never sure that people truly understand when I describe what my experience is like with and without migraine. Now I can actually showthem. #MigraineMoods"
    hashtags="vuejs,vite"
    :media="sharing.image"
  >
    Share on Facebook
</ShareNetwork>
  </div>
</template>

<script>
export default {
  name: "ThankYou",
  props: {
    subheading: String,
    content: String,
    metashare:String,
    //thisurl:window.location.pathname
  },
  data() {
    //var self=this;
    return {
      sharing:{
       url:'http://vyepti.com',
       image:this.metashare
    }
      
    };
  },
  methods: {
    downloadimg(e) {
        e.preventDefault();

      //var cCode = e.currentTarget.getAttribute("data_id");
      //console.log("clikc" + e.currentTarget.getAttribute("data_id"));
      this.$emit("download-img", { download: true });
    },
    fbsharing(e) {
        e.preventDefault();

      //var cCode = e.currentTarget.getAttribute("data_id");
      //console.log("clikc" + e.currentTarget.getAttribute("data_id"));
      this.$emit("fb-share", { fbshare: true });
    }

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.thankYou{
  min-height: 400px;
    padding-top: 150px;
}
h6 {
  text-align: center;
  padding: 20px;
  line-height: 30px;;
}
.shareLinks{
    display:block;
    padding:10px;
    margin-top:50px;  
}
.shareLinks a{
    text-decoration: none;
    font-size:14px;
    font-weight: 800;
}
</style>
