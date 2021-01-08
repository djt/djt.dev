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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-RT2W08CTB8",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        optimizeId: "G-RT2W08CTB8",
        // Enables Google Optimize Experiment ID
        experimentId: "G-RT2W08CTB8",
        // Set Variation ID. 0 for original 1,2,3....
        variationId: "0",
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "djt.dev",
      }
    },    
  ],
};
