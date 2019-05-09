<template>
    <div class="tbody">
        <div class="layui-fluid login_contaner">
              <div class="layui-row content">
                  <div class="layui-col-sm7 left">
                      <div class="info">
                          <div class="logo">
                              <img src="../assets/img/login.png" alt="">
                          </div>
                      </div>
                      <h1 class="welcome">欢迎使用 若依 后台管理系统</h1>
                      <ul class="lists">
                        <li class="item" :key="key" v-for="(item,key) in lists">
                          <span class="iconfont"></span>
                          {{item.title}}  
                        </li>
                      </ul>
                      <b class="reg">
                        还没有账号？ 
                        <a class="regCount" href="">立即注册»</a>
                      </b>
                  </div>
                  <div class="layui-col-sm5 right">
                      <form class="form_box" action="">
                          <h4 class="form_login">登录:</h4>
                          <p class="tit">你若不离不弃，我必生死相依</p>
                          <input class="inpubox" type="text" placeholder="用户名">
                          <input class="inpubox" type="password" placeholder="密码">
                          <div class="layui-row code">
                              <div class="layui-col-md6 code_num">
                                  <input class="inpubox" type="text" placeholder="验证码">
                              </div>
                              <div class="layui-col-md6 code_num">
                                  <a class="code_c" href="">777</a>
                              </div>
                          </div>
                          <div class="check_box">
                            <input type="checkbox" id="remember"> 
                            <label class="rem_tit"  for="remember">记住我</label>
                          </div>
                          <button class="btn">登录</button>
                      </form>
                  </div>
              </div>
        </div>
        <div class="layui-fluid footer">
            <p class="reserve">© 2019 All Rights Reserved. RuoYi</p>
            <a class="record" href="">粤ICP备18046899号</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "RyLogin",
    data(){
      return{
          lists:[
            {title:"SpringBoot"},
            {title:"Mybatis"},
            {title:"Shiro"},
            {title:"Thymeleaf"},
            {title:"Layui"}
          ]
      }
    },
    mounted(){
      layui.use('element', function(){
          var element = layui.element
      })
    }
}
</script>
<style scoped>
.tbody{
    background: url('../assets/img/bg.jpg') no-repeat fixed;
    background-size: 100% 100%;
    min-height: 580px;
    _height:580px;
    height: 100%;
    width:100%;
    
}
.layui-fluid{
  padding: 0;
}
.login_contaner{
  padding-top:150px;
  width: 750px;
  margin:0 auto; 
  border-bottom:1px solid rgba(255,255,255,.5);
  padding-bottom: 15px;
}

.left{
    padding-right: 15px;
   
}
.right{
   padding-left: 15px;
  
}
.form_box{
  padding:30px;
  background: rgba(255,255,255,.3);
  border:1px solid rgba(255,255,255,.5);
}
.welcome{
    margin-top: 5px;
    margin-bottom: 10px;
    font-weight: 600;
    font-size: 14px;
    color:#fff;
}
.lists{
  margin:20px 0;
  color:#fff;
  line-height: 1.4;
}
.reg{
  color: #fff;
}
.regCount{
  color: #337ab7;
}

.form_login{
  color:#fff;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.1;
}
.tit{
  color:rgba(255,255,255,.95);
  margin:20px 0 10px;
}
.inpubox{
  display: block;
  width: 100%;
  height: 20px;
  padding:6px 0;
  margin-top:15px;
  border-radius: 4px;
  border: 1px solid #e5e6e7;
  text-indent: 10px;
  font-size: 14px;
  line-height: 1.1;
  transition: all 1s;
}
.inpubox:focus{
  border:1px solid #1abd43;
  transition: all 1s;
}
.code_num{
  padding-right: 15px;
}
.code_c{
  display: block;
  width: 100%;
  height: 20px;
  margin-top:15px;
  padding:6px 0;
  text-align: center;
  padding-left: 10px;
  line-height: 20px;
}
.check_box{
  margin-top:15px;
  position: relative;
}
#remember{
  vertical-align: middle;
  -webkit-appearance: none;
  border:1px solid #fff;
  height: 14px;
  width:14px;
  background: #fff;
  cursor: pointer;
  padding:1px;
}
#remember:checked{
  background: url("../assets/img/check.png") no-repeat;
  background-size: 120% 110%;
}
.rem_tit{
  font-size: 13px;
  color: rgba(255,255,255,.95)
}
.btn{
  background: #337ab7;
  text-align: center;
  height:20px ;
  width: 100%;
  box-sizing: content-box;
  border:none;
  display: block;
  padding:6px 0;
  border-radius: 4px;
  line-height: 20px;
  margin-top:15px;
  color:#fff;
  transition: all .3s;
}
.btn:hover{
  background: #1abd43;
  transition: all.3s;
}

.footer{
  width: 750px;
  margin:0 auto ;
}
.reserve{
  font-size: 13px;
  color:rgba(255,255,255,.95);
  margin-top:15px;
}
.record{
  margin-top:15px;
  display: inline-block;
  font-size: 14px;
  color:#337ab7;
}
</style>