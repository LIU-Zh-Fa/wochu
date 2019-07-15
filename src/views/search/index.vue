<template>
    <div class="search">
        <div class="header">
            <div class="serach_view">
                <div class="back" @click="goBack()">
                    <img src="http://wmall.wochu.cn/h5/classify/img/back.png?v=7c8bfcd628" alt="">
                </div>
                <div class="search_ctl">
                    <img src="http://wmall.wochu.cn/h5/classify/img/search-icon.png" alt="">
                    <input ref="search" type="text" @keyup.enter="goSearchList()">
                </div>
                <div class="search_btn" @click="goSearchList()">搜索</div>
            </div>
        </div>
        <div class="wapper">
            <div class="scroller">
                <div class="hot-search">
                    <p>热门搜索</p>
                    <ul>
                        <li v-for="(item,index) in list" :key="index" @click="goSearchList(item.name)">{{item.name}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            list:[]
        }
    },
    created(){
        this.$axios.get("/wochu/client/v1/goods/SearchByTag").then((res)=>{
            this.list = res.data.data;
        })
    },
    methods: {
        goSearchList(str){
            if(!str){
                str = this.$refs.search.value;
            }
            if(!str) return;
            this.$router.push("/searchlist/"+str);
        },
        goBack(){
            this.$router.go(-1);
        }
    }
}
</script>
<style lang="less" scoped>
    .search{
        .header{
            position: absolute;
            width: 100%;
            height: .88rem;
            top: 0;
            left: 0;
            padding: 0;
            margin: 0;
            border-bottom: 1px solid #e5e5e5;
            z-index: 1;
            background: #fff;
            .serach_view{
                width: 7.1rem;
                height: .58rem;
                margin: .15rem .2rem;
                line-height: .58rem;
                font-size: 15px;
                color: #333;
                .back{
                    height: 100%;
                    width: .8rem;
                    float: left;
                    img{
                        width: .58rem;
                    }
                }
                .search_ctl{
                    width: 5.5rem;
                    height: .58rem;
                    background: #f1f2f6;
                    border-radius: .28rem;
                    float: left;
                    img{
                        width: .58rem;
                        height: .58rem;
                        float: left;
                    }
                    input{
                        width: 4.64rem;
                        height: .58rem;
                        padding: 0;
                        float: left;
                        background: #f1f2f6;
                        border: 0;
                        outline: none;
                    }
                }
                .search_btn{
                    float: right;
                    text-align: right;
                    height: 100%;
                    width: .8rem;
                }
            }
        }
        .wapper{
            position: absolute;
            top: .88rem;
            bottom: 0;
            width: 100%;
            padding: 0 .2rem;
            overflow: hidden;
            background: #fff;
            box-sizing: border-box;
            .scroller{
                padding-bottom: .4rem;
                .hot-search{
                    p{
                        color: #333;
                        margin-top: .2rem;
                        font-size: 15px;
                    }
                    ul{
                        background: #f4f5f7;
                        width: 100%;
                        height: auto;
                        font-size: 13px;
                        color: #666;
                        overflow: hidden;
                        li{
                            background: #fff;
                            width: auto;
                            line-height: .5rem;
                            margin: .2rem;
                            padding: .04rem .2rem;
                            float: left;
                        }
                    }
                }
            }
        }
    }
</style>