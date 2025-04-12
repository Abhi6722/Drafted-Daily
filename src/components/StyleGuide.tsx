import React from 'react';

const StyleGuide = () => {
  return (
    <div className="container py-12 space-y-12">
      {/* Color Palette */}
      <section>
        <h2 className="font-serif text-3xl font-bold mb-6">Color Palette</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-2">
            <div className="h-24 bg-grenadier rounded-lg"></div>
            <p className="font-sans font-medium">Grenadier</p>
            <p className="font-mono text-sm">#D74108</p>
            <p className="text-sm text-muted-foreground">Primary brand color, calls-to-action</p>
          </div>
          <div className="space-y-2">
            <div className="h-24 bg-pearl-bush rounded-lg"></div>
            <p className="font-sans font-medium">Pearl Bush</p>
            <p className="font-mono text-sm">#131112</p>
            <p className="text-sm text-muted-foreground">Text and headings</p>
          </div>
          <div className="space-y-2">
            <div className="h-24 bg-dark-grey rounded-lg"></div>
            <p className="font-sans font-medium">Dark Grey</p>
            <p className="font-mono text-sm">#353535</p>
            <p className="text-sm text-muted-foreground">Secondary text, borders</p>
          </div>
          <div className="space-y-2">
            <div className="h-24 bg-foggy-grey rounded-lg"></div>
            <p className="font-sans font-medium">Foggy Grey</p>
            <p className="font-mono text-sm">#CBC8B9</p>
            <p className="text-sm text-muted-foreground">Backgrounds, disabled states</p>
          </div>
        </div>
      </section>

      {/* Typography - Ibarra Real Nova */}
      <section>
        <h2 className="font-serif text-3xl font-bold mb-6">Typography - Ibarra Real Nova</h2>
        <div className="space-y-6">
          <div>
            <p className="font-serif font-light text-4xl">Light - Headlines, display text</p>
            <p className="font-serif font-normal text-4xl">Regular - Article titles</p>
            <p className="font-serif font-medium text-4xl">Medium - Section headers</p>
            <p className="font-serif font-semibold text-4xl">Semibold - Important callouts</p>
            <p className="font-serif font-bold text-4xl">Bold - Primary headlines</p>
          </div>
        </div>
      </section>

      {/* Typography - Helvetica */}
      <section>
        <h2 className="font-serif text-3xl font-bold mb-6">Typography - Helvetica</h2>
        <div className="space-y-6">
          <div>
            <p className="font-sans font-light text-xl">Light - Subtitles, captions</p>
            <p className="font-sans font-normal text-xl">Regular - Body text, paragraphs</p>
            <p className="font-sans font-medium text-xl">Medium - Navigation, buttons</p>
            <p className="font-sans font-semibold text-xl">Semibold - Important body text</p>
            <p className="font-sans font-bold text-xl">Bold - CTAs, emphasis</p>
          </div>
        </div>
      </section>

      {/* Typography Examples */}
      <section>
        <h2 className="font-serif text-3xl font-bold mb-6">Typography Examples</h2>
        <div className="space-y-8">
          <div>
            <h1 className="display-large mb-4">Main Headline Display</h1>
            <p className="body-large max-w-2xl">This is a sample of body text using Helvetica Regular. It demonstrates the ideal line height and spacing for optimal readability in longer passages of text.</p>
          </div>
          <div>
            <h2 className="display-medium mb-3">Section Header Example</h2>
            <p className="body-medium max-w-2xl">Secondary text showing the relationship between Ibarra Real Nova headers and Helvetica body copy. The contrast between serif and sans-serif creates visual hierarchy.</p>
          </div>
          <div>
            <h3 className="display-small mb-2">Subsection Title</h3>
            <p className="body-small text-muted-foreground">Caption text example using Helvetica Light, ideal for supporting information and metadata.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StyleGuide;