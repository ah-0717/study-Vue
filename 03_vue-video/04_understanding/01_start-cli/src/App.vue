<template>
  <div>
    <!-- componentsに指定したkey名がパスカルケースならば、HTMLをケバブケースでも記述できる -->
    <!-- key名がケバブの時はHTMLをパスカルケースで記述はできない -->
    <like-header> 
      <!-- 名前つきslot -->
      <!-- slotプロパティを使用すれば子コンポーネントの値を使用できる v-slotは#に置き換わる -->
      <template #:[title]="slotProps" >
        <h2 >こんにちは</h2>
        <p>{{slotProps}}</p>
      </template>
      <h3>初めまして</h3>
      <template v-slot:number>
        <h2>トータルのいいね数{{number}}</h2>
      </template>
    </like-header>
    <!-- デフォルトスロットのしかない場合のみ下記の様な書き方ができる 省略（#）はできない -->
    <like-header v-slot="slotProps">
      <p>{{slotProps}}</p>
    </like-header>
    <!-- キャメルケースでもかける -->
    <!-- <LikeNumber :totalNumber="number" @my-click="number = $event"></LikeNumber> --> <!-- $eventにemitの値が入る -->
    <LikeNumber :totalNumber="number" @my-click="incrementNumber"></LikeNumber>
    <!-- ケバブケースでもかける プロパティはこちらを推奨 -->
    <LikeNumber :total-number="number"></LikeNumber>
    <LikeNumber></LikeNumber>
    <hr>
    <!-- 動的コンポーネント -->
    <component :is="currentComponent"></component> <!-- 切り替わるたびに毎回コンポーネントが削除・生成される -->
    <keep-alive>
      <component :is="currentComponent"></component> <!-- 切り替わるたびに毎回コンポーネントが削除・生成されない -->
    </keep-alive>
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <hr>
    <div>
      <!--
        修飾詞 v-model.XXX
        lazy: フォーカスが外れたタイミングで実行される
        number: input numberの型をnumberにする（通常はstringになってしまう
        trim: 前後の空白を削除する
      -->
      <h3>イベントのフォーム</h3>
      <!-- <label for="title">タイトル</label>
      <input
        id="title"
        type="text"
        v-model.lazy="eventData.title"
      > -->
      <EventTitle v-model="eventData.title"></EventTitle>
      <!-- 下記はカスタムコンポーネントのv-model指定時と同等の記述 -->
      <!-- <EventTitle
        :value="eventData.title"
        @input="eventData.title = $event"
      ></EventTitle> -->
      <label for="maxNumbar">最大人数</label>
      <input
        id="maxNumbar"
        type="number"
        v-model.number="eventData.maxNumber"
      >
      <p>{{typeof eventData.maxNumber}}</p>
      <label for="host">主催者</label>
      <input
        id="host"
        type="text"
        v-model.trim="eventData.host"
      >
      <pre>{{eventData.host}}</pre>
      <label for="detail">イベントの内容</label>
      <textarea
        id="detail"
        type="text"
        v-model="eventData.detail"
      ></textarea>
      <pre>{{eventData.detail}}</pre>
      <input
        type="checkbox"
        id="isPrivate"
        v-model="eventData.isPrivate">
      <label for="isPrivate">非公開</label>
      <p>{{eventData.isPrivate}}</p>
      <!-- v-modelが同じオブジェクトを参照していると、自動で関連づけてくれる checkBox, radio -->
      <input
        type="checkbox"
        id="10"
        value="10代"
        v-model="eventData.target"
      >
      <label for="10">10代</label>
      <input
        type="checkbox"
        id="20"
        value="20代"
        v-model="eventData.target"
      >
      <label for="30">20代</label>
      <input
        type="checkbox"
        id="30"
        value="30代"
        v-model="eventData.target">
      <label for="30">30代</label>
      <p>{{eventData.target}}</p>
      <input
        type="radio"
        id="free"
        value="無料"
        v-model="eventData.price"
      >
      <label for="free">無料</label>
      <input
        type="radio"
        id="paid"
        value="有料"
        v-model="eventData.price" 
      >
      <label for="paid">有料</label>
      <p>{{eventData.price}}</p>
      <select v-model="eventData.location">
        <option
          v-for="location in locations"
          :key="location"
        >{{location}}</option>
      </select>
      <p>{{eventData.location}}</p>
    </div>
  </div>
</template>

<script>
// ローカル登録 App.vueでのみコンポーネントが使える
import LikeHeader from './components/LikeHeader.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import EventTitle from './components/EventTitle.vue'

export default {
  // babelをしようしているのでES6もOK
  data() {
    return {
      number: 10,
      // 動的な名前
      title: 'title',
      currentComponent: 'Home',
      locations: ['東京', '大阪', '名古屋'],
      eventData: {
        title: 'タイトル',
        maxNumber: 0,
        host: '',
        detail: '',
        isPrivate: false,
        target: [],
        price: '無料',
        location: '東京'
      }
    }
  },
  components: {
    LikeHeader,
    Home,
    About,
    EventTitle
  },
  methods: {
    // カスタムイベントのincrementNumberに引数がなくても$emitに渡した値が入る
    incrementNumber(value) {
      // ポイントは親が子供のデータに依存しているわけではない＝単一方向
      this.number = value
    }
  }
}
</script>

<style scoped>
  div {
    border: 1px solid red;
  }
</style>