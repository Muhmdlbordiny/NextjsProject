import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

export async function generateMetadata({ params }) {
  let { id } = await params;
  let res = await fetch(`https://fakestoreapi.com/products/${id}`);
  let product = await res.json();
  return {
    title: product.title,
  };
}

export async function generateStaticParams() {
  let res = await fetch(`https://fakestoreapi.com/products`);
  let products = await res.json();
  const ids = products.map((product) => {
    return { id: product.id.toString() };
  });
  console.log(ids);
  return ids;
}

export default async function ProductDetails({ params }) {
  let { id } = await params;
  let product;
  try {
    let res = await fetch(`https://fakestoreapi.com/products/${id}`);
    product = await res.json();
  } catch (error) {
    notFound();
  }
  return (
    <>
      <div className="row">
        <div className="col-4" key={product.id}>
          <div className="card">
          
            <Image src={product.image} width={400} height={400} alt="flower" />

            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.price}$</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}