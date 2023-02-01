"use client";

import { useRouter, notFound } from "next/navigation";
import slides from "../slides";
import { firaCode } from "../../../fonts";
import { useKeyPress } from "../../hooks";

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slide: string };
}) {
  const { slide } = params;
  const { push } = useRouter();
  useKeyPress(
    () => push(`/${Math.min(Number(params.slide) + 1, slides.length)}`),
    ["ArrowRight"]
  );
  useKeyPress(
    () => push(`/${Math.max(Number(params.slide) - 1, 1)}`),
    ["ArrowLeft"]
  );

  if (isNaN(Number(slide))) return notFound();
  if (!slides[Number(slide) - 1]) return notFound();

  const slideContent = slides[Number(slide) - 1];

  if (slideContent.items.length === 1) {
    return (
      <>
        <p className={`${firaCode.className} absolute top-4 left-4`}>
          <span className="text-white">anthonyshew 👟</span>
          <span className="ml-2 text-gray-800">{slideContent.cliFlair}</span>
          {/* <span className="ml-2 text-gray-700">on</span>
        <span className="ml-2 text-gray-800">main</span> */}
        </p>
        <div className="flex items-center justify-center w-full min-h-screen">
          {children}
        </div>
      </>
    );
  }

  return (
    <>
      <p className={`${firaCode.className} absolute top-4 left-4`}>
        <span className="text-white">anthonyshew 👟</span>
        <span className="ml-2 text-gray-800">{slideContent.cliFlair}</span>
        {/* <span className="ml-2 text-gray-700">on</span>
        <span className="ml-2 text-gray-800">main</span> */}
      </p>
      <div className="grid w-full min-h-screen grid-cols-1 gap-10 md:grid-cols-2 place-items-center">
        {children}
      </div>
    </>
  );
}
