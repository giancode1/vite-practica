import './style.css';
import './flex.scss';
import buttonStyles from './button.module.css';
import imageStyles from './image.module.css';
import img from './web.png';
import data from './data.json';
import suma from './suma.ts';
import { getUsers } from '@services/getUsers';

//Importación global
const modules = import.meta.glob('./modules/*.js');

console.log(modules);

for (const path in modules) {
  modules[path]().then((module) => {
    module.load();
  });
}

//ts
console.log(`suma 2 + 5 = ${suma(2, 5)}`);

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite GC!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
  <img id="img" />
  <pre>${JSON.stringify(data)}</pre>
`;
const boton = document.getElementById('btn');
boton.className = buttonStyles.btn;

boton.onclick = async () => {
  const p = document.getElementById('users');
  const usuarios = await getUsers();
  p.innerHTML = JSON.stringify(usuarios[0].name);
};

const imagen = document.getElementById('img');
imagen.src = img;
imagen.className = imageStyles.img;
