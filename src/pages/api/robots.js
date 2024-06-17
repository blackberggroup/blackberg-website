export default function handler(req, res) {
    const environment = process.env.NEXT_PUBLIC_ENV;
    console.log('Environment: ' + environment);

    let robotsTxt = '';

    if (environment === 'production') {
        robotsTxt = `User-agent: *
Disallow: 

Sitemap: https://blackberggroup.com/sitemap.xml
        `;
    } else {
        robotsTxt = `User-agent: *
Disallow: /
        `;
    }

    res.setHeader('Content-Type', 'text/plain');
    res.write(robotsTxt);
    res.end();
}
