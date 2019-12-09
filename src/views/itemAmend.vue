<template>
  <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
    <FormItem label="分类ID" prop="CategoryId">
      <i-input v-model.trim="formValidate.CategoryId" placeholder="Enter your CategoryId"></i-input>
    </FormItem>
    <FormItem label="标题" prop="Title">
      <i-input v-model.trim="formValidate.Title" placeholder="Enter your e-Title"></i-input>
    </FormItem>
    <FormItem label="副标题" prop="SubTitle">
      <i-input v-model.trim="formValidate.SubTitle" placeholder="Enter your e-SubTitle"></i-input>
    </FormItem>

    <FormItem label="标题描述" prop="TitleDesc">
      <i-input v-model.trim="formValidate.TitleDesc" type="textarea" :autosize="{ minRows: 2, maxRows: 5 }" placeholder="Enter something..."></i-input>
    </FormItem>
    <Upload :before-upload="handleUpload" action="//jsonplaceholder.typicode.com/posts/">
      <Button icon="ios-cloud-upload-outline">Select the file to upload</Button>
    </Upload>
    <div v-if="file !== null">
      Upload file: {{ file.name }}
      <Button type="text" @click="upload" :loading="loadingStatus">{{
        loadingStatus ? "Uploading" : "Click to upload"
      }}</Button>
    </div>

    <editor-bar class="editor_cla" v-model.trim="detail" :isClear="isClear" @change="changeWangEditor"></editor-bar>

    <FormItem>
      <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
      <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
      <Button @click="rebackItem" style="margin-left: 8px">返回列表页</Button>
    </FormItem>
  </Form>
</template>
<script>
import EditorBar from '@/components/editor/wangEditor.vue'
export default {
  components: {
    EditorBar
  },
  data () {
    return {
      file: null,
      loadingStatus: false,
      isClear: false,
      detail: this.$route.params.content,
      formValidate: {
        CategoryId: this.$route.params.CategoryId,
        Title: this.$route.params.Title,
        SubTitle: this.$route.params.SubTitle,
        TitleDesc: this.$route.params.TitleDesc
      },
      ruleValidate: {
        CategoryId: [
          {
            required: true,
            message: 'CategoryId不能为空',
            trigger: 'blur'
          },
          {
            type: 'string',
            pattern: /^\d+$/,
            message: '请输入数字',
            trigger: 'blur'
          }
        ],
        Title: [
          { required: true, message: 'Title不能为空', trigger: 'blur' }
          // { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
        ],
        SubTitle: [
          {
            required: true,
            message: 'SubTitle不能为空',
            trigger: 'blur'
          }
        ],
        TitleDesc: [
          {
            required: true,
            message: 'TitleDesc不能为空',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  created () {
    this.$route.params.Id ||
      this.$router.push({
        path: '/home/item'
      })
  },
  methods: {
    rebackItem () {
      this.$router.push({
        path: '/home/item'
      })
    },
    handleUpload (file) {
      this.file = file
      console.log('this.file', this.file)
      return false
    },
    upload () {
      this.loadingStatus = true
      setTimeout(() => {
        this.file = null
        this.loadingStatus = false
        this.$Message.success('Success')
      }, 1500)
    },
    changeWangEditor (val) {
      console.log(val)
      this.detail = val
    },
    handleSubmit (name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          console.log(this.formValidate)
          console.log(this.detail)

          let postData = {
            id: this.$route.params.Id,
            categoryId: this.formValidate.CategoryId,
            title: this.formValidate.Title,
            subTitle: this.formValidate.SubTitle,
            titleDesc: this.formValidate.TitleDesc,
            url: 'defaultUrl666',
            pic: 'defaultPic666',
            pic2: 'defaultPice2',
            content: this.detail
          }

          // 成功 // 参考：https://www.cnblogs.com/liuhe688/p/11063945.html
          this.$axios
            .put('/company/updateContent', postData, {
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
              if (res.data.Msg === '修改成功') {
                this.$Message.success('修改成功')
                this.$router.push({
                  path: '/home/item'
                })
              }
            })

          // 失败
          // this.$axios.post('/home/test', postData).then(res => {

          // 失败
          // this.$axios({
          //   url: '/home/login',
          //   methods: 'POST',
          //   params: postData
          // }).then(res => {
          // this.$axios.get('/api/addContent', { params }).then(res => {
          // console.log(res)
          // if (res.data.Msg === '添加成功') {
          //   this.$Message.success('添加成功')
          // }
          // })
        } else {
          this.$Message.error('Fail!')
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
.editor_cla {
  padding: 20px 0px;
  // background: pink;
}
</style>
