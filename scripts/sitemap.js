const fs = require('fs');
const fmt = require('xml-formatter');
const sm = require('sitemap');

let urls = [
    { url: '/' },
    { url: '/about' },
    { url: '/portfolio' },
    { url: '/blog'}
];

fs.readdir('./public/blog-posts', (err, files) => {
    files.forEach(file => {
        urls.push({url: `/blog/${file.split('.')[0]}`})
    });

    const sitemap = sm.createSitemap({
        hostname: 'https://nickplutt.com',
        urls: urls
    });

    sitemap.toXML((err, xml) => {
        fs.writeFile('./build/sitemap.xml', fmt(xml, {}), () => {
            console.log('Sitemap created!');
        });
    });
});
