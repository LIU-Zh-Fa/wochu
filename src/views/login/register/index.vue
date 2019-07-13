<template> 
    <div class="register">
        <input type="text" placeholder="用户名" ref="name">
        <input type="password" placeholder="密码" class="pass" ref="password">
        <button class="btn" @click="login">注册</button>
    </div>
</template>
<script>

export default {
    methods: {
        login(e){
            // let OL_Action_Root='http://localhost:3000';
	        var e = e || window.event;
                  e.preventDefault();
                //添加新的食品信息
                console.log(this.$refs.name.value);
                console.log(this.$refs.password.value)
            let data={name:this.$refs.name.value,password:this.$refs.password.value};
            console.log(data);
	       if(this.$refs.name.value == "" || this.$refs.password.value == "" ) return false;	  
                this.$axios.post('/logins/admin/food/loginadd',data,{
                    "headers":{"Content-type":"application/json"}
                })
                .then((data) => {
                    console.log(data);
                }) 

        }
    },
    
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
