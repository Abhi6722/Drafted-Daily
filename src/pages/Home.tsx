import ComposerNeeded from "../components/ComposerNeeded"
import MainNews from "../components/MainNews"
import NewsCard from "../components/NewsCard"
import PopularArticles from "../components/PopularArticles"
import { articles } from '../data/articles';

const Home = () => {
    const picassoArticle = articles.find(a => a.id === 'picasso-sale');
    const volcanicArticle = articles.find(a => a.id === 'volcanic-eruption');
    const blackFoxArticle = articles.find(a => a.id === 'black-fox');
    const egyptTombArticle = articles.find(a => a.id === 'egypt-tomb');

    return (
        <main className="my-6 border-t-8 border-b-8 border-border">
            <section className="grid grid-cols-4 relative">
                {/* Takes 1 part */}
                <div className="col-span-1 relative p-6">
                    <NewsCard
                        id={picassoArticle?.id || ''}
                        category={picassoArticle?.category || ''}
                        title={picassoArticle?.title || ''}
                        author={picassoArticle?.author || ''}
                        date={new Date(picassoArticle?.publishedAt || '').toLocaleDateString('en-GB')}
                        image={picassoArticle?.image?.src}
                        excerpt={picassoArticle?.fullContent || ''}
                    />
                    {/* First Divider - Triangle at Top */}
                    <div className="absolute top-0 right-0 h-full w-px bg-border before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:border-x-[6px] before:border-t-[9px] before:border-x-transparent before:border-t-border" />
                </div>

                {/* Takes 2 parts */}
                <div className="col-span-2 relative p-6">
                    <MainNews
                        id={volcanicArticle?.id || ''}
                        category={volcanicArticle?.category || ''}
                        title={volcanicArticle?.title || ''}
                        author={volcanicArticle?.author || ''}
                        date={new Date(volcanicArticle?.publishedAt || '').toLocaleDateString('en-GB')}
                        image={volcanicArticle?.image?.src || ''}
                        excerpt={volcanicArticle?.fullContent || ''}
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
                <div className="col-span-2 flex flex-col justify-between">
                    <div className="p-6">
                        <NewsCard
                            id={blackFoxArticle?.id || ''}
                            category={blackFoxArticle?.category || ''}
                            title={blackFoxArticle?.title || ''}
                            author={blackFoxArticle?.author || ''}
                            date={new Date(blackFoxArticle?.publishedAt || '').toLocaleDateString('en-GB')}
                            image={blackFoxArticle?.image?.src}
                            excerpt={blackFoxArticle?.fullContent || ''}
                        />
                    </div>
                    <ComposerNeeded />
                </div>

                {/* Vertical Divider with bottom triangle */}
                <div className="absolute top-0 left-[40%] h-full w-px bg-border before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:border-x-[6px] before:border-b-[9px] before:border-x-transparent before:border-b-border" />

                {/* Right side - 2/3 width */}
                <div className="col-span-3 p-4 pb-0">
                    <MainNews
                        id={egyptTombArticle?.id || ''}
                        category={egyptTombArticle?.category || ''}
                        title={egyptTombArticle?.title || ''}
                        author={egyptTombArticle?.author || ''}
                        date={new Date(egyptTombArticle?.publishedAt || '').toLocaleDateString('en-GB')}
                        image={egyptTombArticle?.image?.src || ''}
                        excerpt={egyptTombArticle?.fullContent || ''}
                        orientation="vertical"
                    />
                </div>
            </section>
        </main>
    )
}

export default Home