
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
          <img
            src="/placeholder.svg"
            alt="Step By Step School"
            className="w-12 h-12"
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
