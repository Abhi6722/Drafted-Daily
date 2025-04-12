import Composer from "../assets/images/composer.png"

const ComposerNeeded = () => {
    const requirements = [
      "For male / female that between 23 - 50 YO",
      "Have a good and crazy taste of music",
      "Have 2 years of experience in music",
      "Can play a lot of music instrument",
      "Can stay in New York right now",
      "Can play a lot of music instrument"
    ];
  
    return (
      <div className="bg-card-background border border-r-0 border-border p-6">
        <div className="flex gap-4">
          {/* Left side - Image */}
          <div className="w-[40%]">
            <img 
              src={Composer} 
              alt="Composer" 
              className="w-full aspect-square object-cover" 
            />
          </div>

          {/* Right side - Content */}
          <div className="w-1/2">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-lg font-serif text-foreground">Composer Needed Now!</h3>
            </div>

            <ul className="space-y-2">
              {requirements.map((req, index) => (
                <li key={index} className="flex gap-2 text-sm text-text-primary">
                  <span className="text-text-primary">{index + 1}.</span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default ComposerNeeded;