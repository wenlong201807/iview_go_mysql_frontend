<template>
  <div>
    <h3>content</h3>
    <p class="mg">
      <Button class="mg" type="primary" @click="testUserName">校验用户名是否存在</Button>
    </p>
    <p class="mg">
      <Button class="mg" type="primary" @click="bookstroeLogin">登录书城</Button>
    </p>
    <p class="mg">
      <Button class="mg" type="primary" @click="bookstroeLogout">退出书城</Button>
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
    <p>
      <Button class="mg" type="primary" @click="pricerangeBook">带分页的价格范围内查询图书</Button>
    </p>
    <p>
      <Button class="mg" type="primary" @click="rangeBook">带分页图书信息**首页展示**看是否有cookie</Button>
    </p>
    <p>
      <Button class="mg" type="primary" @click="getCartInfo">查看购物车中**登录状态下</Button>
    </p>
    <p>
      <Button class="mg" type="primary" @click="addBook2Cart">添加到购物车中**登录状态下</Button>
    </p>
    <p>
      <Button class="mg" type="primary" @click="deleteCart">清空购物车**登录状态下</Button>
    </p>
    <p>
      <Button class="mg" type="primary" @click="deleteCartItem">删除购物项（购物车里面的一种商品）**登录状态下</Button>
    </p>
    <p>
      <Button class="mg" type="primary" @click="updateCartItem">更新购物项（购物车里面的一种商品）**登录状态下</Button>
    </p>
    <p>
      <Button class="mg" type="primary" @click="checkout">去结账**登录状态下</Button>
    </p>
    <p>
      <Button class="mg" type="primary" @click="getOrders">获取所有的订单**登录状态下</Button>
    </p>
    <p>
      <Button class="mg" type="primary" @click="getOrderItemsInfo">获取订单详情**登录状态下</Button>
    </p>
    <p>
      <Button class="mg" type="primary" @click="getMyOrders">获取我的所有的订单**登录状态下</Button>
    </p>
    <p>
      <Button class="mg" type="primary" @click="sendOrder">发货**登录状态下</Button>
    </p>
    <p>
      <Button class="mg" type="primary" @click="receiveOrder">收货**登录状态下</Button>
    </p>

  </div>
</template>

<script>
export default {
  data() {
    return {
      content: 666
    }
  },
  created() {
    console.log('content')
  },
  methods: {
    receiveOrder() {
      let postData = {
        orderId: 'e6476fae-b361-4043-497a-35e0bb6ddd12'
      }
      this.$axios
        .put('/home/receiveOrder', postData, this.postHeaderCom())
        .then(res => {
          console.log('receiveOrder', res)
        })
    },
    sendOrder() {
      let postData = {
        orderId: 'e6476fae-b361-4043-497a-35e0bb6ddd12'
      }
      this.$axios
        .put('/home/sendOrder', postData, this.postHeaderCom())
        .then(res => {
          console.log('sendOrder', res)
        })
    },
    getMyOrders() {
      this.$axios.get('/home/getMyOrders').then(res => {
        console.log('getMyOrders', res)
      })
    },
    getOrderItemsInfo() {
      let orderId = 'f8dd1418-fcf5-41d1-7d7c-5f759a7d6ee9'
      this.$axios
        .get('/home/getOrderItemsInfo?orderId=' + orderId)
        .then(res => {
          console.log('getOrderItemsInfo', res)
        })
    },
    getCartInfo() {
      this.$axios.get('/home/getCartInfo').then(res => {
        console.log('getCartInfo', res)
      })
    },
    getOrders() {
      this.$axios.get('/home/getorders').then(res => {
        console.log('getorders', res)
      })
    },
    checkout() {
      this.$axios.post('/home/checkout', this.postHeaderCom()).then(res => {
        console.log('checkout', res)
      })
    },
    updateCartItem() {
      let postData = {
        cartItemId: 33,
        bookCount: 66
      }
      this.$axios
        .put('/home/updateCartItem', postData, this.postHeaderCom())
        .then(res => {
          console.log('updateCartItem', res)
        })
    },
    deleteCart() {
      let cartId = '60b2e752-7740-46f6-4d80-1e02ee89080e'
      this.$axios.delete('/home/deleteCart?cartId=' + cartId).then(res => {
        console.log('deleteCart', res)
      })
    },
    deleteCartItem() {
      let cartItemId = '23'
      this.$axios
        .delete('/home/deleteCartItem?cartItemId=' + cartItemId)
        .then(res => {
          console.log('deleteCartItem', res)
        })
    },
    addBook2Cart() {
      let postData = {
        bookId: 7
      }
      this.$axios
        .post('/home/addBook2Cart', postData, this.postHeaderCom())
        .then(res => {
          console.log('addBook2Cart', res)
        })
    },
    testUserName() {
      let postData = {
        username: 'admin'
      }
      this.$axios
        .post('/home/checkUserName', postData, this.postHeaderCom())
        .then(res => {
          console.log('login', res)
          // if (res.data.Msg === '登录成功') {
          //   this.$Message.success('success!')
          //   this.$router.push({ path: '/home/item' })
          // }
        })
    },
    bookstroeLogout() {
      this.$axios.post('/home/logout').then(res => {
        console.log('退出登录', res)
      })
    },
    bookstroeLogin() {
      let postData = {
        username: 'admin2',
        password: '123456'
      }
      this.$axios
        .post('/home/login', postData, this.postHeaderCom())
        .then(res => {
          console.log('login', res)
          // if (res.data.Msg === '登录成功') {
          //   this.$Message.success('success!')
          //   this.$router.push({ path: '/home/item' })
          // }
        })
    },
    addBook() {
      let postData = {
        title: '666顿发放',
        author: '666斯顿',
        price: 3,
        sales: 2,
        stock: 3
      }
      this.$axios
        .post('/home/addBook', postData, this.postHeaderCom())
        .then(res => {
          console.log('addBook', res)
          // if (res.data.Msg === '登录成功') {
          //   this.$Message.success('success!')
          //   this.$router.push({ path: '/home/item' })
          // }
        })
    },
    updateBook() {
      let postData = {
        bookId: 39,
        title: '阿2222斯顿发放6667777',
        author: '阿2222斯顿666',
        price: 33,
        sales: 2,
        stock: 13
      }
      this.$axios
        .post('/home/upduateBookPage', postData, this.postHeaderCom())
        .then(res => {
          console.log('upduateBookPage', res)
          // if (res.data.Msg === '登录成功') {
          //   this.$Message.success('success!')
          //   this.$router.push({ path: '/home/item' })
          // }
        })
    },
    pricerangeBook() {
      let postData = {
        pageNo: '2', // 第几页
        minPrice: '10', // 低价
        maxPrice: '30' // 高价
      }
      this.$axios
        .get('/home/getPageBooksByPrice', { params: postData })
        .then(res => {
          console.log('getPageBooksByPrice', res)
          // if (res.data.Msg === '登录成功') {
          //   this.$Message.success('success!')
          //   this.$router.push({ path: '/home/item' })
          // }
        })
    },
    rangeBook() {
      let postData = {
        pageNo: '2' // 第几页
      }
      this.$axios.get('/home/getPageBooks', { params: postData }).then(res => {
        console.log('getPageBooksByPrice', res)
        // if (res.data.Msg === '登录成功') {
        //   this.$Message.success('success!')
        //   this.$router.push({ path: '/home/item' })
        // }
      })
    },
    deleteBook() {
      this.$axios.delete('/home/deleteBook?bookId=' + 39).then(res => {
        console.log(res)
      })
    },
    postHeaderCom() {
      return {
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
      }
    }
  }
}
</script>

<style scoped>
.mg {
  margin: 5px 0px;
}
</style>
