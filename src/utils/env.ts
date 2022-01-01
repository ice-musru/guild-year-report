export const isDev = process.env.NODE_ENV === "development";
export const isPreview = location.href.indexOf("/blackboard/preview/live/") > -1;
