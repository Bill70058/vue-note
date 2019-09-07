<template>
    <input type="button" v-for="i in inputValue" :value='i' :class="index==$index?'active':''" @click="index=$index">
    <div class="myDiv" v-for="i in divInner" v-show="index==$index?true:false" >{{i}}</div>
</template>

<script>
export default {
  data () {
    return {
      inputValue:['1','2','3'],
      divInner:['今天没面试','今天有面试','今天面试通过了'],
      index:0,
      seg:null,
    }
  },
  ready(){
    //将绑定在这个变量的interval事件解除绑定
    clearInterval(this.set);

    this.set=setInterval(() => {
      this.index++;
      //如果变量index 的值等于inputvalue数组的长度的时候就将变量index赋予0
      if(this.index==this.inputValue.length)this.index=0;
    }, 1000);
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
input.active{
  background: orange;
}
.myDiv{
  background: gray;
  width: 200px;
  height: 200px;
}


</style>
