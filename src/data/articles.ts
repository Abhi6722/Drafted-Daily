import { Article } from '../types/article';
import Image1 from '../assets/images/image1.png';
import Image2 from '../assets/images/image2.png';
import Image3 from '../assets/images/image3.png';

export const articles: Article[] = [
  {
    id: 'picasso-sale',
    title: 'Record-Breaking Sale: Rare Picasso Painting Fetches $150 Million at Auction',
    author: 'Johan.S',
    content: 'A never-before-seen Pablo Picasso painting has shattered records, selling for an astonishing $150 million at a Sotheby\'s auction in New York...',
    fullContent: `A never-before-seen Pablo Picasso painting has shattered records, selling for an astonishing $150 million at a Sotheby's auction in New York. The sale marks one of the highest prices ever paid for a work of art.

The newly discovered masterpiece, believed to have been created during Picasso's early career, was unveiled just weeks before the auction, causing a frenzy among collectors and art historians. Sotheby's described the painting as a 'once-in-a-lifetime find' that reflects the genius of Picasso's evolving style. The identity of the buyer has not yet been disclosed, but experts are already calling this sale a monumental moment in art history. The auction house confirmed that the bidding war for the piece was highly competitive, involving collectors from across the globe.

The painting, which had remained in a private collection for over seven decades, represents a crucial transitional period in Picasso's artistic development. Art historians suggest that this work could provide new insights into the evolution of modern art in the early 20th century.

The record-breaking sale has reignited discussions about the value of fine art in today's market and the continuing influence of Picasso's work on contemporary artists and collectors.`,
    image: {
      src: Image2,
      alt: 'Rare Picasso Painting'
    },
    category: 'art',
    priority: 'main',
    publishedAt: '2024-12-24T09:00:00Z'
  },
  {
    id: 'volcanic-eruption',
    title: 'Catastrophic Volcanic Eruption in Indonesia Forces Mass Evacuations',
    author: 'Milea Sandy E',
    content: 'A massive volcanic eruption has struck Indonesia\'s Mount Merapi, sending towering ash clouds into the sky...',
    fullContent: `A massive volcanic eruption has struck Indonesia's Mount Merapi, one of the most active volcanoes in the world, sending towering ash clouds 20,000 feet into the sky and triggering widespread evacuations. Authorities have issued the highest-level alert as lava flows rapidly down the mountainside, threatening nearby villages.

Thousands of residents are fleeing their homes, while emergency services are mobilizing to respond to the disaster. Air traffic has been disrupted, with flights grounded across the region due to ash in the atmosphere, posing a significant hazard to aviation. Seismologists have warned that further eruptions are possible, as the volcano continues to rumble and emit gases. Rescue teams are on high alert, as officials prepare for potential pyroclastic flows and landslides. Residents are being urged to stay in safe zones as efforts to assess the full scale of the damage are underway.

This eruption comes after weeks of increased seismic activity, making it one of the most severe volcanic events in recent history for Indonesia, a country located along the Pacific 'Ring of Fire.'

Local authorities have established emergency shelters and are coordinating with national disaster response teams to ensure the safety of affected communities. Scientists continue to monitor the situation closely, using advanced monitoring equipment to predict potential developments and minimize risk to human life.`,
    image: {
      src: Image1,
      alt: 'Mount Merapi Eruption'
    },
    category: 'catastrophic',
    priority: 'main',
    publishedAt: '2024-12-24T10:00:00Z'
  },
  {
    id: 'black-fox',
    title: 'Conservationist Discovered, Black Fox Species Thought to Have Vanished 1,000 Years Ago',
    author: 'Krilivenko Pattey',
    content: 'In a stunning discovery, a rare black fox species, long believed to have gone extinct, has been found alive...',
    fullContent: `In a stunning discovery, a rarest black foxes species, that long believed to have gone extinct over 1,000 years ago, has been found alive in a remote region of northern of Scotland. The elusive big animal, known only through about ancient records and folklore, was spotted by several team of conservationists during a wildlife survey.

The team responsible for the discovery is right now working with several local authorities and big wildlife experts to get protect the fragile population, which is estimated to be extremely small. Efforts to preserve the fox habitat and ensure theirs survival are already underway.

This remarkable finding has excited the scientific community and wildlife conservationists worldwide. The discovery not only proves the species' survival but also raises hopes for other supposedly extinct species. Researchers are now planning detailed studies of the foxes' behavior, genetics, and habitat requirements to develop effective conservation strategies.

The location of the population is being kept confidential to protect the animals from disturbance while conservation measures are put in place.`,
    image: {
      src: Image2,
      alt: 'Rare Black Fox'
    },
    category: 'art',
    priority: 'secondary',
    publishedAt: '2024-12-24T11:00:00Z'
  },
  {
    id: 'egypt-tomb',
    title: 'Archaeologists Discover World\'s Largest and Oldest Tomb in Egypt',
    author: 'Naheb Abimanyu',
    content: 'A groundbreaking discovery has been made in Egypt, where archaeologists have uncovered the world\'s largest and oldest known tomb...',
    fullContent: `A groundbreaking discovery has been made in Egypt, where archaeologists have uncovered the world's largest and oldest known tomb, dating back over 5,000 years. The massive burial complex, located near the ancient city of Saqgara, is believed to belong to a previously unknown pharaoh from the early dynastic period.

The tomb spans several acres and contains intricate carvings, hieroglyphs, and over 100 burial chambers, some holding well-preserved mummies. Inside, researchers found a treasure trove of artifacts, including gold jewelry, ceremonial weapons, and pottery, offering new insights into early Egyptian civilization.

Excavation teams are calling this discovery one of the most significant finds in decades, as it could rewrite parts of Egypt's history. Experts believe the sheer size and grandeur of the tomb suggest the buried ruler held immense power and influence.

International teams of archaeologists and Egyptologists are now working around the clock to document and preserve the site, with more details expected to emerge in the coming weeks as further chambers are explored.

The discovery has already begun to reshape our understanding of ancient Egyptian civilization and its early development. The artifacts and architectural features found within the tomb complex provide unprecedented insights into the sophistication of early dynastic period construction techniques and burial practices.`,
    image: {
      src: Image3,
      alt: 'Ancient Egyptian Tomb'
    },
    category: 'historical',
    priority: 'main',
    publishedAt: '2024-12-24T12:00:00Z'
  },
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