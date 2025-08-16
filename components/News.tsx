import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Clock, ExternalLink, User, Calendar, TrendingUp } from 'lucide-react';

const newsArticles = [
  {
    id: 1,
    title: 'Bitcoin Reaches New All-Time High Amid Institutional Adoption',
    excerpt: 'Major corporations continue to add Bitcoin to their treasury reserves as regulatory clarity improves worldwide.',
    source: 'Crypto Daily',
    timestamp: '2 hours ago',
    category: 'Bitcoin',
    image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=400&h=200&fit=crop'
  },
  {
    id: 2,
    title: 'Ethereum 2.0 Staking Rewards Hit Record Levels',
    excerpt: 'Validators are seeing increased yields as network activity surges and more ETH is locked in staking contracts.',
    source: 'DeFi Pulse',
    timestamp: '4 hours ago',
    category: 'Ethereum',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=200&fit=crop'
  },
  {
    id: 3,
    title: 'Central Bank Digital Currencies Gain Momentum in Asia',
    excerpt: 'Several Asian countries announce pilot programs for their national digital currencies, marking a shift in monetary policy.',
    source: 'Global Finance',
    timestamp: '6 hours ago',
    category: 'CBDC',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=200&fit=crop'
  },
  {
    id: 4,
    title: 'DeFi TVL Surpasses $100 Billion Milestone',
    excerpt: 'Total Value Locked in DeFi protocols reaches historic highs as yield farming and liquidity mining gain popularity.',
    source: 'DeFi Llama',
    timestamp: '8 hours ago',
    category: 'DeFi',
    image: 'https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=400&h=200&fit=crop'
  }
];

const blogHighlights = [
  {
    id: 1,
    title: 'The Complete Guide to Cryptocurrency Trading for Beginners',
    author: 'Sarah Chen',
    date: 'Dec 15, 2024',
    readTime: '8 min read',
    tags: ['Trading', 'Beginner'],
    featured: true
  },
  {
    id: 2,
    title: 'Understanding Smart Contracts: Beyond the Hype',
    author: 'Michael Rodriguez',
    date: 'Dec 12, 2024',
    readTime: '6 min read',
    tags: ['Technology', 'Smart Contracts']
  },
  {
    id: 3,
    title: 'Top 10 Security Practices for Crypto Investors',
    author: 'Emma Thompson',
    date: 'Dec 10, 2024',
    readTime: '12 min read',
    tags: ['Security', 'Investment']
  }
];

export function News() {
  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Bitcoin': 'bg-orange-500/20 text-orange-400',
      'Ethereum': 'bg-blue-500/20 text-blue-400',
      'DeFi': 'bg-purple-500/20 text-purple-400',
      'CBDC': 'bg-green-500/20 text-green-400',
      'Trading': 'bg-yellow-500/20 text-yellow-400',
      'Technology': 'bg-cyan-500/20 text-cyan-400',
      'Security': 'bg-red-500/20 text-red-400',
      'Investment': 'bg-emerald-500/20 text-emerald-400'
    };
    return colors[category] || 'bg-gray-500/20 text-gray-400';
  };

  return (
    <section id="news" className="py-20 bg-gradient-to-b from-background to-green-950/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
            Latest News & Updates
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stay informed with the latest developments in the cryptocurrency world
          </p>
        </motion.div>

        {/* News Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {newsArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-green-500/20 hover:border-green-500/40 transition-all duration-300 overflow-hidden group cursor-pointer">
                <div className="aspect-video bg-gradient-to-r from-green-600/20 to-green-400/20 flex items-center justify-center">
                  <TrendingUp className="w-12 h-12 text-green-400" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getCategoryColor(article.category)}>
                      {article.category}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="w-3 h-3 mr-1" />
                      {article.timestamp}
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-green-400 transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {article.source}
                    </span>
                    <Button variant="ghost" size="sm" className="text-green-400 hover:text-green-300">
                      Read More
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Blog Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="bg-gradient-to-r from-green-950/20 to-green-900/10 border-green-500/30">
            <CardHeader>
              <CardTitle className="text-2xl text-center mb-6">Featured Articles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {blogHighlights.map((blog, index) => (
                  <motion.div
                    key={blog.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`p-4 rounded-lg bg-background/50 hover:bg-background/70 transition-colors cursor-pointer ${
                      blog.featured ? 'border border-green-500/30' : ''
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          {blog.featured && (
                            <Badge className="bg-yellow-500/20 text-yellow-400">
                              Featured
                            </Badge>
                          )}
                          <div className="flex gap-1">
                            {blog.tags.map((tag) => (
                              <Badge
                                key={tag}
                                variant="secondary"
                                className={getCategoryColor(tag)}
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <h3 className="font-semibold text-lg mb-2 hover:text-green-400 transition-colors">
                          {blog.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            {blog.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {blog.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {blog.readTime}
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="text-green-400 hover:text-green-300">
                        Read Article
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </Button>
                    </div>
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