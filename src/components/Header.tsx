
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="w-[174px] h-[156px]" style={{ position: 'relative', top: '50px', left: '79px' }}>
          <img
            src="/lovable-uploads/bcb7c699-7ee5-432a-93c4-d485974d8b54.png"
            alt="Step By Step School"
            className="w-full h-full object-contain"
          />
        </div>
        <Button
          className="w-[156px] h-[48px] rounded-none bg-[#EE5023] hover:bg-[#EE5023]/90 text-white transition-colors duration-300"
          variant="ghost"
          style={{ position: 'relative', top: '54px', left: '0' }}
        >
          Login/Sign up
        </Button>
      </div>
    </header>
  );
};

export default Header;
