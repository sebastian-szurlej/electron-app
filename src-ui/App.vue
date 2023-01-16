<template>
  <v-app>
    <AppHeader />

    <AppFooter />

    <AppSidebar />

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import AppHeader from "@/layouts/AppHeader.vue";
import AppFooter from "@/layouts/AppFooter.vue";
import AppSidebar from "@/layouts/AppSidebar.vue";
</script>

<style src="./styles/global.css"></style>
