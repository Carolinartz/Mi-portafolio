import { Principal } from './views/home.js';
import { Contactame } from './views/Contactame.js';
import { Cronología } from './views/Cronología.js';
import { Proyectos } from './views/Proyectos.js';
import { Fail } from './views/error.js';
import { setRootEl, setRoutes, onURLChange } from './router.js';

const routes = {
  '/': Principal,
  '/error': Fail,
  '/Contactame': Contactame,
  '/Cronología': Cronología,
  '/Proyectos': Proyectos,

};

setRoutes(routes);


window.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.querySelector('#root');
  setRootEl(rootElement);
  onURLChange();

});