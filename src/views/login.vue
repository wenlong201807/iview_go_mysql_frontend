<template>
  <div class="containerLogin">
    <div class="loginCla">
      <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <FormItem prop="username">
          <i-input type="text" v-model="formInline.username" placeholder="用户名">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </i-input>
        </FormItem>
        <FormItem prop="password">
          <i-input type="password" v-model="formInline.password" placeholder="密码">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </i-input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="login('formInline')">登录</Button>

        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      formInline: {
        username: 'bjsxt',
        password: 'smallming'
      },
      ruleInline: {
        username: [
          {
            required: true,
            message: 'Please fill in the user name',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: 'Please fill in the password.',
            trigger: 'blur'
          },
          {
            type: 'string',
            min: 6,
            message: 'The password length cannot be less than 6 bits',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    login (name) {
      console.log(this.formInline.username, this.formInline.password)
      this.$refs[name].validate(valid => {
        if (valid) {
          // this.$Message.success('Success!')

          let postData = {
            username: this.formInline.username,
            password: this.formInline.password
          }
          this.$axios
            .post('/company/login', postData, {
              headers: {
                'Content-Type':
                  'application/x-www-form-urlencoded; charset=UTF-8'
              },
              transformRequest: [
                data => {
                  const pairs = []

                  Object.keys(data).forEach(key => {
                    pairs.push(`${key}=${data[key]}`)
                  })

                  return pairs.join('&')
                }
              ]
            })
            .then(res => {
              console.log('login', res)
              if (res.data.Msg === '登录成功') {
                this.$Message.success('success!')
                this.$router.push({ path: '/home/item' })
              }
            })
        } else {
          this.$Message.error('Fail!')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.containerLogin {
  height: 100vh;
  width: 100vw;
  // background: url()
}
.loginCla {
  height: 200px;
  width: 800px;
  padding: 60px 0px 0px 157px;
  margin: 50px auto 0px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 2px 2px 2px pink;
}
</style>
