<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">
      Usersのページにいく
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    toUsers() {
      // $router pathは切り替える際に使う
      // this.$router.push('users');
      // this.$router.push({ path: '/users/' });

      // 名前付きルートが使用できる
      this.$router.push({
        name: 'users-id-profile',
        id: 1
      });
    }
  }
};
</script>