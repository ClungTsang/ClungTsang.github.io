import DefaultTheme from "vitepress/theme";
import "./style/index.css";
import "element-plus/dist/index.css";
import elementplus from "element-plus";
import Layout from "./Layout.vue";

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp: async ({ app }) => {
    app.use(elementplus);
  },
};
