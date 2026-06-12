<script setup>
import DefaultTheme from "vitepress/theme"
import { useData, useRoute, inBrowser } from "vitepress"
import { watchEffect, onMounted } from "vue"
import HomeLayout from "./HomeLayout.vue"

const { Layout } = DefaultTheme
const { lang } = useData()
const route = useRoute()

const COOKIE_KEY = "site_lang"

const getCookie = (key) => {
  const value = document.cookie.split("; ").find((row) => row.startsWith(key + "="))
  if (!value) return null
  return decodeURIComponent(value.split("=")[1])
}

const setCookie = (key, value) => {
  const expires = "Mon, 01 Jan 2030 00:00:00 GMT"
  document.cookie = `${key}=${encodeURIComponent(value)}; expires=${expires}; path=/`
}

const isHomePage = () => {
  return route.path === '/' || route.path === '/index.html'
}

const redirectByLang = (targetLang) => {
  const path = window.location.pathname
  if (targetLang === "en" && !path.startsWith("/en/")) {
    window.location.replace("/en/")
  } else if (targetLang === "zh-TW" && !path.startsWith("/zh-TW/")) {
    window.location.replace("/zh-TW/")
  }
}

onMounted(() => {
  if (!inBrowser) return
  const path = window.location.pathname
  if (path !== "/") return
  const savedLang = getCookie(COOKIE_KEY)
  if (savedLang) { redirectByLang(savedLang); return }
  const browserLang = navigator.language.toLowerCase()
  let targetLang = "zh-CN"
  if (browserLang.startsWith("en")) targetLang = "en"
  else if (browserLang === "zh-tw" || browserLang === "zh-hk" || browserLang === "zh-mo") targetLang = "zh-TW"
  redirectByLang(targetLang)
})

watchEffect(() => {
  if (!inBrowser) return
  if (!lang.value) return
  setCookie(COOKIE_KEY, lang.value)
})
</script>

<template>
  <HomeLayout v-if="isHomePage()" />
  <Layout v-else />
</template>
