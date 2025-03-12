
let ROUTES = {};
let rootEl = "";

export const setRootEl = (el) => {
  rootEl = el;
};
export const setRoutes = (routes) => {
  ROUTES = routes;
};

const queryStringToObject = (queryString) => {
  const params = new URLSearchParams(queryString);

  return Object.fromEntries(params.entries());

};

const renderView = (pathName, props = {}) => {

  const root =  rootEl
  root.innerHTML = "";
  rootEl.innerHTML = "";


  const viewFunc = ROUTES[pathName];

  if (!viewFunc) {
    return navigateTo("/error");

  }
  const viewEl = viewFunc(props);

  rootEl.appendChild(viewEl);
};

export const navigateTo = (pathname, props = {}) => {
  const searchParams = new URLSearchParams(props).toString();
    const url = `${window.location.origin}${pathname}?${searchParams}`;

  window.history.pushState({}, pathname, url);

  renderView(pathname, props);

};

export const onURLChange = () => {
  const { pathname, search } = window.location;
  const props = queryStringToObject(search);
  renderView(pathname, props);
};
window.addEventListener('popstate', onURLChange);