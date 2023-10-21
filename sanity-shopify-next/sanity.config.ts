import { defineConfig, isDev } from "sanity";

import { deskTool } from "sanity/desk";
import { schemaTypes } from "./.sanity/schemas";
import { structure } from "./.sanity/desk";

import { visionTool } from "@sanity/vision";
import { colorInput } from "@sanity/color-input";
import { imageHotspotArrayPlugin } from "sanity-plugin-hotspot-array";
import { media, mediaAssetSource } from "sanity-plugin-media";
import { customDocumentActions } from "./.sanity/plugins/customDocumentActions";

const devOnlyPlugins = [visionTool()];

export default defineConfig({
  name: "default",
  title: "Sanity + Shopify demo",
  basePath: "/ssn",

  projectId: process.env.SANITY_STUDIO_PROJECT_ID || "t5ps4f7e",
  dataset: process.env.SANITY_STUDIO_PROJECT_DATASET || "production",

  plugins: [
    deskTool({ structure }),
    colorInput(),
    imageHotspotArrayPlugin(),
    customDocumentActions(),
    media(),
    ...(isDev ? devOnlyPlugins : []),
  ],

  schema: {
    types: schemaTypes,
  },

  form: {
    file: {
      assetSources: (previousAssetSources) => {
        return previousAssetSources.filter(
          (assetSource) => assetSource !== mediaAssetSource
        );
      },
    },
    image: {
      assetSources: (previousAssetSources) => {
        return previousAssetSources.filter(
          (assetSource) => assetSource === mediaAssetSource
        );
      },
    },
  },
});
