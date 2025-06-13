import ProductList from "@/app/components/productlist/index";
import React, { Suspense } from "react";
import Link from "next/link";
import Loading from "../loading";

export const metadata = {
  title: " Products Page",
};
export default async function Products() {
  return (
    <>
      <div>
        <h1>Here is Our New Collection</h1>
        <p>new outcome for summer collection</p>
      </div>
      <div className="row d-flex space-between">
        <Suspense
          fallback={
            // <Loading />
            <>
              <h2>loading .....</h2>
              <div className="spinner-border"></div>
            </>
          }
        >
          <ProductList />
        </Suspense>
      </div>
    </>
  );
}