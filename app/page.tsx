"use client";

import Image from "next/image";
import { Mail } from "lucide-react";
import { links, socials, profile } from "@/lib/links";
import { useState, useRef, useCallback } from "react";
import type { MouseEvent } from "react";

/* ─── Social icon SVGs ──────────────────────────────────────────────────── */

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.258 5.63L18.244 2.25zM17.1 19.77h1.833L7.025 4.126H5.056L17.1 19.77z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  X: <XIcon />,
  YouTube: <YouTubeIcon />,
  GitHub: <GitHubIcon />,
  TikTok: <TikTokIcon />,
  Instagram: <InstagramIcon />,
  Email: <Mail size={18} />,
};

/* ─── Link button with tilt + glow ─────────────────────────────────────── */

function LinkButton({
  href,
  favicon,
  label,
  sub,
  delay,
}: {
  href: string;
  favicon: string;
  label: string;
  sub?: string;
  delay: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [hovered, setHovered] = useState(false);
  const [ripple, setRipple] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = useCallback((e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = ((e.clientX - cx) / rect.width) * 10;
    const dy = ((e.clientY - cy) / rect.height) * 10;
    el.style.transform = `perspective(600px) rotateX(${-dy}deg) rotateY(${dx}deg) scale(1.025)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)";
    setHovered(false);
  }, []);

  const handleClick = useCallback((e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setRipple({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setTimeout(() => setRipple(null), 700);
  }, []);

  const isExternal = href !== "#" && !href.startsWith("mailto:") && !href.startsWith("/");

  return (
    <div style={{ animation: `fade-up 0.5s ease ${delay}s both` }}>
      <a
        ref={ref}
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        className="link-card relative flex items-center gap-3 w-full px-5 py-4 rounded-2xl cursor-pointer select-none"
        style={{
          background: "#1c1c24",
          border: hovered
            ? "1px solid rgba(59,130,246,0.55)"
            : "1px solid #2a2a38",
          boxShadow: hovered
            ? "0 0 24px rgba(59,130,246,0.22), 0 8px 32px rgba(0,0,0,0.3)"
            : "0 2px 12px rgba(0,0,0,0.2)",
          transition: "border 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease",
          willChange: "transform",
        }}
      >
        {/* Glow overlay on hover */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at 30% 50%, rgba(59,130,246,0.08) 0%, transparent 70%)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.25s ease",
            pointerEvents: "none",
          }}
        />

        {/* Ripple */}
        {ripple && (
          <span
            aria-hidden
            style={{
              position: "absolute",
              left: ripple.x,
              top: ripple.y,
              width: 12,
              height: 12,
              marginLeft: -6,
              marginTop: -6,
              borderRadius: "50%",
              background: "rgba(59,130,246,0.5)",
              animation: "ripple-out 0.7s ease-out forwards",
              pointerEvents: "none",
            }}
          />
        )}

        {/* Content */}
        <img
          src={favicon}
          alt=""
          width={24}
          height={24}
          className="w-6 h-6 rounded-sm object-contain flex-shrink-0 relative z-10"
        />
        <div className="flex flex-col relative z-10">
          <span className="text-[15px] font-semibold tracking-wide text-[#f0f0f0] drop-shadow-sm">
            {label}
          </span>
          {sub && (
            <span className="text-[11px] text-[#3b82f6] mt-0.5 leading-tight">
              {sub}
            </span>
          )}
        </div>
      </a>
    </div>
  );
}

/* ─── Profile photo with initials fallback ──────────────────────────────── */

function ProfilePhoto() {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="animate-photo-in relative w-[120px] h-[120px] rounded-full animate-ring-pulse flex-shrink-0"
      style={{ animationDelay: "0s" }}
    >
      <div
        className="relative w-full h-full rounded-full overflow-hidden"
        style={{
          border: "2px solid rgba(59,130,246,0.5)",
          background: "#1a1a2e",
        }}
      >
        {imgError ? (
          <div className="w-full h-full flex items-center justify-center text-3xl font-bold text-[#3b82f6]">
            JS
          </div>
        ) : (
          <Image
            src={profile.image}
            alt={profile.name}
            fill
            sizes="120px"
            className="object-cover rounded-full"
            style={{ objectPosition: "center 15%" }}
            priority
            onError={() => setImgError(true)}
          />
        )}
      </div>
    </div>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────────── */

export default function Page() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-5 py-12">
      {/* Background orbs */}
      <div aria-hidden className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="animate-orb-1 absolute"
          style={{
            top: "-15%",
            left: "-10%",
            width: "55vw",
            height: "55vw",
            maxWidth: 500,
            maxHeight: 500,
            background:
              "radial-gradient(ellipse, rgba(59,130,246,0.13) 0%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(40px)",
          }}
        />
        <div
          className="animate-orb-2 absolute"
          style={{
            bottom: "-10%",
            right: "-15%",
            width: "50vw",
            height: "50vw",
            maxWidth: 460,
            maxHeight: 460,
            background:
              "radial-gradient(ellipse, rgba(201,168,76,0.09) 0%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(50px)",
          }}
        />
      </div>

      {/* Content */}
      <main className="relative z-10 flex flex-col items-center w-full" style={{ maxWidth: 450 }}>

        {/* Profile */}
        <ProfilePhoto />

        <h1
          className="mt-5 text-[28px] font-extrabold tracking-tight text-[#f5f5f5]"
          style={{ animation: "fade-up 0.5s ease 0.2s both" }}
        >
          {profile.name}
        </h1>

        <p
          className="mt-1.5 text-sm text-[#888] tracking-wide"
          style={{ animation: "fade-up 0.5s ease 0.35s both" }}
        >
          {profile.tagline}
        </p>

        <p
          className="mt-1 text-xs text-[#555] tracking-wide"
          style={{ animation: "fade-up 0.5s ease 0.45s both" }}
        >
          {profile.location}
        </p>

        {/* Link stack */}
        <div className="mt-8 flex flex-col gap-3 w-full">
          {links.map((link, i) => {
            const prevSection = i > 0 ? links[i - 1].section : null;
            const showSection = link.section && link.section !== prevSection;
            return (
              <div key={link.label}>
                {showSection && (
                  <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#3b3b3b] px-1 pt-2 pb-1">
                    {link.section}
                  </p>
                )}
                <LinkButton
                  href={link.url}
                  favicon={link.favicon}
                  label={link.label}
                  sub={link.sub}
                  delay={0.5 + i * 0.1}
                />
              </div>
            );
          })}
        </div>

        {/* Social icons */}
        <div
          className="mt-8 flex items-center gap-3"
          style={{ animation: "fade-up 0.5s ease 0.7s both" }}
        >
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target={s.url.startsWith("mailto:") ? undefined : "_blank"}
              rel={s.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              aria-label={s.name}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-[#555] transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = "#3b82f6";
                el.style.borderColor = "rgba(59,130,246,0.4)";
                el.style.background = "rgba(59,130,246,0.08)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = "#555";
                el.style.borderColor = "rgba(255,255,255,0.07)";
                el.style.background = "rgba(255,255,255,0.04)";
                el.style.transform = "translateY(0)";
              }}
            >
              {SOCIAL_ICONS[s.name]}
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
