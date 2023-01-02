"use client";

import React, { useState } from "react";
import Image from "next/image";

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type Image = {
  id: number;
  href: string;
  imagesrc: string;
  name: string;
  username: string;
};

type Props = {
  image: Image;
};

export default function ImageReact({ image }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <a href={image.href} className="group">
      <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200 ">
        <Image
          src={image.imagesrc}
          alt=""
          fill={true}
          style={{ objectFit: "cover" }}
          className={cn(
            "group-hover:opacity-75 duration-700 ease-in-out",
            isLoading
              ? "grayscale blur-2xl scale-110"
              : "grayscale-0 blur-0 scale-100"
          )}
          onLoadingComplete={() => setIsLoading(false)}
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{image.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{image.username}</p>
    </a>
  );
}
