<template>
<Head  :asideFlag="asideFlag" @on-handle-click-aside='handleClickAside'></Head>   
  <div class="flx">     
    <Aside :asideFlag="asideFlag"></Aside>
    <Main></Main>
  </div>
</template>
<script>
import Aside from "../../components/layout/Aside";
import Main from "../../components/layout/Main";
import Head from "@/components/layout/Head";
import { ref } from 'vue'

export default {
  components: {
    Aside,
    Main,
    Head
  },
  setup() {
      let asideFlag = ref(false)
      function handleClickAside() {
          asideFlag.value = !asideFlag.value
      }
      return{
          asideFlag,
          handleClickAside
      }
  }
};
</script>