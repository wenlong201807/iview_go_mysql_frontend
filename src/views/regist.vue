<template>
  <div class="containerregist">
    <Button type="primary" @click="isusername">校验用户名是否可用</Button>
    <div class="registCla">
      <Form ref="formInline" :model="formInline" :rules="ruleInline" label-width="80">
        <FormItem label="用户名" prop="username">
          <i-input type="text" v-model="formInline.username" placeholder="用户名">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </i-input>
        </FormItem>
        <FormItem label="密码" prop="password">
          <i-input type="password" v-model="formInline.password" placeholder="密码">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </i-input>
        </FormItem>
        <FormItem label="确认密码" prop="">
          <i-input type="password" v-model="formInline.password2" placeholder="确认密码">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </i-input>
        </FormItem>
        <FormItem label="邮箱" prop="email">
          <i-input type="text" v-model="formInline.email" placeholder="邮箱">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </i-input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="regist('formInline')">注册</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'regist',
  data () {
    return {
      formInline: {
        username: 'admin' + new Date().getTime(),
        password: 'smallming',
        password2: 'smallming',
        email: 'smallming'
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
        ],
        // 确认密码
        email: [
          {
            required: true,
            message: 'Please fill in the user name',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    regist (name) {
      console.log(this.formInline.username, this.formInline.password)
      this.$refs[name].validate(valid => {
        if (valid) {
          // this.$Message.success('Success!')
          let postData = {
            username: this.formInline.username,
            password: this.formInline.password,
            email: this.formInline.email
          }
          this.$axios
            .post('/home/regist', postData, {
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
              console.log('regist', res)
              this.$Message.success('success!')
            })
        } else {
          this.$Message.error('Fail!')
        }
      })
    },
    isusername () {
      let postData = {
        username: 'admin66'
        // username: this.formInline.username,
      }
      this.$axios
        .post('/home/checkUserName', postData, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
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
          console.log('checkUserName', res)
          this.$Message.success('success!' + res.data)
        })
    }
  }
}
</script>

<style lang="less" scoped>
.containerregist {
  height: 100vh;
  width: 100vw;
  // background: url()
}
.registCla {
  height: 500px;
  width: 400px;
  padding: 50px 30px;
  margin: 50px auto 0px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 2px 2px 2px pink;
}
</style
>>
