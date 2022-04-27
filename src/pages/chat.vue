<template>
  <v-app>
    <navigate/>
    <v-main class="centered">
      <!-- 给应用提供合适的间距 -->
      <v-container fluid>
        <div id="chat">
          <v-row>
            <v-col cols="4">
              <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
                <li v-for="item in items" :key="item.username" class="infinite-list-item">{{ item.username }}</li>
              </ul>
            </v-col>
            <v-col cols="8">
              <v-row>
                <v-col cols="12" style="max-height: 500px;overflow: auto;">
                  <div class="text-wrapper" id="responseText" >
                    {{msg}}
                  </div>
                </v-col>
                <v-col cols="12">
                  <input name="message" type="text"   v-model="sendMsg" placeholder="Message..." @keyup.enter="send"/>
                </v-col>
              </v-row>

            </v-col>
          </v-row>
          <v-btn id="btn_tips" style="display:none;" @click="snackbar = true">
          </v-btn>
          <v-snackbar
              v-model="snackbar"
              :multi-line="multiLine"
          >
            {{ text }}

            <template v-slot:action="{ attrs }">
              <v-btn
                  color="red"
                  text
                  v-bind="attrs"
                  @click="snackbar = false"
              >
                Close
              </v-btn>
            </template>
          </v-snackbar>
        </div>
      </v-container>
    </v-main>

  </v-app>

</template>

<script>
import navigate from "@/components/navigate";
export default {
name: "ChatPage",
  components: {
    navigate
  },
  data: function () {
    return {
      count: 0,
      msg:"",
      multiLine: true,
      snackbar: false,
      text: '',
      items: [
        {username: 'Foo'},
        {username: 'Bar'}
      ],
      webSock: null,
      wsHeartFlag: false,
      reconnectTime: 0,
      sendMsg:''
    };

  },
  created() {
    this.initWebsocket();
  },
  destroyed() {
    this.webSock.close() //离开路由之后断开websocket连接
  },
  methods: {
    initWebsocket() {
      const wsUri = "ws://127.0.0.1:8082/ws";
      this.webSock = new WebSocket(wsUri);
      this.webSock.onmessage = this.webSocketOnMessage;
      this.webSock.onopen = this.webSocketOnOpen;
      this.webSock.onerror = this.webSocketOnError;
      this.webSock.onclose = this.webSocketClose;

    }, webSocketOnOpen(){ //连接建立之后执行send方法发送数据
      let actions = 'test';
      this.text = '连接成功';
      document.getElementById("btn_tips").click();
      this.webSocketSend(JSON.stringify(actions));
    },
    webSocketOnError(){//连接建立失败重连
      this.text = '连接失败';
      document.getElementById("btn_tips").click();

    },
    webSocketOnMessage(e){ //数据接收
      const redata = JSON.parse(e.data);
      console.log(redata);
      this.msg=this.msg+"\n"+redata;
    },

    send(){ //数据接收
      console.log(this.sendMsg)
      this.webSock.send(this.sendMsg);
    },
    webSocketSend(Data){//数据发送
      this.webSock.send(Data);
    },
    webSocketClose(e){  //关闭
      this.text = '连接关闭';
      document.getElementById("btn_tips").click();
      console.log('断开连接',e);
    },
    load() {
      this.count += 2
    }
  }
}
</script>

<style scoped>
#chat {
  margin-top: 20px;
}


.text-wrapper {
  white-space: pre-wrap;
}
</style>