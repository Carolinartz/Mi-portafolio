import { Principal } from './views/Home.js';
import { Contactame } from './views/Contactame.js';
import { Cronología } from './views/Cronología.js';
import { Proyectos } from './views/Proyectos.js';
import { Fail } from './views/Error.js';
import { setRootEl, setRoutes, onURLChange } from './router.js';

const routes = {
  '/': Principal,
  '/Error': Fail,
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