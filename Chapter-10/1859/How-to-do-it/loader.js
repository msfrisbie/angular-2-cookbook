importScripts(
  "https://unpkg.com/systemjs/dist/system.js",
  "https://unpkg.com/zone.js/dist/zone.min.js",
  "https://unpkg.com/reflect-metadata/Reflect.js",
  "./system-config.js");

System.import("./web-worker-main.ts");