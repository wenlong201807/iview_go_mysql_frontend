<template>
  <div class="container">
    <Button type="primary" @click="addItem">添加</Button>
    <Table class="page_top" border :columns="initColumns" :data="initData"></Table>
    <Page class="page_top" :total="totalCount" :page-size="currentRows" :page-size-opts="pageSizeOps" @on-page-size-change="changePageSize"
      @on-change="changePage" show-elevator show-total show-sizer />
  </div>
</template>

<script>
export default {
  data () {
    return {
      current_id: 0,
      initColumns: [
        {
          title: '序号',
          key: 'Id',
          width: 60
        },
        {
          title: '标题',
          key: 'Title',
          width: 130
        },
        {
          title: '分类ID',
          key: 'CategoryId',
          width: 80
        },
        {
          title: '子标题',
          key: 'SubTitle',
          width: 130
        },
        {
          title: '描述',
          key: 'TitleDesc'
          // width: 130
        },
        {
          title: '子标题',
          key: 'SubTitle'
          // width: 130
        },
        {
          title: '路径',
          key: 'Url'
          // width: 130
        },
        {
          title: '图片',
          key: 'Pic',
          width: 130
        },
        {
          title: '图片2',
          key: 'Pic2',
          width: 130
        },
        {
          title: '内容',
          key: 'Content'
          // width: 130
        },
        {
          title: '操作',
          key: 'action',
          fixed: 'right',
          width: 130,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h(
                'Button',
                {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      console.log(params.row)
                      this.$router.push({
                        name: 'itemAmend',
                        params: params.row
                      })
                      // this.show(params.index)/home/itemAmend
                    }
                  }
                },
                '修改'
              ),
              h(
                'Button',
                {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      console.log(params.row.Id)
                      this.current_id = params.row.Id
                      this.remove()
                    }
                  }
                },
                '删除'
              )
            ])
          }
        }
      ],
      initData: [],
      pageSizeOps: [3, 5, 9],
      totalCount: 0,
      currentPage: 1,
      currentRows: 10
    }
  },
  created () {
    this.initGet()
  },
  methods: {
    remove () {
      this.$axios
        .delete('/company/deleteContent?ids=' + this.current_id)
        .then(res => {
          console.log(res)
          this.initGet()
        })
    },
    addItem () {
      this.$router.push({ path: '/home/itemAdd' })
    },
    changePage (page) {
      this.currentPage = page
      this.initGet()
    },
    changePageSize (pageSize) {
      this.currentRows = pageSize
      this.initGet()
    },
    initGet () {
      let params = {
        page: this.currentPage,
        rows: this.currentRows
      }
      this.$axios.get('/company/showContent', { params }).then(res => {
        // this.$axios.get('/api/showContent', { params }).then(res => {
        console.log(res)
        this.initData = res.data.rows
        this.totalCount = res.data.total
      })
    }
  }
}
</script>

<style scoped lang="less">
// eslint-disable-next-line
@import '../styles/common.less';
</style>
