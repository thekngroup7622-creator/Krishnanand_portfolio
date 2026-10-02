"use client";

import Image from "next/image";
import { useState } from "react";
import { Activity } from "lucide-react";

interface ImagePlaceholderProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
}

export default function ImagePlaceholder({ src, alt, className = "", sizes = "(max-width: 768px) 100vw, 50vw" }: ImagePlaceholderProps) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className={`image-placeholder ${className}`} role="img" aria-label={`${alt} placeholder`}>
        <div className="placeholder-mark"><Activity size={28} strokeWidth={1.5} /></div>
        <span>CRICKET DATA / VISUAL STORY</span>
      </div>
    );
  }
  return <Image src={src} alt={alt} fill sizes={sizes} className={`cover-image ${className}`} onError={() => setFailed(true)} />;
}
