import preprocess from "svelte-preprocess"
import adapter from "@sveltejs/adapter-auto"
// import path from "path"

// const myPlugin = {
//   name: 'log-request-middleware',
//   configureServer(server) {
//     server.middlewares.use((req, res, next) => {
//       console.log(`Got cookie ${req.headers.cookie}`);
//       next();
//     });
//   }
// };

const config = {
  kit: {
    adapter: adapter(),
    // vite: {
    //   resolve: {
    //     alias: {
    //       "$component" : path.resolve('./src/lib/components'),
    //     }
    //   },
      // plugins: [myPlugin],
    // }
  },
  preprocess: [
    preprocess({
      "preserve": ['ld+json'],
      "postcss": true
    }),
  ],
}

export default config;
