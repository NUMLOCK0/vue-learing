<template>
    <div class="Show">
        <div class="everyshowlist" v-for="(item,index) in ListData" :key="index">

            <div class="left-list">
                {{item.typelist}}

            </div>
            <div class="right-list">
                <p>{{item.name}}</p>
                <p>执行人:{{item.people}}</p>
                <p>开始日期:{{item.startdata}}</p>
                <p>结束日期:{{item.enddata}}</p>

            </div>

        </div>
      

    </div>
</template>
<script>
export default {
    name:"Show",
    props:["ListData"],
    data(){
        return{
            searchStr:''

        }
    },
    created(){
        console.log(this.ListData)
    },
    computed:{

    }
    
}
</script>
<style lang="scss">
.everyshowlist{
    width: 100%;
    height: 3rem;
  
    margin-top: .5rem;
    border: 1px solid #ccc;
    .left-list{
        width: 40%;
        height: 100%;
       border: 1px solid #ccc;
        float: left;
        text-align: center;
        line-height: 3rem;
        font-size: 18px;
        
    }
     .right-list{
         width: 60%;
         height: 100%;
        
         float: left;
     }
}

</style>