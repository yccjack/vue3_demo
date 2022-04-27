<template>
  <div>
    <v-system-bar>
      <v-spacer></v-spacer>
      <span>   {{times}}</span>
    </v-system-bar>
  </div>
</template>

<script>
export default {
name: "noticePage",
  data() {
    return {
      times:'',//格式化之后的当前时间
      currentTime: new Date() //当前时间
    };
  },
  created() {
    this.getTimes()
  },
  methods: {
    getTimes(){
      setInterval(this.getTimesInterval, 1000);
    },
    getTimesInterval:function() {
      let _this = this;
      let year = new Date().getFullYear(); //获取当前时间的年份
      let month = new Date().getMonth() + 1; //获取当前时间的月份
      let day = new Date().getDate(); //获取当前时间的天数
      let hours = new Date().getHours(); //获取当前时间的小时
      let minutes = new Date().getMinutes(); //获取当前时间的分数
      let seconds = new Date().getSeconds(); //获取当前时间的秒数
      //当小于 10 的是时候，在前面加 0
      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      //拼接格式化当前时间
      _this.times = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
    },
  }
}
</script>

<style scoped>

</style>