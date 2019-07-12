<template>
    <div class="foot">
        <router-link to="/home/first" active-class="active" tag="div">
            <div>
                <div class="icon"></div>
                <p>首页</p>
            </div>
        </router-link>
        <router-link to="/home/type" active-class="active" tag="div">
            <div>
                <div class="icon"></div>
                <p>分类</p>
            </div>
        </router-link>
        <router-link to="/home/cart" active-class="active" tag="div">
            <div>
                <div class="icon"></div>
                <p>购物车</p>  
            </div>
        </router-link>
        <router-link to="/home/my" active-class="active" tag="div">
            <div>
                <div class="icon"></div>
                <p>我的</p>
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped lang="less">
    .foot{
        display: flex;
        width: 100%;
        border-top: 1px solid #e5e5e5;
        padding: .08rem 0 .06rem;
        height: 100%;
        box-sizing: border-box;
        .active{
            div{
                color: #5d8640;
            }
            &:nth-child(1) .icon{
                background-image: url(../../assets/images/index_r.png);
            }
            &:nth-child(2) .icon{
                background-image: url(../../assets/images/shopping_r.png);
            }
            &:nth-child(3) .icon{
                background-image: url(../../assets/images/cart_r.png);
            }
            &:nth-child(4) .icon{
                background-image: url(../../assets/images/my_r.png);
            }
        }
        div{
            flex: 1;
            div{
                width: 100%;
                text-align: center;
                .icon{
                    height: .58rem;
                    width: .58rem;
                    margin: 0 auto;
                }
                
            }
            &:nth-child(1) .icon{
                background: url(../../assets/images/index_n.png) 0 0 no-repeat;
                background-size: 100% 100%;
            }
            &:nth-child(2) .icon{
                background: url(../../assets/images/shopping_n.png) 0 0 no-repeat;
                background-size: 100% 100%;
            }
            &:nth-child(3) .icon{
                background: url(../../assets/images/cart_n.png) 0 0 no-repeat;
                background-size: 100% 100%;
            }
            &:nth-child(4) .icon{
                background: url(../../assets/images/my_n.png) 0 0 no-repeat;
                background-size: 100% 100%;
            }
        }
    }
        
    
</style>

