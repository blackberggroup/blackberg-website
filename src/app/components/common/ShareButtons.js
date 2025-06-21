"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Facebook, Linkedin, Twitter, Copy } from "lucide-react";

export default function ShareButtons({ title }) {
  const pathname = usePathname();
  const url =
   typeof window !== "undefined" ? window.location.href : "";

  const [canNativeShare, setCanNativeShare] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCanNativeShare(
      typeof navigator !== "undefined" && typeof navigator.share === "function"
    );
  }, []);

  const copyLink = async () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section>
      <div className="container">        
        <div className="col-12 col-md-8 col-lg-8 col-xxl-7 mx-auto">
          
          <h4>Share this Case Study:</h4>

          <div className="d-flex gap-2 align-items-center">
          {canNativeShare && (
            <button
              className="btn btn-sm btn-outline-dark d-inline-flex align-items-center"
              onClick={() => navigator.share({ title, url })}
            >
              <Copy size={16} className="me-1" />
              Share
            </button>
          )}

          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              url
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-outline-dark"
            aria-label="Share on Facebook"
          >
            <Facebook size={16} className="me-1" />
            Facebook
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
              url
            )}&text=${encodeURIComponent(title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-outline-dark"
            aria-label="Share on X / Twitter"
          >
            <Twitter size={16} className="me-1" />
            Twitter
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
              url
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-outline-dark"
            aria-label="Share on LinkedIn"
          >
            <Linkedin size={16} className="me-1" />
            LinkedIn
          </a>

          {/* Copy-link button appears when native share is NOT supported */}
          {!canNativeShare && (
            <button
              className="btn btn-sm btn-outline-dark"
              onClick={copyLink}
              aria-label="Copy link"
            >
              <Copy size={16} />
              {copied && <span className="ms-1 small">Copied!</span>}
            </button>
          )}
          </div>
        </div>      
      </div>      
    </section>
  );
}
