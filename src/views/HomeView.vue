<template>
  <div>
    <div class="box">🔔 {{ billboard.content }}</div>
    <div class="columns">
      <div class="column is-three-quarters">
        <TopicList></TopicList>
      </div>
      <div class="column">
        <CardBar></CardBar>
      </div>
    </div>
  </div>
</template>

<script>
import { getBillboard } from "@/api/billboard";
import CardBar from "@/views/card/CardBar"
import PostList from '@/views/post/Index'

export default {
  name: "Home",
  components: {CardBar, TopicList: PostList},
  data() {
    return {
      billboard: {
        content:''
      }
    };
  },
  created() {
    this.fetchBillboard();
  },
  methods: {
    async fetchBillboard() {
      console.log(111)
      getBillboard().then((value) => {
        console.log(value)
        const { data } = value;
        this.billboard = data;
      });
    },
  },
};
</script>
