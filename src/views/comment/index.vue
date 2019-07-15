<template>
    <div class="comment">
        <div class="top">
            <div class="title">
                <h3>评价</h3>
                <div class="back" @click="back()">
                    <img src="http://wmall.wochu.cn/h5/evaluate/css/images/back.gif">
                </div>
            </div>
            <ul>
                <li :class="{'active':commentFlag === ''}" @click="chengeFlag('',commentsCount)">全部评价<b>({{commentsCount}})</b></li>
                <li :class="{'active':commentFlag === '1'}" @click="chengeFlag('1',positiveCount)">好评<b>({{positiveCount}})</b></li>
                <li :class="{'active':commentFlag === '2'}" @click="chengeFlag('2',moderateCount)">中评<b>({{moderateCount}})</b></li>
                <li :class="{'active':commentFlag === '3'}" @click="chengeFlag('3',negativeCount)">差评<b>({{negativeCount}})</b></li>
                <li :class="{'active':commentFlag === '4'}" @click="chengeFlag('4',picCount)">带图<b>({{picCount}})</b></li>
            </ul>
        </div>
        <div class="commonent_list">
            <ul v-if="commentList.length > 0"
                v-infinite-scroll="loadMore"
                infinite-scroll-disabled="loading"
                infinite-scroll-distance="0"
            >
                <li v-for="(item,index) in commentList" :key="index">
                    <img :src="item.icon?item.icon:'http://wmall.wochu.cn/h5/evaluate/css/images/user.png'">
                    <span class="person">
                        <p>{{item.alias}}</p>
                        <span>
                            <img v-for="n in item.goodsSatisfyLevel" :key="'y'+n" src="http://wmall.wochu.cn/h5/evaluate/css/images/star_r.png">
                            <img v-for="ns in (5-item.goodsSatisfyLevel)" :key="'n'+ns" src="http://wmall.wochu.cn/h5/evaluate/css/images/star_n.png">
                        </span>
                    </span>
                    <span class="time">
                        <p>评论时间：{{formete(item.createTime)}}</p>
                        <p>下单时间：{{formete(item.orderCreateTime)}}</p>
                    </span>
                    <div class="word">
                        <p>{{item.goodsComment?item.goodsComment:'用户没有文字评价'}}</p>
                        <div class="imglist" v-if="item.goodsCommentPics.length > 0">
                            <img v-for="(items,index) in item.goodsCommentPics" :key="index" :src="items">
                        </div>
                        <div class="srvcomment" v-if="item.srvComment">
                            <h5>客服</h5>
                            <div>{{item.srvComment}}</div>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="nolist" v-else>
                <img src="http://wmall.wochu.cn/h5/evaluate/css/images/ic_no_goods.png">
                <p>该商品没有评价</p>
                <a>查看其它商品</a>
                <button>随便逛逛</button>
            </div>
        </div>
        <div class="bottom">
            <p class="car">
                <img src="http://wmall.wochu.cn/h5/evaluate/css/images/cart-icon.png">
                <span>0</span>
            </p>
            <div>加入购物车</div>
        </div>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
import { InfiniteScroll } from 'mint-ui';
export default {
    data(){
        return {
            goodsSn:'',
            pageIndex: 1,
            commentFlag: '',
            commentsCount: '',
            moderateCount: '',
            negativeCount: '',
            picCount: '',
            positiveCount: '',
            commentList: [],
            loading: false,
            length: ''
        }
    },
    methods:{
        loadMore(){
            this.pageIndex++;
            this.getData()
        },
        back(){
            this.$router.go(-1);
        },
        chengeFlag(flag,count){
            this.commentFlag = flag;
            this.pageIndex = 1;
            this.commentList =[];
            this.length = count;
            this.getData()
        },
        formete(d){
            var date = new Date(d * 1000);
            var Y = date.getFullYear() + '-';
            var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
            var D = (date.getDate() < 10 ? '0'+(date.getDate()) : date.getDate()) + ' ';
            var H = (date.getHours() < 10 ? '0'+(date.getHours()) : date.getHours()) + ':';
            var Mi = (date.getMinutes() < 10 ? '0'+(date.getMinutes()) : date.getMinutes()) + ':';
            var S = (date.getSeconds() < 10 ? '0'+(date.getSeconds()) : date.getSeconds());
            return Y+M+D+H+Mi+S;
        },
        getData(){
            if(this.pageIndex * 10 > this.length && this.length !== ''){
                Toast({
                    message: '没有更多了',
                    position: 'middle',
                    duration: 1000
                });
                return;
            }
            this.loading = true;
            this.$axios.get("/wochu/client/v1/satisfaction/goods/list",{
                params: {
                    parameters: {
                        "goodsSn":this.goodsSn,
                        "pageSize":10,
                        "pageIndex":this.pageIndex,
                        "memberId":"",
                        "commentFlag":this.commentFlag
                    }
                }
            }).then((res)=>{
                this.commentList = this.commentList.concat(res.data.data.items);
                this.commentsCount = res.data.data.commentCounts.commentsCount;
                this.moderateCount = res.data.data.commentCounts.moderateCount;
                this.negativeCount = res.data.data.commentCounts.negativeCount;
                this.picCount = res.data.data.commentCounts.picCount;
                this.positiveCount = res.data.data.commentCounts.positiveCount;
            });
            this.loading = false;
            
        }
    },
    created(){
        this.goodsSn = this.$route.params.goodssn;
        this.getData();
    }
}
</script>
<style lang="less" scoped>
    .comment{
        height: 100%;
        overflow: hidden;
        .top{
            height: 1.81rem;
            position: fixed;
            top: 0;
            left: 0;
            background: #fff;
            width: 100%;
            .title{
                height: .96rem;
                background: #fff;
                border-bottom: 0.02rem solid #e5e5e5;
                position: relative;
                h3{
                    font-size: 18px;
                    line-height: .96rem;
                    text-align: center;
                    font-weight: normal;
                }
                .back{
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: .8rem;
                    height: .96rem;
                    text-align: center;
                    line-height: .96rem;
                    img{
                        width: .16rem;
                    }
                }
            }
            ul{
                display: flex;
                justify-content: space-around;
                position: fixed;
                width: 100%;
                background: #fff;
                height: .87rem;
                border-bottom: .02rem solid #e5e5e5;
                li{
                    height: .87rem;
                    line-height: .87rem;
                    font-size: 13px;
                    box-sizing: border-box;
                    &.active{
                        border-bottom: .05rem solid #ef6100;
                    }
                }
            }
        }
        .commonent_list{
            margin-top: 1.81rem;
            margin-bottom: 1rem;
            height: calc(100% - 2.81rem);
            .nolist{
                width: 100%;
                text-align: center;
                padding-top: 1rem;
                img{
                    width: 30%;
                    margin-bottom: .15rem;
                    margin-top: .5rem;
                }
                p{
                    font-size: 20px;
                }
                a{
                    font-size: 15px;
                    display: block;
                }
                button{
                    background: #fff;
                    border: 0.01rem solid #f47d31;
                    color: #f47d31;
                    font-weight: bold;
                    padding: 0.1rem 0.6rem;
                    font-size: 15px;
                    line-height: .5rem;
                    margin-top: .5rem;
                }
            }
            ul{
                height: 100%;
                overflow: auto;
                // padding-bottom: .2rem;
                // box-sizing: border-box;
                li{
                    min-height: 2rem;
                    padding: .35rem .3rem;
                    border-top: .02rem solid #ccc9c9;
                    box-sizing: border-box;
                    >img{
                        width: .45rem;
                        vertical-align: top;
                        top: -0.1rem;
                    }
                    .person{
                        margin-left: .15rem;
                        display: inline-block;
                        overflow: hidden;
                        width: 2rem;
                        height: .8rem;
                        p{
                            display: inline-block;
                            width: 100%;
                            font-size: 13px;
                            font-weight: bold;
                            color: #333;
                            height: .3rem;
                            line-height: .3rem;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }
                        span{
                            display: inline-block;
                            height: .5rem;
                            img{
                                width: .22rem;
                                top: .1rem;
                            }
                        }
                    }
                    .time{
                        float: right;
                        p{
                            color: #999;
                            font-size: 13px;
                        }
                    }
                    .word{
                        width: 91%;
                        margin-left: 10%;
                        p{
                            margin-top: .25rem;
                            font-size: 13px;
                            color: #999;
                        }
                        .imglist{
                            vertical-align: middle;
                            margin-top: .2rem;
                            img{
                                width: 1.3rem;
                                margin-right: .2rem;
                                margin-bottom: .3rem;
                                vertical-align: top;
                            }
                        }
                        .srvcomment{
                            border-top: 0.02rem solid #e6e6e6;
                            padding-top: .3rem;
                            overflow: hidden;
                            margin-top: .15rem;
                            box-sizing: border-box;
                            h5{
                                color: black;
                                font-size: 13px;
                            }
                            div{
                                margin-top: .2rem;
                                font-size: .26rem;
                                color: #999;
                            }
                        }
                    }
                }
            }
        }
        .bottom{
            position: fixed;
            bottom: 0;
            left: 0;
            height: .98rem;
            width: 100%;
            z-index: 10;
            background-color: #fff;
            border-top: 0.02rem solid #e5e5e5;
            .car{
                float: left;
                margin-left: .32rem;
                height: 1rem;
                line-height: 1rem;
                position: relative;
                img{
                    width: .65rem;
                }
                span{
                    position: absolute;
                    display: inline-block;
                    width: .32rem;
                    height: .32rem;
                    border-radius: 50%;
                    font-size: .26rem;
                    background-color: #ff0000;
                    color: #fff;
                    text-align: center;
                    line-height: .32rem;
                    left: .45rem;
                    top: .18rem;
                }
            }
            div{
                text-align: center;
                line-height: .72rem;
                background-color: #f47d31;
                color: #fff;
                float: right;
                margin-top: .14rem;
                font-size: 16px;
                width: 2.98rem;
                height: .72rem;
                border-bottom: 0.02rem solid #ff7805;
            }
        }
    }
</style>