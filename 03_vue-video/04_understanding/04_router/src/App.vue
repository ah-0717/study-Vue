<template>
  <div style="with: 700px margin: auto; padding-top: 50px;">
    <nav >
      <router-link to="/">Home</router-link>
      <router-link to="/users">Users</router-link>
    </nav>
    <!-- router-viewがurlに応じて動的にコンポーネントが切り替わる -->
    <router-view></router-view>
  </div>
</temhplate>