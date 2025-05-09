export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    return fetch(`${url.protocol}//${url.host}${url.pathname}${url.search}`);
  }
};