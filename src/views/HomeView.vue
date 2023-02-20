<template>
  <div class="home flex_col">
    <div class="header flex_row">
      <h1 class="title">{{config[configValue].title}}</h1>
      <div class="select">
        <el-select v-model="configValue" placeholder="请选择" @change="onChange">
          <el-option
            v-for="(item, index) in config"
            :key="item.key"
            :label="item.title"
            :value="index">
          </el-option>
        </el-select>
      </div>
    </div>
    <div class="github flex_row">
      <a class="flex_row" href="https://github.com/Mr-ZhangBo/ai-weekly" target="_blank">
        <Github />
        <p>Star on GitHub</p>
      </a>
    </div>
    <div class="section">
      <div>
        <h1>{{config[configValue].section1}}</h1>
      </div>
      <div>
        <h1>{{config[configValue].section2}}</h1>
      </div>
    </div>
    <div class="desc">{{config[configValue].desc}}</div>
    <div class="content">
      <div class="question"><h4>{{config[configValue].question}}</h4> </div>
      <el-input v-model="textarea" class="textarea" type="textarea" :rows="2" :placeholder="config[configValue].placeholder" />
    </div>
    <div class="button">
      <el-button type="primary" @click="createWeekly">{{config[configValue].buttonText}}</el-button>
    </div>
    <div class="response">
      <el-skeleton v-if="isShowSkeleton" :rows="4" animated />
      <vue-markdown v-if="result">{{result}}</vue-markdown>
    </div>
    <div class="aicode">
      <nav>
        <li><a href="https://aicodehelper.com">点我去首页看看 → <span style="color: #589df6;">AICodeHelper</span></a></li>
      </nav>
    </div>
  </div>
</template>

<script>
import Github from '@/components/Github.vue'
import VueMarkdown from 'vue-markdown'
import { config } from './helper.js'

export default {
  name: 'HomeView',
  components: {
    Github,
    VueMarkdown
  },
  data() {
    return {
      config,
      configValue: 0,
      textarea: null,
      result: '',
      isShowSkeleton: false,
      flag: true
    }
  },
  methods: {
    onChange() {
      this.result = '';
    },
    createWeekly() {
      window.scrollTo(0,200)
      const { flag, textarea, config, configValue } = this;
      if (!textarea.trim()) {
        this.$message.warning('请输入内容');
        return;
      }
      if (!flag) return;
      this.flag = false;
      this.result = '';
      this.isShowSkeleton = true;
      this.$api.base.getAll({
        his: [],
        query: `${config[configValue].basePrompt} Q : \n${textarea}`,
        task: config[configValue].key
      })
        .then(res => {
          this.isShowSkeleton = false;
          this.result = res.data;
          this.flag = true;
        })
        .catch(() => {
          this.isShowSkeleton = false;
          this.flag = true;
          this.$message.error('服务器太火爆了,请稍后再试!');
        })
    }
  },
}
</script>

<style>
div {
  box-sizing: border-box;
}

.aicode {
  margin-top: 1rem;
}

.aicode li {
  list-style: none;
}

.aicode a {
  text-decoration: none;
}

.home {
  margin: 0 auto;
  max-width: 64rem;
  align-items: center;
}

.header {
  width: 100%;
  text-align: left;
  align-items: center;
  border-bottom: 1px solid #E5E7EB;
}

.select{
  margin-left: 20px;
  margin-top: 10px;
  width: 40%;
}

.github {
  margin-top: 3rem;
  align-items: center;
  justify-content: center;
}

.github a {
  height: 37px;
  padding: 0.5rem 1rem;
  align-items: center;
  color: rgb(75 85 99);
  font-size: .875rem;
  border: 1px solid rgb(209 213 219);
  border-radius: 9999px;
  text-decoration: inherit;
}

.github a p {
  margin-left: 5px;
}

*,:after,:before {
  box-sizing: border-box;
  border: 0 solid #e5e7eb;
}

.section {
  margin: 1rem 0 1rem;
  font-size: 20px;
}

.section h1 {
  margin: 0;
}

.desc {
  margin-bottom: 1rem;
  color: rgb(100 116 139)
}

.question {
  text-align: left;
}

.content,.button,.el-button,.response,.desc {
  width: 100%;
  max-width: 36rem;
}

textarea {
  min-height: 120px;
}

.button,.el-button {
  height: 50px;
  /* line-height: 50px; */
  margin-top: 1rem;
}

.button,.el-button span {
  font-size: 16px;
}

.response {
  margin-top: 2rem;
  text-align: initial;
}

.hljs-line-numbers {
    text-align: right;
    /* 以下3行要加 !important 来避免样式覆盖 */
    border-right: 1px solid #ccc !important;
    margin-right: 10px !important;
    padding-right: 5px !important;
    color: #999;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

@media screen and (max-width: 800px) {
  .title {
    font-size: 22px;
  }
}
</style>
