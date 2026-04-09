import { defineConfig } from 'vitepress'
import feedbackSchema from "../public/configs/feedback_schema.json";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Baltic GTIF - BETA",
  description: "Baltic Information Factory Dashboard",
  appearance: false, // disable dark mode
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
    feedback: {
      endpoint:
        "https://git-issue-creator.baltic-gtif.hub-otc.eox.at/create-issue?repo=1045",
      schema: feedbackSchema,
      position: "bottom-right",
    },
    logo: '/assets/baltic_gtif_logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Narratives', link: '/narratives' },
      { text: 'Explore data', link: '/explore/' },
      { text: 'Login', link: 'https://workspace.baltic-gtif.hub-otc.eox.at/' },
    ],
  }
})
