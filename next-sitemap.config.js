module.exports = {
  siteUrl: process.env.SITE_URL || "https://sprunkisprunked.best",
  generateRobotsTxt: true,
  exclude: ["/twitter-image.*", "/opengraph-image.*", "/icon.*"],
  sitemapSize: 100, // 降低分割阈值，方便测试
  generateIndexSitemap: true, // 确保生成索引站点地图
  
  // 添加额外的路径
  additionalPaths: async (config) => {
    const languages = ['zh', 'ja'];
    const result = [];
    
    // 生成一些测试路径，确保有足够多的 URL
    const paths = [
      '/',
      '/sprunkedxsprunki',
      '/sprunkiromanticmod',
      '/sprunkisprunked',
      '/sprunkisprunked2',
      // ... 添加更多路径
    ];
    
    for (const path of paths) {
      result.push({
        loc: path,
        changefreq: 'daily',
        priority: 0.7,
        lastmod: new Date().toISOString()
      });
      for (const lang of languages) {
        result.push({
          loc: `/${lang}${path}`,
          changefreq: 'daily',
          priority: 0.7,
          lastmod: new Date().toISOString()
        });
      }
    }
    
    return result;
  },
  
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    includeNonIndexSitemaps: true // 在 robots.txt 中包含所有的 sitemap
  }
};