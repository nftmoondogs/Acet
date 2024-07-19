import { Button } from "~/components/ui/button";
import { Link } from "@remix-run/react";
import { Command } from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";
import { ThemeToggle } from "./resources.theme-toggle";
import { Hero3DCard } from "~/components/hero-3d-card";
import { Card2 } from "~/components/card2";
import { SparklesCore } from "~/components/ui/sparkles";
import { LampDemo } from "~/components/ui/lamp";
import { CardStack } from "~/components/ui/card-stack"; 

import { TextRevealCard, TextRevealCardTitle, TextRevealCardDescription } from "~/components/ui/text-reveal-card";
import { AnimatedTooltipPreview } from "~/components/animated-preview";
import { HeroParallax } from "~/components/ui/hero-parallax";  // Corrected import path
import { AnimatedPinDemo } from "~/components/animated-3d-pin";


const stackCards = [
  {
    id: 1,

    content: (
<div>
  <h3 className="text-lg font-bold pb-8">Sup! Dawg👋</h3>

  <ul className="list-disc list-inside text-left">

    <li>See for yourself Dev is a chad</li>
    <li>The Art is sick and memeable af</li>
    <li>Dexscreener, Coingecko requested</li>
    <li>Active Tweets and Spaces</li>
    <li>Foot is Pink🤯🩷</li>
  </ul>
</div>

    )
  }
];
// Sample product data for HeroParallax
const sampleProducts = [
  { title: "", link: "/product-1", thumbnail: "https://pixura.imgix.net/https%3A%2F%2Fstorage.googleapis.com%2Fsr_prod_artworks_bucket%2F0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0%252F30468%252F9rj2mg?ixlib=js-3.8.0&w=550&h=550&fit=crop&q=75&auto=format%2Ccompress&s=283620c177554aecb43591af78d057e1" },
  { title: "", link: "/product-2", thumbnail: "https://pixura.imgix.net/https%3A%2F%2Fstorage.googleapis.com%2Fsr_prod_artworks_bucket%2F0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0%252F25860%252Ff47c632e-9fe3-4aac-97ec-b9f6198b3060%252Fimage%252Fimage-2023-08-31-19-26-ltmqn?ixlib=js-3.8.0&w=550&h=550&fit=crop&q=75&auto=format%2Ccompress&s=9e632c8bfa4a32d1b8e613db29102fa4" },
  { title: "", link: "/product-3", thumbnail: "https://pixura.imgix.net/https%3A%2F%2Fstorage.googleapis.com%2Fsr_prod_artworks_bucket%2F0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0%252F24267%252F0e3d95ad-e69e-4fc0-8ba8-7de222ce81ba%252Fimage%252Fimage-2023-08-31-19-02-mt3kag?ixlib=js-3.8.0&w=550&h=550&fit=crop&q=75&auto=format%2Ccompress&s=455e155af30bf11b238ae28a59608702" },
  { title: "", link: "/product-4", thumbnail: "https://pixura.imgix.net/https%3A%2F%2Fstorage.googleapis.com%2Fsr_prod_artworks_bucket%2F0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0%252F26061%252F4ccf8a1a-8a9b-480c-85ab-e86ecdd3e95d%252Fimage%252Fimage-2023-09-08-02-02-s38ho?ixlib=js-3.8.0&w=550&h=550&fit=crop&q=75&auto=format%2Ccompress&s=88cd59d89715feb36a22e83ba12084d6" },
  { title: "", link: "/product-5", thumbnail: "https://pixura.imgix.net/https%3A%2F%2Fstorage.googleapis.com%2Fsr_prod_artworks_bucket%2F0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0%252F31497%252F4e1616b3-6718-443e-bec6-5af786887e1f%252Fimage%252Fimage-2023-09-08-14-08-2ynmz?ixlib=js-3.8.0&w=550&h=550&fit=crop&q=75&auto=format%2Ccompress&s=7fef7fe700fb9651abd1a8dc9c65a19c" },
  { title: "", link: "/product-6", thumbnail: "https://pixura.imgix.net/https%3A%2F%2Fstorage.googleapis.com%2Fsr_prod_artworks_bucket%2F0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0%252F32310%252Fulpq8?ixlib=js-3.8.0&w=550&h=550&fit=crop&q=75&auto=format%2Ccompress&s=e9e810bdd3db2ab2bd667bb3eb319737" },
  { title: "", link: "/product-7", thumbnail: "https://pixura.imgix.net/https%3A%2F%2Fstorage.googleapis.com%2Fsr_prod_artworks_bucket%2F0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0%252F30833%252Fif9iz?ixlib=js-3.8.0&w=550&h=550&fit=crop&q=75&auto=format%2Ccompress&s=1ca01944006d74a59a2432674128e834" },
  { title: "", link: "/product-8", thumbnail: "https://pixura.imgix.net/https%3A%2F%2Fstorage.googleapis.com%2Fsr_prod_artworks_bucket%2F0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0%252F29862%252F62748e59-1fc8-4c23-b5ff-c54cffff6b3b%252Fimage%252Fimage-2023-09-08-16-23-z7ni2?ixlib=js-3.8.0&w=550&h=550&fit=crop&q=75&auto=format%2Ccompress&s=db7896a006d9f70e51a018d2c3655eaf" },
  { title: "", link: "/product-9", thumbnail: "https://pixura.imgix.net/https%3A%2F%2Fstorage.googleapis.com%2Fsr_prod_artworks_bucket%2F0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0%252F30585%252Fbh1ml?ixlib=js-3.8.0&w=550&h=550&fit=crop&q=75&auto=format%2Ccompress&s=756116d13a2a21d8f6ae989b750685c9" },
  { title: "", link: "/product-10", thumbnail: "https://pixura.imgix.net/https%3A%2F%2Fstorage.googleapis.com%2Fsr_prod_artworks_bucket%2F0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0%252F27639%252F13ee39f5-b9e8-4667-8ce9-83c276949bab%252Fimage%252Fimage-2023-09-08-15-21-fdsik?ixlib=js-3.8.0&w=550&h=550&fit=crop&q=75&auto=format%2Ccompress&s=7a7ab678ed25fff05ac1bd58e0d283a8" },
  { title: "", link: "/product-11", thumbnail: "https://pixura.imgix.net/https%3A%2F%2Fstorage.googleapis.com%2Fsr_prod_artworks_bucket%2F0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0%252F32109%252Foajfzk?ixlib=js-3.8.0&w=550&h=550&fit=crop&q=75&auto=format%2Ccompress&s=72b970a1cce5a45d4b0316bcd6b60e46" },
  { title: "", link: "/product-12", thumbnail: "https://pixura.imgix.net/https%3A%2F%2Fstorage.googleapis.com%2Fsr_prod_artworks_bucket%2F0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0%252F30968%252Fln88j?ixlib=js-3.8.0&w=550&h=550&fit=crop&q=75&auto=format%2Ccompress&s=217498fce5ddc3669398d1b8fb8c3187" },
  { title: "", link: "/product-13", thumbnail: "https://pixura.imgix.net/https%3A%2F%2Fstorage.googleapis.com%2Fsr_prod_artworks_bucket%2F0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0%252F27998%252Facbc2cdd-af93-4bb5-8d11-cbc790f5ea23%252Fimage%252Fimage-2023-09-08-15-29-grto6?ixlib=js-3.8.0&w=550&h=550&fit=crop&q=75&auto=format%2Ccompress&s=3c86a634d17f83c9bedf92ab9b15d814" },
  { title: "", link: "/product-14", thumbnail: "https://pixura.imgix.net/https%3A%2F%2Fstorage.googleapis.com%2Fsr_prod_artworks_bucket%2F0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0%252F29444%252Fcd278f0f-bf71-4978-b162-49029aff40f4%252Fimage%252Fimage-2023-09-08-16-16-i2s5v?ixlib=js-3.8.0&w=550&h=550&fit=crop&q=75&auto=format%2Ccompress&s=53c1224b697920b283017a22ef64aef6" },
  { title: "", link: "/product-15", thumbnail: "https://pixura.imgix.net/https%3A%2F%2Fstorage.googleapis.com%2Fsr_prod_artworks_bucket%2F0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0%252F30468%252F9rj2mg?ixlib=js-3.8.0&w=550&h=550&fit=crop&q=75&auto=format%2Ccompress&s=283620c177554aecb43591af78d057e1" },
];

export default function Index() {
  return (
    <section className="w-full min-h-screen flex flex-col">
<nav className="flex items-center justify-between p-4 w-full">
  <Link to="/" className="flex items-center space-x-2">
    <img src="https://pixura.imgix.net/https%3A%2F%2Fstorage.googleapis.com%2Fsr_prod_artworks_bucket%2F0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0%252F31570%252F08edd7b8-1a48-481f-b442-94e18eed4bc1%252Fimage%252Fimage-2023-08-31-21-52-6ho5g?ixlib=js-3.8.0&w=550&h=550&fit=crop&q=75&auto=format%2Ccompress&s=27468eb367d257cf7caeb9d20b033395" alt="Logo" className="h-20 w-20 mr-2"/> {/* Logo Image */}
    <h1 className="text-3xl md:text-4xl font-bold tracking-tighter font-extrabold bg-gradient-to-r from-fuchsia-200 via-fuchsia-500 to-fuchsia-50 text-transparent bg-clip-text bg-300% animate-gradient">$PinkFoot</h1>
  </Link>
  <ThemeToggle />
</nav>



      <div className="flex items-center justify-center  w-full ">
        <div className="flex flex-col items-center space-y-4 text-center p-4 md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
            The{" "}
            <span className="font-extrabold bg-gradient-to-r from-fuchsia-200 via-fuchsia-500 to-fuchsia-50 text-transparent bg-clip-text bg-300% animate-gradient">
              $PinkFoot
            </span>{" "}
            Token PreSale is now live on{" "}
            <Link
              to="https://pump.fun/board"
              className="font-extrabold bg-gradient-to-r from-emerald-100 via-emerald-500 to-emerald-50 text-transparent bg-clip-text bg-300% animate-gradient hover:text-emerald-500"
            >
              Pump.Fun💊
            </Link>
          </h1>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
  <Card className="relative group overflow-hidden rounded-lg">
    <CardContent className="p-1 bg-gradient-to-r from-gray-200 via-gray-600 to-gray-950 bg-300% animate-gradient">
      <Button asChild>
        <Link to="https://twitter.com/pinkfootsol">
          Twitter/𝕏
        </Link>
      </Button>
    </CardContent>
  </Card>
  <Card className="relative group overflow-hidden rounded-lg">
    <CardContent className="p-1 bg-gradient-to-r from-white via-blue-500 to-blue-700 bg-300% animate-gradient">
      <Button asChild>
        <Link to="https://t.me/pinkfoottelegram">
          Telegram
        </Link>
      </Button>
    </CardContent>
  </Card>
  <button className="px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
  <Link to="https://pump.fun/GVYmxw1chkQLbdHcKCwC2X9vg4v9HV3ADX7zWrJBpump">
        Buy from Pump.Fun💊
        </Link>
      </button>
</div>




<div className="flex-1 min-w-0">
    <CardStack
      items={stackCards}
      offset={30}
      scaleFactor={0.95}
    />
  </div>

  <div className="flex items-center justify-center space-x-4"> 
  <div className="flex items-center justify-center  w-full">
    <TextRevealCard
      text="Hover to reveal"
      revealText="Radium is coming!"
      className="cursor-pointer md:w-full"
    />
  </div>
</div>


<div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
  
          <Hero3DCard />
          
          <Card2 />
          <SparklesCore
        className="absolute top-0 left-0 w-full h-full z-[-1]"
        particleColor="#FFC0CB"  // White particles
        particleDensity={10}     // Moderate density
        speed={3}                // Medium speed
        minSize={1}              // Minimum size of particles
        maxSize={3}              // Maximum size of particles
      />
          </div>





          </div>
          {/* <LampDemo />  */}
        </div>
        
<div className="flex items-center justify-between p-4 w-full">          <HeroParallax products={sampleProducts} />  {/* Full-width HeroParallax component */}</div>
    </section>
  );
}
