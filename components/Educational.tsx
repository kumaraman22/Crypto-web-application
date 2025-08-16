import { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Search, Blocks, Wallet, Cpu, Shield, Zap, Globe } from 'lucide-react';

const educationalCards = [
  {
    icon: Blocks,
    title: 'What is Blockchain?',
    description: 'A decentralized, distributed ledger that records transactions across many computers in a secure and immutable way.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Wallet,
    title: 'Crypto Wallets',
    description: 'Digital tools that store your private keys and allow you to send, receive, and manage your cryptocurrency holdings.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Cpu,
    title: 'Mining & Staking',
    description: 'Methods of validating transactions and securing blockchain networks while earning rewards for participation.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Shield,
    title: 'Security & Safety',
    description: 'Best practices for keeping your crypto safe, including hardware wallets, 2FA, and avoiding common scams.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Zap,
    title: 'DeFi Protocols',
    description: 'Decentralized Finance applications that recreate traditional financial services without intermediaries.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Globe,
    title: 'Web3 & dApps',
    description: 'The next generation of internet applications built on blockchain technology for true decentralization.',
    color: 'from-indigo-500 to-purple-500'
  }
];

const glossaryTerms = [
  { term: 'HODL', definition: 'A crypto slang term meaning to hold onto your cryptocurrency for a long period, derived from "hold".' },
  { term: 'DeFi', definition: 'Decentralized Finance - financial services using smart contracts on blockchain networks.' },
  { term: 'Smart Contract', definition: 'Self-executing contracts with terms directly written into code on the blockchain.' },
  { term: 'NFT', definition: 'Non-Fungible Token - unique digital assets that represent ownership of digital or physical items.' },
  { term: 'DAO', definition: 'Decentralized Autonomous Organization - an organization governed by smart contracts and token holders.' },
  { term: 'Gas Fee', definition: 'The cost required to execute transactions or smart contracts on blockchain networks.' },
  { term: 'Staking', definition: 'Locking up cryptocurrency to support network operations and earn rewards.' },
  { term: 'Liquidity Pool', definition: 'Collections of funds locked in smart contracts that facilitate decentralized trading.' },
  { term: 'Yield Farming', definition: 'Earning rewards by providing liquidity to DeFi protocols.' },
  { term: 'Bull Market', definition: 'A period of rising prices and optimistic market sentiment.' },
  { term: 'Bear Market', definition: 'A period of falling prices and pessimistic market sentiment.' },
  { term: 'FOMO', definition: 'Fear Of Missing Out - the anxiety of missing potential profits from rising prices.' }
];

export function Educational() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const filteredTerms = glossaryTerms.filter(
    item => 
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-20 bg-gradient-to-b from-green-950/5 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
            Learn About Crypto
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Master the fundamentals of cryptocurrency and blockchain technology
          </p>
        </motion.div>

        {/* Educational Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {educationalCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedCard(selectedCard === index ? null : index)}
                className="cursor-pointer"
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-green-500/20 hover:border-green-500/40 transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${card.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-lg">{card.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {card.description}
                    </p>
                    <motion.div
                      initial={false}
                      animate={{ height: selectedCard === index ? 'auto' : 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-border mt-4">
                        <p className="text-sm text-green-400">
                          Click to explore more detailed guides and tutorials about this topic.
                        </p>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Glossary Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="bg-gradient-to-r from-green-950/20 to-green-900/10 border-green-500/30">
            <CardHeader>
              <CardTitle className="text-2xl text-center mb-4">Crypto Glossary</CardTitle>
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search crypto terms..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-background/50"
                />
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredTerms.map((item, index) => (
                  <motion.div
                    key={item.term}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="p-4 rounded-lg bg-background/50 hover:bg-background/70 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                        {item.term}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.definition}
                    </p>
                  </motion.div>
                ))}
              </div>
              {filteredTerms.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  No terms found matching "{searchTerm}"
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}