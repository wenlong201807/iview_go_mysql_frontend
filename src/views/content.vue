<template>
  <div>
    <h3>content</h3>
    <p class="mg">
      <Button class="mg" type="primary" @click="bookstroeLogin">登录书城</Button>
    </p>
    <p>
      <Button class="mg" type="primary" @click="addBook">添加一本图书</Button>
    </p>
    <p>
      <Button class="mg" type="primary" @click="deleteBook">删除一本图书</Button>
    </p>
    <p>
      <Button class="mg" type="primary" @click="updateBook">更新一本图书</Button>
    </p>

  </div>
</template>

<script>
export default {
  data () {
    return {
      content: 666
    }
  },
  created () {
    console.log('content')
  },
  methods: {
    bookstroeLogin () {
      let postData = {
        username: 'admin'
        // password: '123456'
      }
      this.$axios
        .post('/home/checkUserName', postData, {
          // .post('/home/login', postData, {
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
          console.log('login', res)
          // if (res.data.Msg === '登录成功') {
          //   this.$Message.success('success!')
          //   this.$router.push({ path: '/home/item' })
          // }
        })
    },
    addBook () {
      let postData = {
        title: '阿斯顿发放',
        author: '阿斯顿',
        price: 33,
        sales: 2,
        stock: 13
      }
      this.$axios
        .post('/home/addBook', postData, {
          // .post('/home/login', postData, {
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
          console.log('addBook', res)
          // if (res.data.Msg === '登录成功') {
          //   this.$Message.success('success!')
          //   this.$router.push({ path: '/home/item' })
          // }
        })
    },
    updateBook () {
      let postData = {
        bookId: 37,
        title: '阿斯顿发放666',
        author: '阿斯顿666',
        price: 33,
        sales: 2,
        stock: 13
      }
      this.$axios
        .post('/home/upduateBookPage', postData, {
          // .post('/home/login', postData, {
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
          console.log('upduateBookPage', res)
          // if (res.data.Msg === '登录成功') {
          //   this.$Message.success('success!')
          //   this.$router.push({ path: '/home/item' })
          // }
        })
    },
    deleteBook () {
      this.$axios.delete('/home/deleteBook?bookId=' + 38).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>
.mg {
  margin: 5px 0px;
}
</style>
