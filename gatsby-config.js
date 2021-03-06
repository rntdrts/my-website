module.exports = {
  siteMetadata: {
    title: 'Renato Duarte Website',
    description: 'I&apos;m  a fullstack developer',
    author: '@rntdrt.s',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#101214',
        theme_color: '#00C8E3',
        display: 'minimal-ui',
        icon: 'src/images/rntdrt-icon 1@2x.png',
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['inter:300,400,400i,700', 'rubik:300,400,400i,700'],
        display: 'swap',
      },
    },
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svgs/,
        },
      },
    },
  ],
};
