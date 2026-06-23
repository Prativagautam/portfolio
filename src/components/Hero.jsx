import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-[calc(80vh-4rem)]  flex items-center px-6 pt-16  max-w-6xl mx-auto">

      {/* Left side — text content */}
      <div className="flex-1 flex flex-col gap-6">
        {/* <p className="text-xs font-medium tracking-widest uppercase text-pink-500">
          Available for work
        </p> */}
        <h1 className="text-5xl font-normal leading-tight text-gray-700">Hi, I'm <span className=" text-pink-500" >Prativa </span>Gautam</h1>
        <p className=" font-medium tracking-widest uppercase text-gray-400">Frontend Developer</p>
        <p className="text-base text-gray-500 leading-relaxed max-w-md">
          Passionate about building clean, accessible and scalable web interfaces with modern frontend technologies
         
        </p>
        <div className="flex items-center gap-4 pt-2">
          <Button 
          asChild
          className="bg-gray-900 shadow-sm hover:shadow-md hover:bg-gray-700  transition-all duration-200 hover:-translate-y-0.5 text-white text-sm px-6 rounded-md">
            <a href ="#projects">View my work</a>

            </Button>
       
          <Button
          
            asChild
            variant="outline"
            className="border-pink-400 text-pink-500 hover:-translate-y-0.5 hover:bg-pink-50 hover:text-pink-600 transition-all duration-200 text-sm px-6"
          >
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Download CV
            </a>
          </Button>
        </div>
      </div>

      {/* Right side — photo */}
      <div className="flex-1 flex justify-center items-center">
          <div className="w-80 h-80 rounded-2xl overflow-hidden bg-pink-50 border border-pink-100">
          <img
            src="https://placehold.co/320x320"
            alt="Prativa Gautam"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </section>
  );
};

export default Hero;