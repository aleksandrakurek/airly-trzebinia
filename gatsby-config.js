// const NearestInstallationsTypes = {
// data: [{
//   alternative_id: "String",
//   attributes: {
//     name: "String",
//     points: 1,
//   },
// }],
// }

module.exports = {
  siteMetadata: {
    title: `Airly Trzebinia`,
    description: `Site for monitoring air quality in Trzebinia`,
    author: `@kurekaleksandra`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        typePrefix: "airlyTrzebinia",
        url: `https://developer.airly.eu/v2/`,
        method: "get",

        headers: {
          "Content-Type": "application/vnd.api+json",
          Accept: "application/json",
          "apikey": "MOTFHmkBF70beyzogsHzyBpwkeigf5W1"
        },
        entitiesArray: [
          {
            url: `https://developer.airly.eu/v2/installations/nearest?lat=50.062006&lng=19.940984&maxDistanceKM=3&maxResults=1`,
            method: "get",
            name: `NearestInstallations`,
            // schemaType: NearestInstallationsTypes,
          },
        ],
      },
    },
  ],
}
