<template>
  <div class="Nav">
    <div class="NavList">
      <span v-for="(item,index) in   typedata" :key="index" @click="btnclick(item,index)" :class="{active:item.state}">{{item.typeof}}</span>
    </div>
    <div class="main">
      <div class="content">
        <div class="forsearch">
          <input type="text" placeholder="请输入工作名称进行咨询"  v-model="searchStr" />
        </div>
        <div class="formessage">
          <ForShow :ListData="arr"></ForShow>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ForShow from "./Show";
import { type } from "os";
export default {
  name: "Nav",
  components: {
    ForShow
  },
  data() {
    return {
      searchStr:'',
      typedata: [
        { typeof: "全部任务", state: true,   State:3 },
        { typeof: "进行任务", state: false ,  State:0},
        { typeof: "强制任务", state: false ,  State:1},
        { typeof: "已完成任务", state: false ,  State:2}
      ],

      list: [
        {
          name: "客户经理掌上宝测试",
          people: "周旭辉   赵红英   杨振华",
          startdata: "2013年4月03",
          enddata: "2013年5月03日",
          typelist: "进行中",
          State:0
        },
        {
          name: "   掌上宝产品资料整理",
          people: "陈雪梅",
          startdata: "2013年4月03",
          enddata: "2013年5月23日",
          typelist: "强制终止",
          State:1
        },
        {
          name: "移动新产品整理",
          people: "马建华",
          startdata: "2013年4月03",
          enddata: "2013年5月04日",
          typelist: "已完成",
          State:2
        }
      ],
      tabIndex:0,
      arr:[]
    };
  },
  computed:{
    

  },
  watch:{
    searchStr(){
      this.arr = this.list.filter(el=>{
        return el.typelist.match(this.searchStr)
      })
    }
  },
  methods:{
    searchData(){
      
      
    },
      btnclick(item,index){
        this.typedata[this.tabIndex].state=false;
        item.state=true;  // tab 高亮
        this.tabIndex=index;
        this.arr=[];
        this.list.map((val,indexs)=>{
          if(item.State==val.State){
            if(this.arr.indexOf(val)){
                this.arr.push(val);
                console.log(this.arr, '22222');
            }
          
          // }else if(item.State==val.State){
          //     if(this.arr.indexOf(val)){
          //       this.arr.push(val);
          //        console.log(this.arr);
          //   }

          // }else if(item.State==val.State){
          //     if(this.arr.indexOf(val)){
          //       this.arr.push(val);
          //        console.log(this.arr);
          //   }

          }
          else if(item.State==3){
            this.arr=this.list          
          }
        })


      }
  }
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
html,
body {
  width: 100%;
  height: 100%;
}
.Nav {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.NavList {
  width: 100%;
  height: 1rem;

  display: flex;
  span {
    flex: 1;
    text-align: center;
    line-height: 1rem;
    border: 1px solid #ccc;
  }
  .active{
     color: red;
  }
}
.main {
  flex: 1;
  .forsearch {
    width: 100%;
    height: 0.7rem;

    input {
      margin-left: 30%;
      margin-top: 0.2rem;
    }
  }
  .formessage {
    width: 100%;
    height: auto;
  }
  
}
</style>