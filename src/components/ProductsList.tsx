import { ProductsResponse } from "@/utils/types";
import { Link, useLoaderData } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import { formatAsDollars } from "@/utils/formatDataAsDollars";

function ProductsList() {
  const { data: products } = useLoaderData() as ProductsResponse;
  return (
    <>
      <div className="mt-12 grid gap-y-8">
        {products.map((el) => {
          const { title, price, image, company } = el.attributes;
          const collarsAmount = formatAsDollars(price);
          return (
            <>
              <Link key={el.id} to={`/products/${el.id}`}>
                <Card>
                  <CardContent className="p-8 gap-y-4 grid md:grid-cols-3">
                    <img
                      src={image}
                      alt={title}
                      className="h-64 w-full md:h-48 md:w-48 rouned-md object-cover"
                    />

                    <div>
                      <h2 className="text-xl font-semibold capitalize">
                        {title}
                      </h2>
                      <h4>{company}</h4>
                    </div>
                    <p className="text-primary md:ml-auto">{collarsAmount}</p>
                  </CardContent>
                </Card>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
}
export default ProductsList;
