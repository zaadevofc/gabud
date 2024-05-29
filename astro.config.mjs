import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://zaadevofc.github.io/gabud",
  base: "/gabud",
  integrations: [mdx(), sitemap()],
});
