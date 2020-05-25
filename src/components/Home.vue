<template>
  <div>
      <Header></Header>
      <keep-alive>
        <component :is="tabName"></component>
      </keep-alive> 
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import IndexTab from "@/components/indexTab/Index.vue";
import RankTab from "@/components/rankTab/Index.vue";
import SearchTab from "@/components/searchTab/Index.vue";

export default {
  name: 'Home',
  data: () => ({
    tabName: "IndexTab"
  }),
  components: {
    Header,
    IndexTab,
    RankTab,
    SearchTab
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
