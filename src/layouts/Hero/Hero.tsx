import { Badges } from "@components";

const Hero = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <Badges
        content="Alpha Version"
        variant="primaryOutline"
        glowMode="pulse"
        className="min-w-xs rounded-full px-10 py-3 text-xs font-bold uppercase"
      />
      {/* Badge */}
      {/* Hero Title */}
      {/* Hero Subtitle */}
      {/* Call to Action Buttons */}
    </div>
  );
};

export default Hero;
export { Hero };
