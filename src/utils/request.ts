import Mobile from "@blink-live/live-activity-mobile";
import { isDev } from "@/utils/env";

const protocol = isDev ? "//" : "https://";
const liveHost = isDev ? location.host : "api.live.bilibili.com";

function _get(url: string, params: Record<any, any>) {
  url = /^\//.test(url) ? `${protocol}${liveHost}${url}` : url;

  return Mobile.request({
    method: "get",
    url,
    params,
  });
}

function _post(url: string, params: Record<any, any>) {
  url = /^\//.test(url) ? `${protocol}${liveHost}${url}` : url;

  return Mobile.request({
    method: "post",
    url,
    params,
    paramsType: "queryString",
  });
}

const request = {
  get: _get,
  post: _post,
};

export { request };
