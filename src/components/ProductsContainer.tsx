import { useLoaderData } from "react-router-dom";
import { ProductsGrid, ProductsList } from ".";
import { ProductsResponse } from "@/utils/types";
import { useState } from "react";
import { Button } from "./ui/button";
import { LayoutGrid, List } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";

function ProductsContainer() {
  const { meta } = useLoaderData() as ProductsResponse;
  const totalProducts = meta.pagination.total;
  const [layout, setLayout] = useState<"grid" | "list">("grid");
  return (
    <>
      <section>
        <div className="flex justify-between items-center mt-9">
          <h4 className="font-mediom text-md">
            {totalProducts} product{totalProducts > 1 && "s"}
          </h4>

          <div className="flex gap-x-4">
            <Button
              onClick={() => setLayout("grid")}
              variant={layout === "grid" ? "default" : "ghost"}
              size="icon"
            >
              <LayoutGrid />
            </Button>
            <Button
              onClick={() => setLayout("list")}
              variant={layout === "list" ? "default" : "ghost"}
              size="icon"
            >
              <List />
            </Button>
          </div>
        </div>

        <Separator className="mt-4" />
      </section>
      <div>
        {totalProducts === 0 ? (
          <h5 className="text-2xl mt-16">
            sorry, no products matched your search...
          </h5>
        ) : layout === "grid" ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
      </div>
    </>
  );
}
export default ProductsContainer;
