import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { TrendingUp, TrendingDown, Star } from 'lucide-react';

// Mock crypto data
const cryptoData = [
  {
    id: 1,
    symbol: 'BTC',
    name: 'Bitcoin',
    price: 67420.50,
    change24h: 2.5,
    marketCap: '1.32T',
    volume: '28.5B',
    icon: '₿'
  },
  {
    id: 2,
    symbol: 'ETH',
    name: 'Ethereum',
    price: 3845.20,
    change24h: -1.2,
    marketCap: '462.8B',
    volume: '15.2B',
    icon: 'Ξ'
  },
  {
    id: 3,
    symbol: 'BNB',
    name: 'BNB',
    price: 635.80,
    change24h: 4.1,
    marketCap: '97.5B',
    volume: '2.1B',
    icon: '🟡'
  },
  {
    id: 4,
    symbol: 'SOL',
    name: 'Solana',
    price: 185.45,
    change24h: 6.8,
    marketCap: '86.2B',
    volume: '3.8B',
    icon: '◎'
  },
  {
    id: 5,
    symbol: 'XRP',
    name: 'XRP',
    price: 0.6234,
    change24h: -0.8,
    marketCap: '35.4B',
    volume: '1.9B',
    icon: '◐'
  },
  {
    id: 6,
    symbol: 'ADA',
    name: 'Cardano',
    price: 0.4567,
    change24h: 3.2,
    marketCap: '16.1B',
    volume: '892M',
    icon: '♠'
  }
];

const trendingCoins = [
  { symbol: 'PEPE', change: '+45.2%', price: '$0.000012' },
  { symbol: 'WIF', change: '+23.8%', price: '$2.45' },
  { symbol: 'BONK', change: '+18.5%', price: '$0.000023' },
  { symbol: 'FLOKI', change: '+15.3%', price: '$0.000156' },
];

export function MarketOverview() {
  const formatPrice = (price: number) => {
    if (price < 1) {
      return `$${price.toFixed(4)}`;
    }
    return `$${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <section id="markets" className="py-20 bg-gradient-to-b from-background to-green-950/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
            Live Market Data
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stay updated with real-time cryptocurrency prices and market movements
          </p>
        </motion.div>

        {/* Main Crypto Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {cryptoData.map((crypto, index) => (
            <motion.div
              key={crypto.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-green-500/20 hover:border-green-500/40 transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white">
                        {crypto.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{crypto.symbol}</CardTitle>
                        <p className="text-sm text-muted-foreground">{crypto.name}</p>
                      </div>
                    </div>
                    <Star className="w-5 h-5 text-muted-foreground hover:text-yellow-400 cursor-pointer" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold">{formatPrice(crypto.price)}</span>
                      <Badge 
                        variant={crypto.change24h >= 0 ? "default" : "destructive"}
                        className={`${crypto.change24h >= 0 ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30' : ''}`}
                      >
                        {crypto.change24h >= 0 ? (
                          <TrendingUp className="w-3 h-3 mr-1" />
                        ) : (
                          <TrendingDown className="w-3 h-3 mr-1" />
                        )}
                        {Math.abs(crypto.change24h)}%
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Market Cap</p>
                        <p className="font-medium">${crypto.marketCap}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Volume</p>
                        <p className="font-medium">${crypto.volume}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trending Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="bg-gradient-to-r from-green-950/20 to-green-900/10 border-green-500/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-400">
                <TrendingUp className="w-5 h-5" />
                Trending Now
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {trendingCoins.map((coin, index) => (
                  <motion.div
                    key={coin.symbol}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center justify-between p-3 rounded-lg bg-background/50 hover:bg-background/70 transition-colors cursor-pointer"
                  >
                    <div>
                      <p className="font-medium">{coin.symbol}</p>
                      <p className="text-sm text-muted-foreground">{coin.price}</p>
                    </div>
                    <Badge className="bg-green-500/20 text-green-400">
                      {coin.change}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}