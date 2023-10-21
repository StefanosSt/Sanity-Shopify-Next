import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || "t5ps4f7e",
    dataset: process.env.SANITY_STUDIO_PROJECT_DATASET || "production",
  },
});
