
// @ts-check
// https://nextjs.org/docs/app/api-reference/next-config-js

import * as PWA from '@ducanh2912/next-pwa';

const withPWA = PWA.default({
    dest: 'public',
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    // @ts-ignore
    swcMinify: true,
    disable: process.env.NODE_ENV === 'development',
    workboxOptions: {
        disableDevLogs: true,
    },
    // ... other options you like
});

export default async (phase, { defaultConfig }) => {
    /**
     * @type {import('next').NextConfig}
     */
    const nextConfig = {
      /* config options here */
    }
    return withPWA(nextConfig);
  }