import ComposerNeeded from "../components/ComposerNeeded"
import MainNews from "../components/MainNews"
import NewsCard from "../components/NewsCard"
import PopularArticles from "../components/PopularArticles"
import Image1 from '../assets/images/image1.png';
import Image2 from '../assets/images/image2.png';
import Image3 from '../assets/images/image3.png';

const Home = () => {
    return (
        <main className="my-6 border-t-8 border-b-8 border-border">
            <section className="grid grid-cols-4 relative">
                {/* Takes 1 part */}
                <div className="col-span-1 relative p-6">
                    <NewsCard
                        category="Art"
                        title="Record-Breaking Sale: Rare Picasso Painting Fetches $150 Million at Auction"
                        author="Johan.S"
                        date="24/12/2024"
                        image={Image2}
                        excerpt="A never-before-seen Pablo Picasso painting has shattered records, selling for an astonishing $150 million at a Sotheby's auction in New York. The sale marks one of the highest prices ever paid for a work of art.

The newly discovered masterpiece, believed to have been created during Picasso's early career, was unveiled just weeks before the auction, causing a frenzy among collectors and art historians. Sotheby's described the painting as a 'once-in-a-lifetime find' that reflects the genius of Picasso's evolving style. The identity of the buyer has not yet been disclosed, but experts are already calling this sale a monumental moment in art history. The auction house confirmed that the bidding war for the piece was highly competitive, involving collectors from across the globe. This record-breaking sale highlights Picasso's."
                    />
                    {/* First Divider - Triangle at Top */}
                    <div className="absolute top-0 right-0 h-full w-px bg-border before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:border-x-[6px] before:border-t-[9px] before:border-x-transparent before:border-t-border" />
                </div>

                {/* Takes 2 parts */}
                <div className="col-span-2 relative p-6">
                    <MainNews
                        category="Catastrophic"
                        title="Catastrophic Volcanic Eruption in Indonesia Forces Mass Evacuations"
                        author="Milea Sandy E"
                        date="24/12/2024"
                        image={Image1}
                        excerpt="A massive volcanic eruption has struck Indonesia's Mount Merapi, one of the most active volcanoes in the world, sending towering ash clouds 20,000 feet into the sky and triggering widespread evacuations. Authorities have issued the highest-level alert as lava flows rapidly down the mountainside, threatening nearby villages.
                        Thousands of residents are fleeing their homes, while emergency services are mobilizing to respond to the disaster. Air traffic has been disrupted, with flights grounded across the region due to ash in the atmosphere, posing a significant hazard to aviation. Seismologists have warned that further eruptions are possible, as the volcano continues to rumble and emit gases. Rescue teams are on high alert, as officials prepare for potential pyroclastic flows and landslides. Residents are being urged to stay in safe zones as efforts to assess the full scale of the damage are underway.
                        This eruption comes after weeks of increased seismic activity, making it one of the most severe volcanic events in recent history for Indonesia, a country located along the Pacific 'Ring of Fire.'"
                    />
                    {/* Second Divider - Triangle at Bottom */}
                    <div className="absolute top-0 right-0 h-full w-px bg-border before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:border-x-[6px] before:border-b-[9px] before:border-x-transparent before:border-b-border" />
                </div>

                {/* Takes 1 part */}
                <div className="col-span-1">
                    <PopularArticles />
                </div>
            </section>

            {/* //divider */}
            <div className="h-px bg-border relative before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:border-y-[6px] before:border-l-[9px] before:border-y-transparent before:border-l-border" />

            <section className="grid grid-cols-5 relative">
                {/* Left side - 1/3 width */}
                <div className="col-span-2">
                    <div className="p-6">
                        <NewsCard
                            category="Art"
                            title="Conservationist Discovered, Black Fox Species Thought to Have Vanished 1,000 Years Ago"
                            author="Krilivenko Pattey"
                            date="24/12/2024"
                            image={Image2}
                            excerpt="In a stunning discovery, a rarest black foxes species, that long believed to have gone extinct over 1,000 years ago, has been found alive in a remote region of northern of Scotland. The elusive big animal, known only through about ancient records and folklore, was spotted by several team of conservationists during a wildlife survey.

The team responsible for the discovery is right now working with several local authorities and big wildlife experts to get protect the fragile population, which is estimated to be extremely small. Efforts to preserve the fox habitat and ensure theirs survival are already underway."
                        />
                    </div>
                    <ComposerNeeded />
                </div>

                {/* Vertical Divider with bottom triangle */}
                <div className="absolute top-0 left-[40%] h-full w-px bg-border before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:border-x-[6px] before:border-b-[9px] before:border-x-transparent before:border-b-border" />

                {/* Right side - 2/3 width */}
                <div className="col-span-3 p-4 pb-0">
                    <MainNews
                        category="Historical"
                        title="Archaeologists Discover World's Largest and Oldest Tomb in Egypt"
                        author="Naheb Abimanyu"
                        date="24/12/2024"
                        image={Image3}
                        excerpt="A groundbreaking discovery has been made in Egypt, where archaeologists have uncovered the world's largest and oldest known tomb, dating back over 5,000 years. The massive burial complex, located near the ancient city of Saqgara, is believed to belong to a previously unknown pharaoh from the early dynastic period.
The tomb spans several acres and contains intricate carvings, hieroglyphs, and over 100 burial chambers, some holding well-preserved mummies. Inside, researchers found a treasure trove of artifacts, including gold jewelry, ceremonial weapons, and pottery, offering new insights into early Egyptian civilization.
Excavation teams are calling this discovery one of the most significant finds in decades, as it could rewrite parts of Egypt's history. Experts believe the sheer size and grandeur of the tomb suggest the buried ruler held immense power and influence.
International teams of archaeologists and Egyptologists are now working around the clock to document and preserve the site, with more details expected to emerge in the coming weeks as further chambers are explored.
The massive burial complex, located near the ancient city of Saqgara, is believed to belong to a previously unknown pharaoh from the early with more details expected to emerge in the coming week dynastic period."
                        orientation="vertical"
                    />
                </div>
            </section>
        </main>
    )
}

export default Home