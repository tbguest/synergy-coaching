import * as prismic from "@prismicio/client";
import sm from "./sm.json";

export function createClient(options) {
  return prismic.createClient(sm.apiEndpoint, options);
}

export const imageLoader = ({ src, width, height, quality }) => {
  return `${src}?auto=compress,format&w=${width}&h=${height}&q=${
    quality || 75
  }`;
};
