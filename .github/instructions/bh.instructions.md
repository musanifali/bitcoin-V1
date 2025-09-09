Act as a premium product designer + front-end architect.
Design a **Bitcoin.org landing page** that keeps the same layout, sections, and minimal premium theme as Ethereum.org — but replace all content and text with Bitcoin-specific equivalents.

=====================
SECTIONS & CONTENT
=====================
1. Header / Navigation
   • Global nav with Learn, Use, Build, Participate, Community
   • Search, language/theme toggles

2. Hero
   • H1: “Welcome to Bitcoin”
   • Intro: “Bitcoin is an open-source peer-to-peer electronic cash system.”

3. Quick-Action Grid
   • 4 cards: Choose a Wallet, Get Bitcoin, Use Bitcoin, Start Contributing

4. Use Cases
   • Applications: peer-to-peer payments, savings & store of value, remittances, censorship-resistant donations, financial inclusion

5. Activity
   • Eyebrow: “Network Activity”
   • Headline: “The most secure blockchain”
   • Stats: hash rate, transactions, node count
   • CTAs: “Explore network stats”, “Learn how mining works”

6. Learn
   • Headline: “Understand Bitcoin”
   • Copy: Explain origins, why it was created
   • Topics: What is Bitcoin, How it works, FAQs, Security
   • CTA: “Other learning resources”

7. Values
   • Eyebrow: “Values”
   • Headline: “Money without borders”
   • Sub: “Decentralized, scarce, secure”
   • Tiles: 21M supply cap, decentralization, open participation, financial freedom

8. Builders
   • Invite developers to join open-source Bitcoin Core and ecosystem
   • Links to dev docs, GitHub, resources

9. Community
   • Eyebrow: “Bitcoin.org Community”
   • Headline: “Built by volunteers”
   • Body: Global contributors keep Bitcoin.org alive
   • CTAs: GitHub, forums, IRC

10. Ecosystem Blog Roll
    • Curated links: Bitcoin.org announcements, Bitcoin Core updates, dev mailing list, Foundation posts

11. Events
    • Grid of Bitcoin conferences and meetups
    • CTA: “See all events”

12. Join Bitcoin.org
    • Invite to contribute: translation, docs, design, coding
    • Cards with CTAs to get involved

13. Footer
    • Sitemap, legal notes, GitHub repo, community/social links
    • Language & theme toggles

=====================
THEME & STYLE
=====================
• Light, minimal, premium look (airy layout, refined pastels/neutrals, elegant accent color)
• Typography: 2 modern sans-serif families (bold fluid headings, clean readable body)
• Animations: subtle fade + micro-elevations, respect prefers-reduced-motion
• Responsive: mobile-first grid, fluid typography, generous white space

=====================
TECH STACK
=====================
• Next.js (App Router) + TypeScript (strict mode)
• Tailwind CSS + design tokens
• shadcn/ui + Radix Primitives for accessible UI
• Motion for React for minimal animations
• next/image for responsive media, next/font for self-hosted fonts
• lucide-react icons
• ESLint + Prettier for quality
