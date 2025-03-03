import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "🪴 Quartz 4.0",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    generateSocialImages: false,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f4f1e1", // Soft parchment-like background
          lightgray: "#d1c6b1", // Muted stone gray
          gray: "#a89f91", // Warm taupe
          darkgray: "#6e6b5e", // Deep olive gray
          dark: "#3e3b2f", // Rich dark brown
          secondary: "#9b7e4f", // Antique gold
          tertiary: "#6a4e3c", // Rustic copper
          highlight: "rgba(155, 126, 79, 0.15)", // Subtle gold highlight
          textHighlight: "#f1e0a1", // Light parchment text highlight
        },
        darkMode: {
          light: "#2a2a2a", // Dark charcoal background
          lightgray: "#4e4e4e", // Slate gray
          gray: "#7a7a7a", // Medium gray
          darkgray: "#b0b0b0", // Light gray
          dark: "#e0e0e0", // Off-white
          secondary: "#c8a15e", // Antique gold
          tertiary: "#9e7d5d", // Rustic copper
          highlight: "rgba(155, 126, 79, 0.15)", // Subtle gold highlight
          textHighlight: "#d4af37", // Gold text highlight
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
