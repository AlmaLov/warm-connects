
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="w-24 h-24">
          <img
            src="/lovable-uploads/bcb7c699-7ee5-432a-93c4-d485974d8b54.png"
            alt="Step By Step School"
            className="w-full h-full object-contain"
          />
        </div>
        <Button
          className="bg-peach hover:bg-peach-light text-white transition-colors duration-300 py-6"
          variant="ghost"
        >
          Login/Sign up
        </Button>
      </div>
    </header>
  );
};

export default Header;
