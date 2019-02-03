const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allContentfulGallery {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `).then((result) => {
    result.data.allContentfulGallery.edges.forEach(({ node }) => {
      createPage({
        path: `galleries/${node.slug}`,
        component: path.resolve('./src/templates/gallery-page.js'),
        context: {
          galleryId: node.id,
        },
      });
    });
  });
};
