<template>
  <div style="width: 700px; margin: auto; padding-top: 50px;">
    <router-view name="header" />
    <!-- router-viewがurlに応じて動的にコンポーネントが切り替わる -->
    <router-view />
  </div>
</template>
