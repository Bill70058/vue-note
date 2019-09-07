<template>
  <div id="app">
    <div class="outNode">
      <div class="topNode">
        <div class="left" @click="leftCl" @mousedown.prevent v-show="index>=1?true:false">←</div>
        <div class="right" @click="rightCl"  @mousedown.prevent>→</div>
        <div class="moveDiv">
          <ul :style="{left:index*-800+'px'}">
            <li v-for="(value,key) in img" :key="key" >
              <img :src="value">  
              </li>
          </ul>
        </div>
        <div class="textDiv">
          <span class="text">{{ msg[index] }}</span>
        </div>
      </div>
      <div class="buttonNode">
        <ol :style="{left:index>=4?(index-3)*-200+'px':0}">
          <li v-for="(value,key) in img" :key="key" :class="key==index?'active':''" @click="equal(key)" >
            <img :src="value" >
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      //之所以把图片放在src文件外部是因为最终显示的是index.html 文件，而App.vue 文件是打包前编译的文件
      img:['../img/1.jpg','../img/2.jpg','../img/3.jpg','../img/4.jpg','../img/5.jpg','../img/6.jpg'],
      msg: ['图片1','图片2','图片3','图片4','图片5','图片6'],
      index:0
    }
  },
  methods: {
    equal(key){
      this.index = key;
    },
    leftCl(){
      this.index--;
      if(this.index <= -1){
        this.index = this.img.length-1;
      }
    },
    rightCl(){
      this.index++; 
      if(this.index >= this.img.length){
        this.index=0;
      }
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding:0;
  list-style: none;
}
.outNode{
  height: 640px;
  width: 800px;
  border:1px solid black;
}
.topNode{
  width: 100%;
  height: 440px;
  float: left;
  overflow: hidden;
  position: relative;
}
.topNode .left{
  position: absolute;
  left: 0;
  top: 160px;
  z-index: 5;
  font-size: 60px;
  cursor: pointer;
}
.topNode .right{
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 160px;
  font-size: 60px;
  z-index: 5;
}
.topNode .moveDiv{
  width: 100%;
  height: 400px;
  float: left;
  position: relative;
}


.topNode .moveDiv > ul{
  width: 4800px;
  height: 400px;
  position: absolute;
  top: 0;
  left: 0;
  transition: .3s;
}
.topNode .moveDiv > ul > li {
  width: 800px;height: 100%; float: left;
}
.topNode .moveDiv > ul > li > img{
  width: 100%;height: 100%;
}


.topNode .textDiv{
  width: 100%;
  height: 40px;
  float: left;
  background: #90CAF9;
  line-height: 40px;
}
.textDiv .text{
  color: white;
  float: left;
}

.buttonNode{
  width: 100%;
  height: 200px;
  float: left;
  position: relative;
  overflow: hidden;
}
.buttonNode > ol{
  width: 1200px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: .3s;
}
.buttonNode > ol >li{
  width: 160px;
  height: 160px;
  border: 20px solid white;
  float: left;
  transition: .3s;
}
.buttonNode > ol >li.active{
  border-color:aqua;
}
.buttonNode > ol > li > img{
  width: 100%;
  height: 100%;
}
</style>
