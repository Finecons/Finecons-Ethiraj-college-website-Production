import React, { useRef, useEffect, useState } from "react";
// import TimelineScale from "./DynamicTimelineModify";


export default function TimelineScrollWrapper() {
  const containerRef = useRef();
  const [horizontalDone, setHorizontalDone] = useState(false);

  // Wheel event: hijack scroll for horizontal scrolling
  useEffect(() => {
    const el = containerRef.current;

    const onWheel = (e) => {
      if (!horizontalDone) {
        e.preventDefault(); // stop vertical scroll
        el.scrollLeft += e.deltaY; // horizontal move
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 1) {
          setHorizontalDone(true); // allow vertical scroll after end
        }
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [horizontalDone]);

  return (
    <section
      ref={containerRef}
      style={{
        width: "100%",
        height: "100vh",
        overflowX: "auto",
        overflowY: "hidden",
      }}
    >
      {/* <LineMinimap />s */}
    </section>
  );
}
