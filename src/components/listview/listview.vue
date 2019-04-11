<template>
  <scroll :data="initData" class="listview">
    <ul >
      <li v-for="(item,index) in initData" :key="index" >
        <h2 class="h2">{{item.title}}</h2>
        <p class="p" v-for="(pitem,index) in item.list" :key="index">{{pitem}}</p>
      </li>
    </ul>
    <ul class="fixed-list">
      <li class="fixed-li" v-for="(item,index) in initData" :key="index">{{item.title}}</li>
    </ul>
  </scroll>
</template>

<script>
  import Scroll from 'base/scroll/scroll'
  const LEN = 12
  export default {
    data(){
      return{
        initData:''
      }
    },
    created(){
      this._initData()
    
    },
    methods:{
      onShortcutTouchStart(e){

      },
      onShortcutTouchMove(e){

      },
      _initData(){
        var initData = []
        for(var i = 1 ;i<LEN;i++){
          initData.push({
            title:i,
            list:[]
            })
            for(var k=0;k<i;k++){
              initData[i-1].list.push(k)
            }
        }
        console.log(initData)
        this.initData = initData
          console.log(this.initData)
      }
    },
    components:{
      Scroll
    }
  }
</script>

<style scoped>
  .listview{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .h2{
    background: orange;
  }
  .p{
    height: 50px;
    border-bottom: 1px solid black;
  }
  .fixed-list{
    position: absolute;
    z-index: 30;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    padding: 20px 0;
    border-radius: 10px;
    text-align: center;
    background: palegreen;
  }
  .fixed-li{
    font-size: 12px;
    padding: 3px 0;
  }
</style>