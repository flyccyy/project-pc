<template>
	<div class="login_wrap">
		<div class="form_wrap">
			<el-form
				:model="loginForm"
				:rules="rules"
				ref="loginForm"
				label-width="0"
				class="demo-ruleForm"
			>
				<el-form-item prop="phone">
					<el-input v-model="loginForm.phone" placeholder="请输入手机号"></el-input>
				</el-form-item>
				<el-form-item prop="code">
					<el-row>
						<el-col :span="13" >
							<el-input v-model="loginForm.code" placeholder="验证码"></el-input>
						</el-col>
						<el-col :span="8" :offset="1">
							<el-button>发送验证码</el-button>
						</el-col>
					</el-row>
				</el-form-item>
				<el-form-item>
          <el-checkbox></el-checkbox>
          <span>我已阅读并同意用户协议和隐私条款</span>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login_btn">登录</el-button>
        </el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			loginForm: {
				phone: "",
				code: ""
			},
			rules: {
				phone: [
					{ required: true, message: "请输入手机号", trigger: "blur" },
					{ len: 11, message: "长度为11位", trigger: "blur" }
				],
				code: [
					{ required: true, message: "请输入验证码", trigger: "blur" },
					{ len: 6, message: "长度为6位", trigger: "blur" }
				]
			}
		};
	},
	methods: {
		submitForm(formName) {
			this.$refs[formName].validate(valid => {
				if (valid) {
					alert("submit!");
				} else {
					console.log("error submit!!");
					return false;
				}
			});
		}
	}
};
</script>

<style lang="less" scoped>
.login_wrap {
	width: 100%;
	height: 100%;
	background: url("../../assets/img/bg_login.jpg") no-repeat center center;
	background-size: cover;
	display: flex;
	justify-content: center;
	align-items: center;
	.form_wrap {
		width: 350px;
		height: 350px;
		background-color: #fff;
    padding: 60px 40px 60px;
    border-radius: 10px;
    .login_btn {
      width:100%;
    }
	}
}
</style>