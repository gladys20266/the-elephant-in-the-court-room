import { useEffect, useRef, useState } from "react";

interface Props {
  onClose: () => void;
}

export default function WelcomeVideoModal({ onClose }: Props) {
  const [playing, setPlaying] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [closing, setClosing] = useState(false);
  const [hoverButton, setHoverButton] = useState<"watch" | "continue" | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
  requestAnimationFrame(() => {
    setAnimateIn(true);
  });
}, []);
useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
            setClosing(true);

            setTimeout(() => {
                videoRef.current?.pause();

                if (videoRef.current) {
                    videoRef.current.currentTime = 0;
                }

                onClose();
            }, 250);
        }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
        window.removeEventListener("keydown", handleKeyDown);
    };
}, [onClose]);
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.78)",
        backdropFilter: "blur(6px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        padding: "24px",
        opacity: closing ? 0 : animateIn ? 1 : 0,
transform: closing
  ? "scale(0.96)"
  : animateIn
    ? "scale(1)"
    : "scale(0.96)",
transition: "all 0.25s ease",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "900px",
          background: "#121212",
          borderRadius: "24px",
          padding: "40px",
          boxShadow: "0 20px 60px rgba(0,0,0,.6)",
          textAlign: "center",
        }}
      >
        <button
          onClick={() => {
            setClosing(true);

            setTimeout(() => {
               videoRef.current?.pause();
               videoRef.current && (videoRef.current.currentTime = 0);
               onClose();
             }, 250);
           }}
           style={{
             position: "absolute",
             top: "18px",
             right: "18px",
             width: "40px",
             height: "40px",
             display: "flex",
             alignItems: "center",
             justifyContent: "center",
             background: "rgba(255,255,255,0.06)",
             color: "#fff",
             border: "1px solid rgba(255,255,255,0.15)",
             borderRadius: "50%",
             fontSize: "28px",
             cursor: "pointer",
             lineHeight: 1,
             transition: "all 0.2s ease",
  }}
>
  &times;
</button>
        <h1
          style={{
            color: "white",
            fontSize: "2rem",
            marginBottom: "12px",
          }}
        >
          The Elephant In The Court Room
        </h1>

        <p
          style={{
            color: "#cccccc",
            fontSize: "1.1rem",
            marginBottom: "30px",
          }}
        >
          Watch this short introduction before exploring the website.
        </p>

        <div
          style={{
            height: "420px",
            background: "#222",
            borderRadius: "18px",
            overflow: "hidden",
            marginBottom: "30px",
          }}
        >
          {!playing ? (
            <img
              src="/assets/welcome-poster.png"
              alt="Welcome Video Poster"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                cursor: "pointer",
              }}
              onClick={() => setPlaying(true)}
            />
          ) : (
            <video
              ref={videoRef}
              src="/videos/welcome.mp4"
              controls
              autoPlay
              onEnded={() => {
                 localStorage.setItem("hasSeenWelcome", "true");

                 setClosing(true);

                 setTimeout(() => {
                     if (videoRef.current) {
                         videoRef.current.currentTime = 0;
                     }

                     onClose();
                 }, 250);
              }}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          )}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {!playing && (
            <button
              onClick={() => setPlaying(true)}
              onMouseEnter={() => setHoverButton("watch")}
              onMouseLeave={() => setHoverButton(null)}
              style={{
                background: "#16A637",
                color: "white",
                border: "none",
                padding: "16px",
                borderRadius: "12px",
                fontSize: "18px",
                cursor: "pointer",
                transform: hoverButton === "watch" 
                ? "translateY(-2px)"
                : "translateY(0)",
                filter: hoverButton === "watch" 
                ? "brightness(1.08)"
                : "brightness(1)",
                transition: "all 0.2s ease",
              }}
            >
              Watch Introduction
            </button>
          )}

          <button
            onClick={() => {
                setClosing(true);

                setTimeout(() => {
                    videoRef.current?.pause();

                    if (videoRef.current) {
                    videoRef.current.currentTime = 0;
                    }

                    onClose();
                }, 250);
            }}
            onMouseEnter={() => setHoverButton("continue")}
            onMouseLeave={() => setHoverButton(null)}
            style={{
              background: "transparent",
              color: "white",
              border: "1px solid #555",
              padding: "16px",
              borderRadius: "12px",
              fontSize: "18px",
              cursor: "pointer",
              transform:
                hoverButton === "continue"
                    ? "translateY(-2px)"
                    : "translateY(0)",

              filter:
                  hoverButton === "continue"
                      ? "brightness(1.08)"
                      : "brightness(1)",

              transition: "all 0.2s ease",
            }}
          >
            Continue to Website
          </button>
        </div>
      </div>
    </div>
  );
}