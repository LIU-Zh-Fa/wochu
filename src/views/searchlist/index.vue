<template>
    <div class="searchlist">
        <div class="header">
            <div class="serach_view">
                <div class="back" @click="goBack()">
                    <img src="http://wmall.wochu.cn/h5/classify/img/back.png?v=7c8bfcd628" alt="">
                </div>
                <div class="search_ctl">
                    <img src="http://wmall.wochu.cn/h5/classify/img/search-icon.png" alt="">
                    <input ref="search" type="text" @keyup.enter="goSearchList()">
                </div>
                <div class="search_btn">
                    <img src="http://wmall.wochu.cn/h5/classify/img/cart.png?v=1a30f75f80">
                </div>
            </div>
        </div>
        <div class="searchstr">我厨为您找到“{{searchstr}}”的相关结果{{goodCount}}个</div>
        <ul class="good_list"
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="0"
        >
            <li v-for="(item,index) in goodlist" :key="index" @click="goDetail(item.goodsGuid)">
                <div class="info_left">
                    <img :src="item.picUrl">
                </div>
                <div class="info_right">
                    <h3>{{item.goodsName}}</h3>
                    <p class="desc">{{item.description}}</p>
                    <p class="mark">
                        <span v-for="(mark,index) in item.goodsAttributeImg" :key="index">{{mark===1?'免洗':'免切'}}</span>
                    </p>
                    <p class="price"><span>￥{{item.price}}</span><span v-show="item.price !== item.marketPrice">￥{{item.marketPrice}}</span></p>
                    <div class="add">
                        <img src="http://wmall.wochu.cn/h5/hotlist/img/icon-listcart-75@3x.png?v=24d2b0ab1a">
                    </div>
                </div>
            </li>
            <div class="more" v-if="pageIndex === pageCount || pageCount === 0">没有更多了~</div>
            <div class="more" v-else>下拉加载更多~</div>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            searchstr:'',
            goodlist:[],
            pageIndex: 0,
            pageCount: '',
            loading: false,
            goodCount:''
        }
    },
    created(){
        this.searchstr = this.$route.params.str;
    },
    watch:{
        $route:{
            handler(nVal){
                this.searchstr = nVal.params.str;
                this.goodlist = [];
                this.pageIndex =  0;
                this.pageCount =  '';
                this.goodCount = '';
                this.getData();
            },
            deep:true,
            immediate:true
        }
    },
    methods: {
        goSearchList(str){
            if(!str){
                str = this.$refs.search.value;
            }
            if(!str) return;
            this.$refs.search.value = "";
            this.$router.push("/searchlist/"+str);
        },
        loadMore(){
            this.getData()
        },
        getData(){
            if(this.pageIndex === this.pageCount || this.pageCount === 0)return;
            this.pageIndex++;
            this.loading = true;
            this.$axios.get("/wochu/api/goods/searchbykeyword",{
                params:{
                    orderId: 0,
                    pageIndex: this.pageIndex,
                    pageSize: 20,
                    keyword: this.searchstr,
                }
            }).then((res)=>{
                this.goodlist = this.goodlist.concat(res.data.data.items);
                this.pageCount = Math.ceil(res.data.data.pagination.totalCount/20);
                this.goodCount = res.data.data.pagination.totalCount;
                this.loading = false;
            });
            
        },
        goBack(){
            this.$router.go(-1);
        },
        goDetail(goodid){
            this.$router.push("/detail/"+goodid);
        }
    }
}
</script>
<style lang="less" scoped>
    .searchlist{
        height: 100%;
        .header{
            position: fixed;
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
                    img{
                        width: .58rem;
                    }
                }
            }
        }
        .searchstr{
            margin-top: .88rem;
            width: 100%;
            height: .7rem;
            line-height: .7rem;
            text-align: center;
            color: #666;
        }
        ul{
            height: calc(100% - .9rem);
            overflow: auto;
            li{
                width: 100%;
                height: 2.92rem;
                padding: .4rem .24rem .32rem;
                border-bottom: .01rem solid #e5e5e5;
                box-sizing: border-box;
                .info_left{
                    float:left;
                    width: 2.2rem;
                    height: 2.2rem;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .info_right{
                    margin-left: .2rem;
                    float: right;
                    width: 4.6rem;
                    height: 100%;
                    position: relative;
                    h3{
                        width: 100%;
                        line-height: .42rem;
                        font-size: 15px;
                        font-weight: 600;
                        overflow: hidden;
                        margin-bottom: .1rem;
                        color: #666;
                        text-overflow: ellipsis;
                        letter-spacing: .02rem;
                        white-space: nowrap;
                    }
                    .desc{
                        width: 100%;
                        height: .34rem;
                        line-height: .32rem;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        margin-bottom: .18rem;
                        white-space: nowrap;
                        color: #666;
                    }
                    .mark{
                        overflow: hidden;
                        width: 2.1rem;
                        height: .4rem;
                        margin-bottom: .04rem;
                        span{
                            display: inline-block;
                            width: .6rem;
                            height: .4rem;
                            color: #6eb042;
                            font-size: 11px;
                            border: .01rem solid #6eb042;
                            border-radius: .12rem;
                            text-align: center;
                            line-height: .36rem;
                            margin-right: .1rem;
                            box-sizing: border-box;
                        }
                    }
                    .price{
                        span{
                            &:nth-child(1){
                                color: #ff5918;
                                margin-right: .2rem;
                                font-size: 16px;
                            }
                            &:nth-child(2){
                                text-decoration: line-through;
                                color: #ccc;
                            }
                        }
                    }
                    .add{
                        width: .52rem;
                        height: .52rem;
                        position: absolute;
                        right: 0;
                        bottom: 0rem;
                        img{
                            width: 100%;
                        }
                    }
                }
            }
            .more{
                color: #666;
                font-size: 14px;
                text-align: center;
                line-height: 1rem;
            }
        }
    }
</style>