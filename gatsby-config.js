/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `ComicSite`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
      __key: "images",
    },
    {
      /* Include plugin */
      resolve: "gatsby-omni-font-loader",

      /* Plugin options */
      options: {
        /* Font loading mode */
        mode: "async",

        /* Enable font loading listener to handle FOUT */
        enableListener: true,

        /* Preconnect URL-s. This example is for Google Fonts */
        preconnect: ["https://fonts.gstatic.com"],

        /* Self-hosted fonts config. Add font files and font CSS files to "static" folder */
        // custom: [
        //   {
        //     /* Exact name of the font as defied in @font-face CSS rule */
        //     name: ["Font Awesome 5 Brands", "Font Awesome 5 Free"],
        //     /* Path to the font CSS file inside the "static" folder with @font-face definition */
        //     file: "/fonts/fontAwesome/css/all.min.css",
        //   },
        // ],

        /* Web fonts. File link should point to font CSS file. */
        web: [
          {
            /* Exact name of the font as defied in @font-face CSS rule */
            name: "DM Sans",
            /* URL to the font CSS file with @font-face definition */
            file: "https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700;9..40,800;9..40,900;9..40,1000&display=swap",
          },
        ],
      },
    },
  ],
};
