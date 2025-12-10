# HomeChain Naija - Crypto Real Estate Platform

A full-stack Web3 application for buying, renting, and managing properties in Nigeria using cryptocurrency.

## 🚀 Features

### Core Features
- **Crypto Wallet Integration**: Connect with MetaMask or WalletConnect
- **Property Marketplace**: Browse and search properties for rent or sale
- **Multi-Crypto Support**: Pay with USDC, USDT, ETH, BTC, or NGNX
- **Escrow Smart Contracts**: Secure payments held until transaction confirmation
- **NFT Property Certificates**: Blockchain-verified ownership certificates
- **Artisan Marketplace**: Hire verified plumbers, electricians, painters, and carpenters
- **Escrow-Based Payments**: Secure payments for artisan services
- **Admin Dashboard**: Verify agents, approve listings, and resolve disputes

### User Roles
- **Regular Users**: Browse and purchase/rent properties, hire artisans
- **Verified Agents**: List and manage properties
- **Property Developers**: List multiple properties
- **Artisans**: Offer services and receive crypto payments
- **Admins**: Manage platform operations and verifications

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Web3**: Wagmi, Viem, Ethers.js
- **State Management**: Zustand
- **Blockchain**: Ethereum Mainnet
- **Icons**: Lucide React
- **Deployment**: Cloudflare Pages (via OpenNext)

## 📦 Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Deploy to Cloudflare
pnpm deploy
```

## 🌐 Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id_here
```

Get your WalletConnect Project ID from: https://cloud.walletconnect.com/

## 📱 Pages

- `/` - Homepage with platform overview
- `/properties` - Browse all properties
- `/properties/[id]` - Property details and payment
- `/artisans` - Browse artisan marketplace
- `/dashboard` - User dashboard (requires wallet connection)
- `/admin` - Admin panel for platform management

## 💰 Supported Cryptocurrencies

- **USDC** (USD Coin)
- **USDT** (Tether)
- **ETH** (Ethereum)
- **BTC** (Bitcoin)
- **NGNX** (Nigerian Naira Stablecoin)

## 🔐 Security Features

- Smart contract escrow for all transactions
- Verified agents and artisans only
- Admin approval for property listings
- Dispute resolution system
- On-chain ownership verification

## 🎨 Key Components

### Property Features
- High-quality image galleries
- Detailed property information
- Location mapping
- Agent contact details
- Real-time crypto price conversion
- Secure payment modal

### Artisan Features
- Category-based filtering (plumber, electrician, painter, carpenter)
- Skill and experience display
- Hourly rate in multiple cryptocurrencies
- Availability status
- Rating and review system
- Job escrow system

### Admin Features
- Agent verification workflow
- Property approval system
- Artisan verification
- Dispute management
- Platform statistics

## 🚧 Future Enhancements

- [ ] Implement actual smart contracts for escrow
- [ ] Add real-time chat between users and agents
- [ ] Integrate with property APIs for real listings
- [ ] Add KYC verification for agents
- [ ] Implement NFT minting for property certificates
- [ ] Add multi-language support (English, Yoruba, Igbo, Hausa)
- [ ] Mobile app development
- [ ] Integration with Nigerian payment gateways
- [ ] Property inspection scheduling
- [ ] Virtual property tours
- [ ] Mortgage calculator with crypto
- [ ] Rental payment automation

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support, email support@homechain.ng or join our Telegram community.

---

Built with ❤️ for the Nigerian real estate market

