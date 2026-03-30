export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    url.host = 'api.qijieya.cn';
    return fetch(new Request(url, request))
  }
}
