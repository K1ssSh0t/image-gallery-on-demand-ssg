import Image from "next/image";
import { Inter } from "@next/font/google";
import ImageReact from "./ImageReact";
import { createClient } from "@supabase/supabase-js";

const inter = Inter({ subsets: ["latin"] });

async function staticProps() {
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.SUPABASE_SERVICE_ROLE_KEY || ""
  );

  const { data } = await supabaseAdmin.from("images").select("*").order("id");

  return data;
}

type Image = {
  id: number;
  href: string;
  imagesrc: string;
  name: string;
  username: string;
};

export default async function Home() {
  const images = await staticProps();
  return (
    <main>
      <div className=" max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {images?.map((image: Image) => (
            <ImageReact image={image} key={image.id}></ImageReact>
          ))}
        </div>
      </div>
    </main>
  );
}
