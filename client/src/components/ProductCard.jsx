"use client";
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function ProductCard({
  product
}) {
  return (
    (<Card className="w-full max-w-sm">
      <CardContent className="p-4">
        <div className="aspect-square relative mb-4">
          <Image
src={`http://localhost:4000/uploads/${product.productImage}`}
alt={product.productName}
            layout="fill"
            objectFit="cover"
            className="rounded-md" />
          {product.discount > 0 && <Badge className="absolute top-2 right-2 bg-red-500">{product.discount}% OFF</Badge>}
        </div>
        <h3 className="text-lg font-semibold mb-2">{product.productName}</h3>
        <p className="text-gray-600 mb-2">{product.productBrand}</p>
        <div className="flex justify-between items-center mb-2">
          <span className="text-xl font-bold">${product.productPrice.toFixed(2)}</span>
        </div>
      
      </CardContent>
      <CardFooter>
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>)
  );
}

