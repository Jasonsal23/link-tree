export type AffiliateProduct = {
  label: string;
  url: string;
  image: string;
  price?: string;
  tag?: string;
};

export const affiliateProducts: AffiliateProduct[] = [
  // ── Recording Setup ──
  {
    label: "DJI Mic Mini",
    url: "https://amzn.to/4rGypDG",
    image: "https://m.media-amazon.com/images/I/61GgCksX24L._AC_SL1500_.jpg",
    tag: "GEAR",
  },
  {
    label: "EMEET 1080P Webcam with Microphone",
    url: "https://amzn.to/3NuAGE1",
    image: "https://m.media-amazon.com/images/I/61Z8eKKUIcL._AC_SL1419_.jpg",
    tag: "GEAR",
  },
  {
    label: "Desk Ring Light with Stand",
    url: "https://amzn.to/4cTKge4",
    image: "https://m.media-amazon.com/images/I/71mjLwliVCL._AC_SL1500_.jpg",
    tag: "GEAR",
  },
  {
    label: "AODK L Shaped Gaming Desk",
    url: "https://amzn.to/47dxh3g",
    image: "https://m.media-amazon.com/images/I/81oMRfMlrdL._AC_SL1500_.jpg",
    tag: "GEAR",
  },

  // ── Books ──
  {
    label: "Fluent Python (2nd Ed.) — Luciano Ramalho",
    url: "https://amzn.to/4rBbUjI",
    image: "https://m.media-amazon.com/images/I/81OvszBEdhL._SL1500_.jpg",
    tag: "BOOKS",
  },
  {
    label: "Designing Machine Learning Systems — Chip Huyen",
    url: "https://amzn.to/47xbO5q",
    image: "https://m.media-amazon.com/images/I/81aSHEzSB1L._SL1500_.jpg",
    tag: "BOOKS",
  },
  {
    label: "AI Engineering — Chip Huyen",
    url: "https://amzn.to/4smp0Ti",
    image: "https://m.media-amazon.com/images/I/815KH9GjFTL._SL1500_.jpg",
    tag: "BOOKS",
  },
  {
    label: "The Pragmatic Programmer — Hunt & Thomas",
    url: "https://amzn.to/4utNTOh",
    image: "https://m.media-amazon.com/images/I/911WvX7M98L._SL1500_.jpg",
    tag: "BOOKS",
  },
];
