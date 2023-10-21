// Rich text annotations used in the block content editor
import annotationLinkEmail from "./schemas/annotations/linkEmail";
import annotationLinkExternal from "./schemas/annotations/linkExternal";
import annotationProduct from "./schemas/annotations/product";

const annotations = [
  annotationLinkEmail,
  annotationLinkExternal,
  annotationProduct,
];

// Document types
import collection from "./schemas/documents/collection";
import colorTheme from "./schemas/documents/colorTheme";
import page from "./schemas/documents/page";
import product from "./schemas/documents/product";
import productVariant from "./schemas/documents/productVariant";

const documents = [collection, colorTheme, page, product, productVariant];

// Singleton document types
import home from "./schemas/singletons/home";
import settings from "./schemas/singletons/settings";

const singletons = [home, settings];

// Block content
import body from "./schemas/blocks/body";

const blocks = [body];

// Object types
import footer from "./schemas/objects/global/footer";
import imageWithProductHotspots from "./schemas/objects/hotspot/imageWithProductHotspots";
import inventory from "./schemas/objects/shopify/inventory";
import linkExternal from "./schemas/objects/global/linkExternal";
import links from "./schemas/objects/global/links";
import notFoundPage from "./schemas/objects/global/notFoundPage";
import heroCollection from "./schemas/objects/hero/collection";
import heroHome from "./schemas/objects/hero/home";
import heroPage from "./schemas/objects/hero/page";
import moduleAccordion from "./schemas/objects/module/accordion";
import accordionBody from "./schemas/objects/module/accordionBody";
import accordionGroup from "./schemas/objects/module/accordionGroup";
import moduleCallout from "./schemas/objects/module/callout";
import moduleCallToAction from "./schemas/objects/module/callToAction";
import moduleCollection from "./schemas/objects/module/collection";
import moduleGrid from "./schemas/objects/module/grid";
import gridItems from "./schemas/objects/module/gridItem";
import menu from "./schemas/objects/global/menu";
import moduleImage from "./schemas/objects/module/image";
import moduleImageAction from "./schemas/objects/module/imageCallToAction";
import moduleImages from "./schemas/objects/module/images";
import moduleInstagram from "./schemas/objects/module/instagram";
import moduleProduct from "./schemas/objects/module/product";
import moduleProducts from "./schemas/objects/module/products";
import placeholderString from "./schemas/objects/shopify/placeholderString";
import priceRange from "./schemas/objects/shopify/priceRange";
import spot from "./schemas/objects/hotspot/spot";
import productHotspots from "./schemas/objects/hotspot/productHotspots";
import option from "./schemas/objects/shopify/option";
import productWithVariant from "./schemas/objects/shopify/productWithVariant";
import proxyString from "./schemas/objects/shopify/proxyString";
import seo from "./schemas/objects/seo/seo";
import seoHome from "./schemas/objects/seo/home";
import seoPage from "./schemas/objects/seo/page";
import seoDescription from "./schemas/objects/seo/description";
import seoShopify from "./schemas/objects/seo/shopify";
import shopifyCollection from "./schemas/objects/shopify/shopifyCollection";
import shopifyCollectionRule from "./schemas/objects/shopify/shopifyCollectionRule";
import shopifyProduct from "./schemas/objects/shopify/shopifyProduct";
import shopifyProductVariant from "./schemas/objects/shopify/shopifyProductVariant";

// Collections
import collectionGroup from "./schemas/objects/collection/group";
import collectionLinks from "./schemas/objects/collection/links";

const objects = [
  footer,
  imageWithProductHotspots,
  inventory,
  links,
  linkExternal,
  notFoundPage,
  heroCollection,
  heroHome,
  heroPage,
  moduleAccordion,
  accordionBody,
  accordionGroup,
  menu,
  moduleCallout,
  moduleCallToAction,
  moduleCollection,
  moduleGrid,
  gridItems,
  moduleImage,
  moduleImageAction,
  moduleImages,
  moduleInstagram,
  moduleProduct,
  moduleProducts,
  placeholderString,
  priceRange,
  spot,
  productHotspots,
  option,
  productWithVariant,
  proxyString,
  seo,
  seoHome,
  seoPage,
  seoDescription,
  seoShopify,
  shopifyCollection,
  shopifyCollectionRule,
  shopifyProduct,
  shopifyProductVariant,
  collectionGroup,
  collectionLinks,
];

export const schemaTypes = [
  ...annotations,
  ...singletons,
  ...objects,
  ...blocks,
  ...documents,
];
