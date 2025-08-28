import { useEffect, useState } from "react";

const techLogos = [
  {
    name: "Siemens",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Siemens-logo.svg",
    width: "120px"
  },
  {
    name: "Node-RED",
    logo: "https://nodered.org/about/resources/media/node-red-icon-2.svg",
    width: "60px"
  },
  {
    name: "SQL",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
    width: "80px"
  },
  {
    name: "SCADA",
    logo: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
    width: "70px"
  },
  {
    name: "HMI",
    logo: "https://cdn-icons-png.flaticon.com/512/1995/1995515.png",
    width: "70px"
  },
  {
    name: "PLC",
    logo: "https://cdn-icons-png.flaticon.com/512/2103/2103658.png",
    width: "70px"
  },
  {
    name: "Ethernet",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Ethernet_icon.svg",
    width: "70px"
  },
  {
    name: "Pneumática",
    logo: "https://cdn-icons-png.flaticon.com/512/3659/3659899.png",
    width: "70px"
  }
];

export const TechCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex >= techLogos.length - 4 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-background via-muted/20 to-background rounded-lg py-8">
      <div className="flex items-center justify-center">
        <div 
          className="flex transition-transform duration-500 ease-in-out gap-8"
          style={{ 
            transform: `translateX(-${currentIndex * 25}%)`,
            width: `${techLogos.length * 25}%`
          }}
        >
          {techLogos.map((tech, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center bg-background rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-border"
              style={{ minWidth: "200px", height: "120px" }}
            >
              <div className="flex flex-col items-center gap-2">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  style={{ width: tech.width, height: "auto", maxHeight: "60px" }}
                  className="object-contain filter dark:invert"
                />
                <span className="text-sm font-medium text-foreground">{tech.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Gradient overlays for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
    </div>
  );
};