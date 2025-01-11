import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";
function HeroCarusel() {
  const carouselImages = [hero1, hero2, hero3, hero4];

  return (
    <>
      <div className="hidden lg:block">
        <Carousel>
          <CarouselContent>
            {carouselImages.map((el, index) => {
              return (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="p-2">
                      <img
                        src={el}
                        alt="hero"
                        className="w-full h-[24rem] rounded-md object-cover"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}
export default HeroCarusel;
