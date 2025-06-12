export default function robots() {
  return {
    rules: [
      // 구글, 빙, 네이버, 다음 등 검색엔진 차단
      {
        userAgent: 'Googlebot',
        disallow: process.env.BLOCK_ROBOTS ? '/' : undefined,
      },
      {
        userAgent: 'Bingbot',
        disallow: process.env.BLOCK_ROBOTS ? '/' : undefined,
      },
      {
        userAgent: 'Yeti',
        disallow: process.env.BLOCK_ROBOTS ? '/' : undefined,
      }, // 네이버
      {
        userAgent: 'Daumoa',
        disallow: process.env.BLOCK_ROBOTS ? '/' : undefined,
      }, // 다음
      // OG 봇 허용
      { userAgent: 'facebookexternalhit', allow: '/' },
      { userAgent: 'Twitterbot', allow: '/' },
      { userAgent: 'Slackbot', allow: '/' },
      // 기타 봇은 허용
      { userAgent: '*', allow: '/' },
    ],
  };
}
