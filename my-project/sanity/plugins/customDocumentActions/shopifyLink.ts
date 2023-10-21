import { EarthGlobeIcon } from "@sanity/icons";
import { type DocumentActionDescription } from "sanity";
import type { ShopifyDocument, ShopifyDocumentActionProps } from "./types";

export default (
  props: ShopifyDocumentActionProps
): DocumentActionDescription | undefined => {
  const { published, type }: { published: ShopifyDocument; type: string } =
    props;

  if (!published || published?.store?.isDeleted) {
    return;
  }

  let url: string | null = null;

  if (type === "collection") {
    url = `collection-${published?.store?.id}`;
  }
  if (type === "product") {
    url = `product-${published?.store?.id}`;
  }
  if (type === "productVariant") {
    url = `variant-${(published?.store?.productId, published?.store?.id)}`;
  }

  if (!url) {
    return;
  }

  if (published && !published?.store?.isDeleted) {
    return {
      label: "Edit in Shopify",
      icon: EarthGlobeIcon,
      onHandle: () => {
        url ? window.open(url) : void "No URL";
      },
      shortcut: "Ctrl+Alt+E",
    };
  }
};
