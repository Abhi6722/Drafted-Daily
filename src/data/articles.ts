import { Article } from '../types/article';

export const articles: Article[] = [
  {
    id: '1',
    title: 'Historic Climate Agreement Reached at Global Summit',
    subtitle: 'World leaders commit to ambitious carbon reduction targets',
    author: 'Sarah Johnson',
    content: 'In a landmark decision, representatives from 195 countries have agreed to unprecedented measures to combat climate change...',
    fullContent: `In a landmark decision that will reshape global environmental policy for decades to come, representatives from 195 countries have unanimously agreed to unprecedented measures to combat climate change at the 2025 Global Climate Summit in Geneva.

The agreement, dubbed the "Geneva Accord," sets binding targets for carbon emission reductions across all participating nations, with developed countries pledging to achieve carbon neutrality by 2040. Developing nations will follow a modified timeline, reaching the same goal by 2050, with substantial financial and technological support from their developed counterparts.

Key provisions of the agreement include:
• A global carbon pricing mechanism
• Massive investment in renewable energy infrastructure
• Protection of critical forest systems and biodiversity
• Creation of a $100 billion annual climate adaptation fund

"This is more than just another climate agreement," said UN Secretary-General António Guterres. "It represents a fundamental shift in how we approach our relationship with the planet."

The accord has been praised by environmental groups worldwide, though some critics argue that the timeline should be even more aggressive given the accelerating pace of climate change.`,
    image: {
      src: 'https://images.unsplash.com/photo-1620316462488-4e3f6f5bf8cd',
      alt: 'Global Climate Summit'
    },
    category: 'news',
    priority: 'main',
    publishedAt: '2025-03-15T09:00:00Z',
    relatedArticles: []
  },
  {
    id: '2',
    title: 'Tech Innovation Transforms Healthcare',
    author: 'Michael Chen',
    content: 'Breakthrough developments in artificial intelligence are revolutionizing how doctors diagnose and treat patients...',
    fullContent: `Artificial intelligence is fundamentally transforming healthcare delivery, with new breakthroughs promising to revolutionize everything from diagnosis to treatment planning. Leading medical institutions worldwide are implementing AI-powered systems that can analyze medical images, predict patient outcomes, and even assist in surgical procedures with unprecedented accuracy.

At the forefront of this revolution is the newly developed AI system at Mayo Clinic, which has demonstrated a 99% accuracy rate in detecting early-stage cancers - a significant improvement over traditional methods. "We're seeing AI catch things that even experienced radiologists might miss," explains Dr. Sarah Williams, head of AI implementation at Mayo Clinic.

The implications for patient care are profound:
• Faster and more accurate diagnoses
• Personalized treatment plans based on genetic profiles
• Reduced healthcare costs through improved efficiency
• Better prediction of patient outcomes

However, medical professionals emphasize that AI will augment rather than replace human doctors. "The goal is to enhance human capability, not substitute it," says Dr. Williams.`,
    category: 'news',
    priority: 'secondary',
    publishedAt: '2025-03-15T10:30:00Z',
    image: {
      src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d',
      alt: 'Modern hospital technology'
    }
  },
  {
    id: '3',
    title: 'Local Arts Festival Draws Record Crowds',
    author: 'Emily Rodriguez',
    content: 'The city\'s annual arts festival attracted over 50,000 visitors this weekend, showcasing works from both established and emerging artists...',
    fullContent: `The Metropolitan Arts Festival has shattered all previous attendance records, drawing more than 50,000 visitors to the city center this weekend. The three-day event, now in its 15th year, featured an unprecedented array of visual arts, performances, and interactive installations from both established and emerging artists.

This year's festival introduced several innovative elements:
• Virtual reality art exhibitions
• Live collaborative murals
• Interactive sound installations
• Pop-up performance spaces throughout the city

"We wanted to break down the barriers between artists and audience," explains Festival Director Maria Santos. "Art should be accessible, interactive, and part of our daily lives."

Local businesses reported a significant boost in revenue during the festival, with hotels reaching full capacity and restaurants experiencing hour-long wait times. The economic impact is estimated at $3.5 million for the local economy.

The festival's success has already led to discussions about expanding next year's event to accommodate the growing interest.`,
    category: 'arts',
    priority: 'tertiary',
    publishedAt: '2025-03-15T11:00:00Z',
    image: {
      src: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea',
      alt: 'Arts Festival'
    }
  },
  {
    id: '4',
    title: 'Revolutionary Electric Aircraft Makes First Flight',
    author: 'James Wilson',
    content: 'The world\'s first fully electric commercial aircraft completed its maiden voyage, marking a historic milestone in aviation...',
    fullContent: `In a historic achievement for sustainable aviation, the world's first fully electric commercial aircraft successfully completed its maiden voyage yesterday. The E-175, developed by AeroTech Industries, flew for 90 minutes, covering a distance of 300 miles while carrying 100 passengers.

The revolutionary aircraft features:
• Advanced lithium-air batteries with unprecedented energy density
• Regenerative braking system during landing
• Ultra-efficient electric motors
• Smart energy management system

"This flight marks the beginning of a new era in aviation," said AeroTech CEO Lisa Chen. "We've proven that electric commercial flight is not just possible, but practical."

The development has major implications for the aviation industry's carbon footprint, with estimates suggesting that widespread adoption of electric aircraft could reduce aviation-related emissions by up to 80% by 2040.`,
    category: 'news',
    priority: 'secondary',
    publishedAt: '2025-03-15T12:00:00Z',
    image: {
      src: 'https://images.unsplash.com/photo-1559627755-42213a8b59c6',
      alt: 'Electric Aircraft'
    }
  }
];