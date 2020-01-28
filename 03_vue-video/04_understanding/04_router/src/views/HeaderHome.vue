<template>
  <nav>
    <h2>Home</h2>
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
</template>

<style scoped>
.link {
  margin-right: 10px;
}
.link--active {
  font-size: 20px;
}
</style>
