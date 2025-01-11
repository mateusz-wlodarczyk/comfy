import { Link } from "react-router-dom";
import { HeroCarusel } from ".";
import { Button } from "./ui/button";

function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl">
          we are changing they way people shop
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          earum explicabo quae quibusdam aut, fugiat deleniti dolores fugit
          neque impedit culpa nobis veritatis. Tempore et necessitatibus
          dolorem, corporis libero officia.
        </p>
        <Button asChild size="lg" className="mt-10">
          <Link to="/products">our products</Link>
        </Button>
      </div>
      <HeroCarusel />
    </section>
  );
}
export default Hero;
