<template>
    <div class="edit container">
        <alert-msg :message="alert" v-if="alert"></alert-msg>
        <h1 class="page-header">编辑用户</h1>
        <form @submit="editCustomer">
            <div class="well">
                <h1>用户信息</h1>
                <div class="form-group">
                    <label for="">姓名</label>
                    <input type="text" class="form-control" placeholder="name" v-model="customer.name">
                </div>
                <div class="form-group">
                    <label for="">电话</label>
                    <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
                </div>
                <div class="form-group">
                    <label for="">邮箱</label>
                    <input type="text" class="form-control" placeholder="email" v-model="customer.email">
                </div>
                <div class="form-group">
                    <label for="">学历</label>
                    <input type="text" class="form-control" placeholder="education" v-model="customer.education">
                </div>
                <div class="form-group">
                    <label for="">毕业学校</label>
                    <input type="text" class="form-control" placeholder="graduationschool" v-model="customer.graduationschool">
                </div>
                <div class="form-group">
                    <label for="">职业</label>
                    <input type="text" class="form-control" placeholder="profession" v-model="customer.profession">
                </div>
                <div class="form-group">
                    <label for="">个人简介</label>
                    <!-- <input type="text" class="form-control" placeholder="profile" v-model="customer.profile"> -->
                    <textarea class="form-control" v-model="customer.profile" rows="10"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">确认</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            customer:{},
            alert:''
        }
    },
    created(){
        this.getMsg(this.$route.params.id)
    },
    methods:{
        getMsg(id){
            this.$axios({
                method:'GET',
                url:'/users/'+id
            }).then(res =>{
                this.customer = res.data
            })
        },
        editCustomer(e){
            // console.log(123)
            if(!this.customer.name || !this.customer.email || !this.customer.phone){
                this.alert = '不能为空'
            } else{
                let updateCustomer = {
                    name: this.customer.name,
                    phone: this.customer.phone,
                    email: this.customer.email,
                    education: this.customer.education,
                    graduationschool: this.customer.graduationschool,
                    profession: this.customer.profession,
                    profile: this.customer.profile
                }
                this.$axios({
                    method:'PUT',
                    url:'/users/'+this.$route.params.id,
                    data: updateCustomer
                }).then(res =>{
                    this.$router.push({path:'/',query:{alert:'用户信息更新成功'}})
                })
                e.preventDefault();
            }
            e.preventDefault();
        }
    }
}
</script>

<style  scoped>

</style>