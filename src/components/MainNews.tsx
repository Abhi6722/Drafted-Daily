import { Share2 } from 'lucide-react';

interface MainNewsProps {
  category: string;
  title: string;
  author: string;
  date: string;
  image: string;
  excerpt: string;
  orientation?: 'vertical' | 'horizontal';
}

const MainNews = ({
  category,
  title,
  author,
  date,
  image,
  excerpt,
  orientation = 'horizontal'
}: MainNewsProps) => {
  if (orientation === 'vertical') {
    return (
      <article className="space-y-0">
        {/* Title Box */}
        <div className="border border-border p-4">
          <h2 className="font-serif text-3xl font-bold leading-tight text-foreground">
            {title}
          </h2>

          <div className="mt-2">
            <hr className="border-t border-text-primary mb-2" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="text-text-secondary">{category}</span>
                <span className="text-text-accent">&#9670;</span>
                <span className="text-text-secondary whitespace-nowrap">{author}</span>
                <span className="text-text-accent">&#9670;</span>
                <span className="text-text-secondary">{date}</span>
              </div>
              <Share2 className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </div>

        <div className="flex gap-6 py-4 pb-0">
          {/* Image with container to match content height */}
          <div className="w-1/2">
            <img
              src={image}
              alt={title}
              className="w-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="w-1/2">
            <div className="text-muted-foreground text-justify">
              {excerpt.split('\n').map((paragraph, index) => (
                <p key={index} className="text-sm leading-5 mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="space-y-3">
      {/* Title Box */}
      <div className="border border-border p-4">
        <h2 className="font-serif text-3xl font-bold leading-tight text-foreground">
          {title}
        </h2>

        <div className="mt-2">
          <hr className="border-t border-text-primary mb-2" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="text-text-secondary">{category}</span>
              <span className="text-text-accent">&#9670;</span>
              <span className="text-text-secondary whitespace-nowrap">{author}</span>
              <span className="text-text-accent">&#9670;</span>
              <span className="text-text-secondary">{date}</span>
            </div>
            <Share2 className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </div>

      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-[250px] object-cover"
      />

      {/* Content */}
      <div className="space-y-4 text-muted-foreground text-justify">
        {excerpt.split('\n').map((paragraph, index) => (
          <p key={index} className="text-sm leading-5">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
};

export default MainNews;