import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | KnightSwap',
  defaultTitle: 'KnightSwap',
  description:
    'KnightSwap is the preeminent decentralized exchange (DEX) on Binance Smart Chain (BSC)  built for reliable & sustainable yields while providing the highest quality Decentralized Finance (DeFi) experience',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@KnightSwap',
    site: '@KnightSwap',
  },
  openGraph: {
    title: '🥞 KnightSwap - A next evolution DeFi exchange on BNB Smart Chain (BSC)',
    description:
      'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by PancakeSwap), NFTs, and more, on a platform you can trust.',
    images: [{ url: 'https://assets.pancakeswap.finance/web/og/v2/hero.jpg' }],
  },
}
