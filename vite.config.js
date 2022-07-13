import { defineConfig, loadEnv } from 'vite';
import { resolve } from 'path';
const path = require('path');

function getAliases() {
  return {
    '@api': path.resolve(__dirname, './main/services/api'),
    '@assets': path.resolve(__dirname, './library/assets'),
    '@components': path.resolve(__dirname, './library/components'),
    '@pages': path.resolve(__dirname, './pages'),
    '@services': path.resolve(__dirname, './services'),
  };
}

export default defineConfig(({ command, mode }) => {
  const port = 3500;
  console.log('command:', command, 'mode:', mode);

  const env = loadEnv(mode, process.cwd());
  console.log('vite_env:', env.VITE_NAME); // viteGC

  if (mode === 'development') {
    console.log('Modo Desarrollo');
    return {
      server: {
        port,
      },
      resolve: {
        alias: getAliases(),
      },
    };
  } else {
    console.log('Modo Producción');
    return {
      build: {
        //multi-pagina
        rollupOptions: {
          input: {
            main: resolve(__dirname, 'index.html'),
            help: resolve(__dirname, 'help', 'help.html'),
            hola: resolve(__dirname, 'hola', 'index.html'),
          },
        },
      },
      resolve: {
        alias: getAliases(),
      },
      //construir librerias, comentar la parte de rollupOptions
      lib:{
        entry: resolve(__dirname, 'lib', 'main.js'),
        name: 'demo',
        fileNamw: (format) => `demo.${format}.js`
      },
    };
  }
});

// export default defineConfig({
//   server: {
//     port: 8080,
//   },
// });
