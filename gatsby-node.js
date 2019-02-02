const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve) => {
    graphql(`
      {
        allContentfulGallery {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then((result) => {
      result.data.allContentfulGallery.edges.forEach(({ node }) => {
        createPage({
          path: node.slug,
          component: path.resolve('./src/templates/gallery-page.js'),
          context: {
            slug: node.slug,
          },
        });
      });
      resolve();
    });
  });
};
