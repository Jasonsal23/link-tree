"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { affiliateProducts } from "@/lib/affiliates";
import { profile } from "@/lib/links";

function ProductCard({
  label,
  url,
  image,
  price,
  delay,
}: {
  label: string;
  url: string;
  image: string;
  price?: string;
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div style={{ animation: `fade-up 0.45s ease ${delay}s both` }}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative flex flex-col rounded-2xl overflow-hidden cursor-pointer h-full"
        style={{
          background: "#1c1c24",
          border: hovered
            ? "1px solid rgba(59,130,246,0.55)"
            : "1px solid #2a2a38",
          boxShadow: hovered
            ? "0 0 24px rgba(59,130,246,0.2), 0 8px 32px rgba(0,0,0,0.3)"
            : "0 2px 12px rgba(0,0,0,0.2)",
          transition: "border 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease",
          transform: hovered ? "translateY(-3px)" : "translateY(0)",
        }}
      >
        {/* Product image */}
        <div
          className="w-full aspect-square flex items-center justify-center overflow-hidden"
          style={{ background: "#16161e" }}
        >
          {image ? (
            <img
              src={image}
              alt={label}
              className="w-full h-full object-contain p-3 transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex flex-col items-center gap-2 text-[#2a2a2a]">
              <span className="text-3xl">🛒</span>
              <span className="text-[10px] text-[#333] text-center px-2">Add image URL in affiliates.ts</span>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="p-3 flex flex-col gap-1.5">
          <p className="text-xs font-semibold text-[#e0e0e0] leading-snug line-clamp-2">
            {label}
          </p>
          {price && (
            <p className="text-sm font-bold text-[#c9a84c]">{price}</p>
          )}
        </div>

        {/* Hover external link indicator */}
        <div
          className="absolute top-2 right-2 transition-opacity duration-200"
          style={{ opacity: hovered ? 1 : 0 }}
        >
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center"
            style={{ background: "rgba(59,130,246,0.2)", border: "1px solid rgba(59,130,246,0.3)" }}
          >
            <ExternalLink size={11} color="#3b82f6" />
          </div>
        </div>
      </a>
    </div>
  );
}

export default function AffiliatePage() {
  const sections: { title: string; products: typeof affiliateProducts }[] = [];
  affiliateProducts.forEach((product) => {
    const title = product.tag ?? "Other";
    const existing = sections.find((s) => s.title === title);
    if (existing) existing.products.push(product);
    else sections.push({ title, products: [product] });
  });

  let cardIndex = 0;

  return (
    <div className="relative min-h-screen px-5 py-10">
      {/* Background orbs */}
      <div aria-hidden className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="animate-orb-1 absolute"
          style={{
            top: "-15%", left: "-10%",
            width: "55vw", height: "55vw",
            maxWidth: 500, maxHeight: 500,
            background: "radial-gradient(ellipse, rgba(59,130,246,0.1) 0%, transparent 70%)",
            borderRadius: "50%", filter: "blur(40px)",
          }}
        />
        <div
          className="animate-orb-2 absolute"
          style={{
            bottom: "-10%", right: "-15%",
            width: "50vw", height: "50vw",
            maxWidth: 460, maxHeight: 460,
            background: "radial-gradient(ellipse, rgba(201,168,76,0.07) 0%, transparent 70%)",
            borderRadius: "50%", filter: "blur(50px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-lg sm:max-w-3xl mx-auto">
        {/* Back button */}
        <div style={{ animation: "fade-up 0.4s ease 0.05s both" }}>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-[#555] hover:text-[#f5f5f5] transition-colors duration-200 mb-8"
          >
            <ArrowLeft size={14} />
            Back to {profile.name}
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8" style={{ animation: "fade-up 0.5s ease 0.15s both" }}>
          <h1
            className="text-2xl font-extrabold text-[#f5f5f5] tracking-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Amazon Finds
          </h1>
          <p className="text-sm text-[#555] mt-1">
            Products I personally use and recommend
          </p>
          <p className="text-[11px] text-[#383838] mt-3 leading-relaxed">
            These are affiliate links — I may earn a small commission at no extra cost to you.
          </p>
        </div>

        {/* Product grid grouped by tag */}
        {sections.map((section) => (
          <div key={section.title} className="mb-8">
            <p
              className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#3b3b3b] px-1 mb-3"
              style={{ animation: "fade-in 0.4s ease 0.2s both" }}
            >
              {section.title}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {section.products.map((product) => {
                const delay = 0.2 + cardIndex++ * 0.07;
                return (
                  <ProductCard
                    key={product.label}
                    label={product.label}
                    url={product.url}
                    image={product.image}
                    price={product.price}
                    delay={delay}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
