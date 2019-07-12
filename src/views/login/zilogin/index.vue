<template> 
    <div class="register">
        <input type="text" placeholder="用户名">
        <input type="password" placeholder="密码" class="pass">
        <button class="btn">登录</button>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.register{
    padding-left: 0.5rem;
     input{
        width: 90%;
        height: 1.1rem;
        font-size: .36rem;
        color: #132d01;
        font-weight: 500;
        outline: 0;
        border: none;
    }
    .pass{
        border-top: 1px solid rgb(211, 211, 211);
    }
    .btn{
        margin-top: .5rem;
        display: inline-block;
        width: 6.4rem;
        height: 1rem;
        font-size: .36rem;
        color: #fff;
        text-align: center;
        line-height: 1rem;
        border-radius: .2rem;
        background: #c3dcb3;
        margin-left: .01rem;
        outline: 0;
    }
}
   
</style>
