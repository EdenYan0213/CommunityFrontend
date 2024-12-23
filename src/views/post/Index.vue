<template>
  <div>
    <el-card>
      <div slot="header">
        帖子列表
      </div>
      <dic>
        111
      </dic>
    </el-card>
  </div>
</template>

<script>

export default {
  name: "TopicList",
  // components: {CardBar, TopicList: PostList},
  data() {
    return {
      
    };
  },
  created() {
    this.fetchBillboard();
  },
  methods: {
    
  },
};
</script>
