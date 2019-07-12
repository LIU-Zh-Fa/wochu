<template>
  <div class="type">
    分类
  </div>
</template>

<script>
export default {
    data(){
        return{
            parentList:[],
            tjList:[],
            menuList:[]
        }
    },
    created(){
        this.$axios.get("/wochu//client/v1/goods/GetCategoryRecommendList").then((res)=>{
            this.parentList.unshift({menu:-1,name:'推荐',parentId:0});
            this.tjList = res.data.data;
        });
        this.$axios.get("/wochu/client/v1/goods/GetCategoryListByMenuId",{
            params:{
                parameters: {"menu":0}
            }
        }).then((res)=>{
            res.data.data.forEach((item) => {
                if(item.parentId === 0){
                    console.log(this.tjList)
                }
            });
            console.log(res.data.data);
        })
    }
}
</script>
