<template>
  <div class="type">
      <div class="top">
          <img src="http://wmall.wochu.cn/h5/classify/img/icon-search-40@2x.png">
          <div>支持首字母搜索</div>
      </div>
      <div class="fg"></div>
      <div class="menu">
          <ul class="menu_left">
              <li 
                v-for="(item,index) in parentList" 
                :key="index" 
                @click="changeMenu(item.id)"
                :class="{'on':item.id === meunId}"
            >{{item.name}}</li>
          </ul>
          <div class="menu_right">

          </div>
      </div>
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
            var obj = {checkicon: "",
                description: "",
                displayIndex: -1,
                id: -1,
                menu: 1,
                name: "推荐",
                parentId: 0,
                path: "/",
                uncheckicon: ""
            }
            this.parentList.unshift(obj);
            this.tjList = res.data.data;
        });
        this.$axios.get("/wochu/client/v1/goods/GetCategoryListByMenuId",{
            params:{
                parameters: {"menu":0}
            }
        }).then((res)=>{
            var list = res.data.data.sort((a,b) => {
                return a.parentId - b.parentId;
            });
            var parentId = ''
            list.forEach(item => {
                if(item.parentId != 0){
                    if(parentId !== item.parentId){
                        this.menuList.push({parentId:item.parentId,list:[]});
                        this.menuList[this.menuList.length -1 ].list.push(item);
                        parentId = item.parentId;
                    }else{
                        this.menuList[this.menuList.length -1 ].list.push(item);
                    }
                }else{
                    this.parentList.push(item);
                }
            });
        })
    }
}
</script>
<style scoped lang="less">
    .type{
        display: flex;
        flex-direction: column;
        height: 100%;
        .top{
            width: 7.1rem;
            height: .68rem;
            margin: .12rem .24rem;
            line-height: .62rem;
            border-radius: .12rem;
            padding: 0 .24rem;
            border: .01rem solid #ccc;
            overflow: hidden;
            box-sizing: border-box;
            img{
                width: .4rem;
                height: .4rem;
                float: left;
                margin-top: .14rem;
            }
            div{
                width: 6.12rem;
                height: .62rem;
                float: right;
                font-size: 14px;
                line-height: .68rem;
                color: #ccc;
            }
        }
        .fg{
            height: .22rem;
            background: #f4f5f7;
        }
        .menu{
            flex: 1;
            display: flex;
            .menu_left{
                width: 1.8rem;
                color: #666;
                font-size: 15px;
                height: 100%;
                overflow: auto;
                li{
                    box-sizing: border-box;
                    width: 100%;
                    height: 1rem;
                    padding: .26rem 0;
                    line-height: .6rem;
                    text-align: center;
                    font-size: 14px;
                    &.active{
                        color: #6eb042;
                        font-size: 16px;
                        height: 1.1rem;
                    }
                }
            }
            .menu_right{
                flex: 1;
                border-left: .01rem solid #e5e5e5;
                height: 100%;
                overflow: auto;
            }
        }
    }
</style>
