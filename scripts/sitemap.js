const fs = require('fs');
const fmt = require('xml-formatter');
const sm = require('sitemap');

const sitemap = sm.createSitemap({
    hostname: 'https://nickplutt.com',
    urls: [
        { url: '/' },
        { url: '/about' },
        { url: '/blog' },
        { url: '/'}
    ]
});

sitemap.toXML((err, xml) => {
   fs.writeFile('./build/sitemap.xml', fmt(xml, {}), () => {
       console.log('Sitemap created!');
   });
});
