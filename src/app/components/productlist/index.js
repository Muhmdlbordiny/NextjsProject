import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function ProductList() {
  let res = await fetch(`https://fakestoreapi.com/products`);
  let allProducts = await res.json();

  return (
    <div className="row g-4">
      {allProducts.map((prod) => (
        <div key={prod.id} className="col-12 col-md-6 col-lg-4">
          <Link href={`/products/${prod.id}`} className="text-decoration-none text-dark">
            <div className="card h-100 shadow-sm">
              <Image
                src={prod.image}
                width={400}
                height={400}
                className="card-img-top object-fit-contain p-3"
                alt={prod.title}
              />
              <div className="card-body">
                <h6 className="card-title text-truncate">{prod.title}</h6>
                <p className="card-text fw-bold">{prod.price}$</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
