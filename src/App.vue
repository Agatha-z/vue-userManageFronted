<template>
  <div id="app">
    <nav class="navbar navbar-inverse">
		<div class="container">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="/">用户管理系统</a>
			</div>
			<div id="navbar" class="collapse navbar-collapse">
				<ul class="nav navbar-nav">
					<li><router-link to="/customer">主页</router-link></li>
					<li><router-link to="/about">关于我们</router-link></li>
				</ul>

				<ul class="nav navbar-nav navbar-right">
					<li><button class="btn btn-default" @click="out">退出</button></li>
				</ul>
				<ul class="nav navbar-nav navbar-right" v-show="isLogin">
					<li><router-link type="button" to="/add" class="btn btn-info" tag="button">添加用户</router-link></li>
				</ul>
				<ul class="nav navbar-nav navbar-right">
					<li><router-link type="button" to="/login" class="btn btn-danger" tag="button">登录</router-link></li>
					<li><router-link type="button" to="/register" class="btn btn-primary" tag="button">注册</router-link></li>
				</ul>
			</div><!--/.nav-collapse -->
		</div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
	name: 'App',
	data(){
		return {
			isLogin:''
		}
	},
	created(){
		if(localStorage.login){
			this.isLogin = localStorage.login
		}
	},
	// watch:{
	// 	isLogin:{
	// 		handler:function(v1,v2){
	// 			console.log(v1,v2)
	// 		},
	// 		immediate:true
	// 	}
	// },
	methods:{
		out(){
			localStorage.removeItem('login')
			this.$router.push('/')
		}
	}
}
</script>

<style lang="less" scoped>
	.navbar-right{
		height: 50px;
		line-height: 50px;
	}
	.btn.btn-danger{
		outline: none;
	}
	.btn.btn-primary{
		outline: none;
	}
	.btn.btn-info{
		outline: none;
		margin: auto 0;
	}
	.btn.btn-default{
		outline: none
	}
</style>
