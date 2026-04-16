import { defineConfig } from 'vitepress'
import baseConfig from "@eox/pages-theme-eox/config";
import feedbackSchema from "../public/configs/feedback_schema.json";
const brandId = "gtif-baltic";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  extends: baseConfig(brandId),
  vite:{
    envPrefix:["VITE_", "EODASH_"],
    server:{
      allowedHosts: true
    }
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (el) => el.includes('-')
      }
    }
  },
  themeConfig: {
    logo: {
      light: "/assets/baltic_gtif_logo.png"
    },
    feedback: {
      endpoint:
        "https://git-issue-creator.baltic-gtif.hub-otc.eox.at/create-issue?repo=1045",
      schema: feedbackSchema,
      position: "bottom-right",
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Narratives', link: '/narratives' },
      { text: 'Explore data', link: '/explore/' },
      { text: 'Login', link: 'https://workspace.baltic-gtif.hub-otc.eox.at/' },
    ],
  }
})
