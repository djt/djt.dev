module.exports = {
  siteMetadata: {
    title: `djt dot dev - Tiny Projects To Build A Large Portfolio`,
    name: `djt.dev`,
    siteUrl: `https://djt.dev/`,
    description: `Tiny Projects To Build A Large Portfolio.`,
    hero: {
      heading: `My journey of building Tiny projects toward a large portfolio.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/djtdotdev`,
      },
      {
        name: `mailto`,
        url: `mailto:daniel@djt.dev`,
      },

    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `djtdotdev`,
        short_name: `djt.dev`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: "G-RT2W08CTB8",
        head: false,
        anonymize: true,
      }
    },    
  ],
};
