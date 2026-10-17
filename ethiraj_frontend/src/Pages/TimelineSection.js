import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TimelineScale from "./DynamicTimeline";

gsap.registerPlugin(ScrollTrigger);

export default function TimelineSection({historyOfEthirajDatas}) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const getScrollDistance = () =>
      Math.max(1, track.scrollWidth - section.clientWidth);

    gsap.to(track, {
      x: () => -getScrollDistance(),
      ease: "none",
      scrollTrigger: {
        id: "timelineTrigger",
        trigger: section,
        start: "top top+=80",
        end: () => `+=${getScrollDistance() * 4}`, // 4x scroll distance = very slow (increase for even slower)
        scrub: 0,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          setScrollProgress(self.progress);
        },
      },
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  const handleJumpToProgress = (progress) => {
    const st = ScrollTrigger.getById("timelineTrigger");
    if (st) {
      const targetScroll = st.start + progress * (st.end - st.start);
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    } else {
      setScrollProgress(progress);
    }
  };

  return (
    <section
      id="milestones"
      ref={sectionRef}
      style={{
        height: "100%",
        width: "100%",
        maxWidth: "100vw",
        overflow: "hidden",
        overflowX: "clip",
      }}
    >
      <div
        ref={trackRef}
        style={{
          display: "flex",
          width: "max-content",
          padding: "0 2rem",
        background: "#f5e6f5",
       
        }}
      >
        <TimelineScale
          historyOfEthirajDatas={historyOfEthirajDatas}
          scrollProgress={scrollProgress}
          onJumpToProgress={handleJumpToProgress}
        />

      </div>
    </section>
  );
}



