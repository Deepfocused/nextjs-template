if (!self.define) {
    let e,
        s = {};
    const a = (a, n) => (
        (a = new URL(a + '.js', n).href),
        s[a] ||
            new Promise((s) => {
                if ('document' in self) {
                    const e = document.createElement('script');
                    (e.src = a), (e.onload = s), document.head.appendChild(e);
                } else (e = a), importScripts(a), s();
            }).then(() => {
                let e = s[a];
                if (!e)
                    throw new Error(`Module ${a} didn’t register its module`);
                return e;
            })
    );
    self.define = (n, i) => {
        const c =
            e ||
            ('document' in self ? document.currentScript.src : '') ||
            location.href;
        if (s[c]) return;
        let t = {};
        const r = (e) => a(e, c),
            o = { module: { uri: c }, exports: t, require: r };
        s[c] = Promise.all(n.map((e) => o[e] || r(e))).then(
            (e) => (i(...e), t),
        );
    };
}
define(['./workbox-f1770938'], function (e) {
    'use strict';
    importScripts(),
        self.skipWaiting(),
        e.clientsClaim(),
        e.precacheAndRoute(
            [
                {
                    url: '/_next/static/chunks/190-f2af06d2666a3f80.js',
                    revision: 'lAueY3ox-7kJ4TT3P1JMX',
                },
                {
                    url: '/_next/static/chunks/790-e1e258945895b399.js',
                    revision: 'lAueY3ox-7kJ4TT3P1JMX',
                },
                {
                    url: '/_next/static/chunks/app/_not-found/page-7bf4c53b59137cda.js',
                    revision: 'lAueY3ox-7kJ4TT3P1JMX',
                },
                {
                    url: '/_next/static/chunks/app/layout-28f94a6ed6200fd1.js',
                    revision: 'lAueY3ox-7kJ4TT3P1JMX',
                },
                {
                    url: '/_next/static/chunks/app/loading-54dfbfe9dd199c6e.js',
                    revision: 'lAueY3ox-7kJ4TT3P1JMX',
                },
                {
                    url: '/_next/static/chunks/app/page-549f70ab456aaffc.js',
                    revision: 'lAueY3ox-7kJ4TT3P1JMX',
                },
                {
                    url: '/_next/static/chunks/fd9d1056-15613444e2d73d0b.js',
                    revision: 'lAueY3ox-7kJ4TT3P1JMX',
                },
                {
                    url: '/_next/static/chunks/framework-f66176bb897dc684.js',
                    revision: 'lAueY3ox-7kJ4TT3P1JMX',
                },
                {
                    url: '/_next/static/chunks/main-919a204168f920cd.js',
                    revision: 'lAueY3ox-7kJ4TT3P1JMX',
                },
                {
                    url: '/_next/static/chunks/main-app-805313915a7678e8.js',
                    revision: 'lAueY3ox-7kJ4TT3P1JMX',
                },
                {
                    url: '/_next/static/chunks/pages/_app-6a626577ffa902a4.js',
                    revision: 'lAueY3ox-7kJ4TT3P1JMX',
                },
                {
                    url: '/_next/static/chunks/pages/_error-1be831200e60c5c0.js',
                    revision: 'lAueY3ox-7kJ4TT3P1JMX',
                },
                {
                    url: '/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js',
                    revision: '79330112775102f91e1010318bae2bd3',
                },
                {
                    url: '/_next/static/chunks/webpack-0f3669e03f770358.js',
                    revision: 'lAueY3ox-7kJ4TT3P1JMX',
                },
                {
                    url: '/_next/static/css/2f71e0d51b6954c9.css',
                    revision: '2f71e0d51b6954c9',
                },
                {
                    url: '/_next/static/css/b7a44f7222e81972.css',
                    revision: 'b7a44f7222e81972',
                },
                {
                    url: '/_next/static/lAueY3ox-7kJ4TT3P1JMX/_buildManifest.js',
                    revision: '2ec694eb52ae4f523f265a46bae4d768',
                },
                {
                    url: '/_next/static/lAueY3ox-7kJ4TT3P1JMX/_ssgManifest.js',
                    revision: 'b6652df95db52feb4daf4eca35380933',
                },
                {
                    url: '/_next/static/media/05a31a2ca4975f99-s.woff2',
                    revision: 'f1b44860c66554b91f3b1c81556f73ca',
                },
                {
                    url: '/_next/static/media/513657b02c5c193f-s.woff2',
                    revision: 'c4eb7f37bc4206c901ab08601f21f0f2',
                },
                {
                    url: '/_next/static/media/51ed15f9841b9f9d-s.woff2',
                    revision: 'bb9d99fb9bbc695be80777ca2c1c2bee',
                },
                {
                    url: '/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2',
                    revision: '74c3556b9dad12fb76f84af53ba69410',
                },
                {
                    url: '/_next/static/media/d6b16ce4a6175f26-s.woff2',
                    revision: 'dd930bafc6297347be3213f22cc53d3e',
                },
                {
                    url: '/_next/static/media/ec159349637c90ad-s.woff2',
                    revision: '0e89df9522084290e01e4127495fae99',
                },
                {
                    url: '/_next/static/media/fd4db3eb5472fc27-s.woff2',
                    revision: '71f3fcaf22131c3368d9ec28ef839831',
                },
                {
                    url: '/favicon.png',
                    revision: 'fa160beb35d7a57f1d42652f48b505f0',
                },
                {
                    url: '/icon-192x192.png',
                    revision: 'cbaa349a68cf2256d5a337d55dfe9f55',
                },
                {
                    url: '/icon-256x256.png',
                    revision: 'fff4f1fe9b86aa0886b82e683b522a8b',
                },
                {
                    url: '/icon-384x384.png',
                    revision: 'bcf0f0fca84d72e71f4e720f5b97b1a7',
                },
                {
                    url: '/icon-512x512.png',
                    revision: '310036549d1465b9c5bc15ffbd2a26dc',
                },
                {
                    url: '/images/me.jpg',
                    revision: 'a27e822ab4c741520a17f3ca7795e3b5',
                },
                {
                    url: '/manifest.webmanifest',
                    revision: 'fc548e211c735b0ad483ad4214bb5635',
                },
                {
                    url: '/robots.txt',
                    revision: 'cb3688d0cc8e5e3774cb77684152d4ce',
                },
                {
                    url: '/splashscreens/ipad_splash.png',
                    revision: 'f718ac3667e62dec9faa564c50143c58',
                },
                {
                    url: '/splashscreens/ipadpro1_splash.png',
                    revision: 'bf658d9f934d15be90cddb0e6824678c',
                },
                {
                    url: '/splashscreens/ipadpro2_splash.png',
                    revision: '62f931c4eb5c304315a5306e35aae1f9',
                },
                {
                    url: '/splashscreens/ipadpro3_splash.png',
                    revision: '08835525c0573231e33eca3585a98bb8',
                },
                {
                    url: '/splashscreens/iphone5_splash.png',
                    revision: '892fedde7fec169b1fa02c623bcbd618',
                },
                {
                    url: '/splashscreens/iphone6_splash.png',
                    revision: '1c3b12ff9796a7585f86ddc6482f0dca',
                },
                {
                    url: '/splashscreens/iphoneplus_splash.png',
                    revision: '38e170c2bc553312fe231b5a1f3b7b46',
                },
                {
                    url: '/splashscreens/iphonex_splash.png',
                    revision: '7e6b903e5ffedc9c65c3287f4c723090',
                },
                {
                    url: '/splashscreens/iphonexr_splash.png',
                    revision: '0656e7e6687d49bc5d8a7349b04ce423',
                },
                {
                    url: '/splashscreens/iphonexsmax_splash.png',
                    revision: 'c7c9028b03772b52837ed702f99528e5',
                },
                {
                    url: '/swe-worker-5c72df51bb1f6ee0.js',
                    revision: '5a47d90db13bb1309b25bdf7b363570e',
                },
            ],
            { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] },
        ),
        e.cleanupOutdatedCaches(),
        e.registerRoute(
            '/',
            new e.NetworkFirst({
                cacheName: 'start-url',
                plugins: [
                    {
                        cacheWillUpdate: async ({ response: e }) =>
                            e && 'opaqueredirect' === e.type
                                ? new Response(e.body, {
                                      status: 200,
                                      statusText: 'OK',
                                      headers: e.headers,
                                  })
                                : e,
                    },
                ],
            }),
            'GET',
        ),
        e.registerRoute(
            /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
            new e.CacheFirst({
                cacheName: 'google-fonts-webfonts',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 4,
                        maxAgeSeconds: 31536e3,
                    }),
                ],
            }),
            'GET',
        ),
        e.registerRoute(
            /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
            new e.StaleWhileRevalidate({
                cacheName: 'google-fonts-stylesheets',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 4,
                        maxAgeSeconds: 604800,
                    }),
                ],
            }),
            'GET',
        ),
        e.registerRoute(
            /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
            new e.StaleWhileRevalidate({
                cacheName: 'static-font-assets',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 4,
                        maxAgeSeconds: 604800,
                    }),
                ],
            }),
            'GET',
        ),
        e.registerRoute(
            /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
            new e.StaleWhileRevalidate({
                cacheName: 'static-image-assets',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 64,
                        maxAgeSeconds: 2592e3,
                    }),
                ],
            }),
            'GET',
        ),
        e.registerRoute(
            /\/_next\/static.+\.js$/i,
            new e.CacheFirst({
                cacheName: 'next-static-js-assets',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 64,
                        maxAgeSeconds: 86400,
                    }),
                ],
            }),
            'GET',
        ),
        e.registerRoute(
            /\/_next\/image\?url=.+$/i,
            new e.StaleWhileRevalidate({
                cacheName: 'next-image',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 64,
                        maxAgeSeconds: 86400,
                    }),
                ],
            }),
            'GET',
        ),
        e.registerRoute(
            /\.(?:mp3|wav|ogg)$/i,
            new e.CacheFirst({
                cacheName: 'static-audio-assets',
                plugins: [
                    new e.RangeRequestsPlugin(),
                    new e.ExpirationPlugin({
                        maxEntries: 32,
                        maxAgeSeconds: 86400,
                    }),
                ],
            }),
            'GET',
        ),
        e.registerRoute(
            /\.(?:mp4|webm)$/i,
            new e.CacheFirst({
                cacheName: 'static-video-assets',
                plugins: [
                    new e.RangeRequestsPlugin(),
                    new e.ExpirationPlugin({
                        maxEntries: 32,
                        maxAgeSeconds: 86400,
                    }),
                ],
            }),
            'GET',
        ),
        e.registerRoute(
            /\.(?:js)$/i,
            new e.StaleWhileRevalidate({
                cacheName: 'static-js-assets',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 48,
                        maxAgeSeconds: 86400,
                    }),
                ],
            }),
            'GET',
        ),
        e.registerRoute(
            /\.(?:css|less)$/i,
            new e.StaleWhileRevalidate({
                cacheName: 'static-style-assets',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 32,
                        maxAgeSeconds: 86400,
                    }),
                ],
            }),
            'GET',
        ),
        e.registerRoute(
            /\/_next\/data\/.+\/.+\.json$/i,
            new e.StaleWhileRevalidate({
                cacheName: 'next-data',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 32,
                        maxAgeSeconds: 86400,
                    }),
                ],
            }),
            'GET',
        ),
        e.registerRoute(
            /\.(?:json|xml|csv)$/i,
            new e.NetworkFirst({
                cacheName: 'static-data-assets',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 32,
                        maxAgeSeconds: 86400,
                    }),
                ],
            }),
            'GET',
        ),
        e.registerRoute(
            ({ sameOrigin: e, url: { pathname: s } }) =>
                !(
                    !e ||
                    s.startsWith('/api/auth/callback') ||
                    !s.startsWith('/api/')
                ),
            new e.NetworkFirst({
                cacheName: 'apis',
                networkTimeoutSeconds: 10,
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 16,
                        maxAgeSeconds: 86400,
                    }),
                ],
            }),
            'GET',
        ),
        e.registerRoute(
            ({ request: e, url: { pathname: s }, sameOrigin: a }) =>
                '1' === e.headers.get('RSC') &&
                '1' === e.headers.get('Next-Router-Prefetch') &&
                a &&
                !s.startsWith('/api/'),
            new e.NetworkFirst({
                cacheName: 'pages-rsc-prefetch',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 32,
                        maxAgeSeconds: 86400,
                    }),
                ],
            }),
            'GET',
        ),
        e.registerRoute(
            ({ request: e, url: { pathname: s }, sameOrigin: a }) =>
                '1' === e.headers.get('RSC') && a && !s.startsWith('/api/'),
            new e.NetworkFirst({
                cacheName: 'pages-rsc',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 32,
                        maxAgeSeconds: 86400,
                    }),
                ],
            }),
            'GET',
        ),
        e.registerRoute(
            ({ url: { pathname: e }, sameOrigin: s }) =>
                s && !e.startsWith('/api/'),
            new e.NetworkFirst({
                cacheName: 'pages',
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 32,
                        maxAgeSeconds: 86400,
                    }),
                ],
            }),
            'GET',
        ),
        e.registerRoute(
            ({ sameOrigin: e }) => !e,
            new e.NetworkFirst({
                cacheName: 'cross-origin',
                networkTimeoutSeconds: 10,
                plugins: [
                    new e.ExpirationPlugin({
                        maxEntries: 32,
                        maxAgeSeconds: 3600,
                    }),
                ],
            }),
            'GET',
        ),
        (self.__WB_DISABLE_DEV_LOGS = !0);
});