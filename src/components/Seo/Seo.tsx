import React from 'react';
import useSiteMetadata from '../../utils/hooks/useSiteMetadata';
// @ts-ignore
import bannerLogo from '../../images/logo.png';

interface SeoProps {
  title?: string;
  description?: string;
  pathname?: string;
  children?: React.ReactNode;
}

export default function Seo(props: SeoProps) {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
    // twitterUsername,
  } = useSiteMetadata();

  const seo = {
    title: props.title || defaultTitle,
    description: props.description || defaultDescription,
    image: image || bannerLogo,
    url: `${siteUrl}${props.pathname || ``}`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="title" property="og:title" content={seo.title}></meta>
      <meta
        name="description"
        property="og:description"
        content={seo.description}
      />
      <meta name="image" property="og:image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      {/* <meta name="twitter:creator" content={seo.twitterUsername} /> */}
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"
      />
      {props.children}
    </>
  );
}
