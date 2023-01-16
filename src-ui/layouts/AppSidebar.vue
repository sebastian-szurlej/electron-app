<template>
  <v-navigation-drawer :permanent="true">
    <v-list>
      <v-list-item
        v-for="(item, index) in menuItems"
        :key="index"
        :value="item"
        :to="{ name: item.routePath }"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { menuItems } from "@/layouts/appSideBarHelper.js";
</script>

<style scoped></style>
