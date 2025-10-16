export const seo = ({
  title,
  description,
  keywords,
  image,
  canonical,
}: {
  title: string;
  description?: string;
  image?: string;
  keywords?: string;
  canonical?: string;
}) => {
  const tags = [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: keywords },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:creator", content: "@richardsolomou" },
    { name: "twitter:site", content: "@richardsolomou" },
    { name: "og:type", content: "website" },
    { name: "og:title", content: title },
    { name: "og:description", content: description },
    ...(canonical ? [{ name: "og:url", content: canonical }] : []),
    ...(image
      ? [
          { name: "twitter:image", content: image },
          { name: "twitter:card", content: "summary_large_image" },
          { name: "og:image", content: image },
        ]
      : []),
  ];

  return tags;
};
