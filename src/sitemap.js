import { writeFileSync } from 'fs';
import { SitemapStream, streamToPromise } from 'sitemap';
import path from 'path';

const generateSitemap = () => {
  const sitemap = new SitemapStream({ hostname: 'https://adbeats.co' });

  const routes = [
    { path: '/' },
    { path: '/qualify' },
    { path: '/confirmation' },
    { path: '/okvcvdsdv3wfdzx' },
    { path: '/order-retrieval' },
    { path: '/orders/:id' },
    { path: '/pricing' },
    { path: '/admin/dashboard' },
  ];

  routes.forEach(route => {
    sitemap.write({ url: route.path, changefreq: 'monthly', priority: 0.8 });
  });

  sitemap.end();

  streamToPromise(sitemap).then(sm => {
    writeFileSync(path.join(path.resolve(), 'public/sitemap.xml'), sm.toString());
    console.log('Sitemap generated successfully');
  });
};

generateSitemap();
