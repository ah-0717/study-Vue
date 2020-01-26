<template>
  <div style="width: 700px; margin: auto; padding-top: 50px;">
    <nav>
      <!-- active-class linkがアクティブな場合に適用される toに指定したpathが含まれていれば適用される -->
      <!-- exactで正確なpathの時にしか適用されなくなる -->
      <router-link
        to="/"
        active-class="link--active"
        exact
        class="link"
      >
        Home
      </router-link>
      <router-link 
        to="/users/"
        active-class="link--active"
        exact
        class="link"
      >
        Users
      </router-link>
    </nav>
    <!-- router-viewがurlに応じて動的にコンポーネントが切り替わる -->
    <router-view />
  </div>
</template>

<style scoped>
.link {
  margin-right: 10px;
}
.link--active {
  font-size: 20px;
}
</style>