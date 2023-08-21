import Image, { StaticImageData } from "next/image";
import alpine from "../public/alpine.jpeg";
import outernetWorkshop from "../public/outernetworkshop.png";
import spark from "../public/spark.jpg";
import angelhacks from "../public/angelhacks.jpg";
import assemble from "../public/assemble.JPG";
import zephyr from "../public/zephyr.jpg";
import horizon from "../public/horizon.png";
import { ReactNode } from "react";

function Photo({
  src,
  children,
  alt,
}: {
  src: StaticImageData;
  children: ReactNode;
  alt: string;
}) {
  return (
    <div className="photo primary w-fit rounded border bg-[#F7F7FF] px-2 sm:px-3 lg:px-4 pb-1 sm:pb-1.5 lg:pb-2 pt-3 sm:pt-[1.125rem] lg:pt-6 shadow-lg odd:rotate-6 even:-rotate-6">
      <div className="relative aspect-square w-32 sm:w-48 lg:w-64">
        <Image
          className="h-full w-full object-cover"
          src={src}
          alt={alt}
        />
      </div>
      <div className="mt-2 h-10 w-32 sm:w-48 lg:w-64 text-xs sm:text-sm lg:text-base text-center">{children}</div>
    </div>
  );
}

export function Gallery() {
  return (
    <div className="gallery flex justify-center">
      <Photo
        src={outernetWorkshop}
        alt="Workshop at Outernet, Hack Club's 2023 summer event in Vermont."
      >
        7/30/23 &bull; Outernet, VT
      </Photo>
      <Photo
        src={spark}
        alt="Hackers at Spark in SF."
      >
        8/12/23 &bull; Spark, SF
      </Photo>
      <Photo
        src={angelhacks}
        alt="Hackers at Angelhacks 3.0 in Boston."
      >
        5/28/23 &bull; Angelhacks, MA
      </Photo>
      <Photo
        src={assemble}
        alt="Hackers at Assemble, Hack Club's 2022 summer event in SF."
      >
        8/6/22 &bull; Assemble, SF
      </Photo>
      <Photo
        src={zephyr}
        alt="Hackers at Zephyr, Hack Club's 2023 summer event on a train."
      >
        7/20/21 &bull; Zephyr, USA
      </Photo>
      <Photo
        src={horizon}
        alt="Hackers at Horizon."
      >
        3/25/23 &bull; Horizon, NYC
      </Photo>
      <Photo 
        src={alpine} 
        alt="Workshop at Alpine."
      >
        7/15/23 &bull; Alpine, SLC
      </Photo>
    </div>
  );
}