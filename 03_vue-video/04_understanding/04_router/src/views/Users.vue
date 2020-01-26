<template>
  <div>
    <h3>Users</h3>
    <router-link to="/users/1">
      ユーザー１
    </router-link>
    <router-link to="/users/2">
      ユーザー２
    </router-link>
    <hr>
    <!-- $route 情報を取得する際に使用 -->
    <!-- <h1>User No. {{ $route.params.id }}</h1> -->
    <!-- または、routerの設定でprops:ture routerに依存していない書き方ができる -->
    <h1>User No. {{ id }}</h1>
    <router-link :to="`/users/${Number(id)+1}/profile`">
      次のユーザー
    </router-link>
    <!-- 名前付きルート -->
    <router-link :to="{name: 'users-id-profile', params: {id: Number(id)+1}}">
      次のユーザー
    </router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  props: ['id'],
  watch: {
    $route(to, from) {
      // eslint-disable-next-line no-console
      console.log('パラメーターが変わったことを検知する');
      // eslint-disable-next-line no-console
      console.log(to);
      // eslint-disable-next-line no-console
      console.log(from);
    }
  },
  created() {
    // eslint-disable-next-line no-console
    console.log(
      'パラメーターの変化ではコンポーネントを再利用できないので呼ばれない'
    );
  }
};
</script>