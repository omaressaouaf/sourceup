import Router from "next/router";
import NProgress from "nprogress";

// Nprogress config
NProgress.configure({ trickleRate: 0.05, trickleSpeed: 20 });
Router.events.on("routeChangeStart", NProgress.inc);
Router.events.on("routeChangeComplete", NProgress.done);
Router.events.on("routeChangeError", NProgress.done);
