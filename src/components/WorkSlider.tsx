import { useRef, useState } from "react";
import slides from "./work-slides.json";
export default function WorkSlider() {
  const [current, setCurrent] = useState(0);
  const [dragging, setDragging] = useState(false);
  const gesture = useRef({ start: 0, moved: 0, dragged: false, active: false });
  const move = (offset: number) =>
    setCurrent((value) => (value + offset + slides.length) % slides.length);
  function position(index: number) {
    const diff = (index - current + slides.length) % slides.length;
    return diff === 0
      ? " active"
      : diff === 1
        ? " next"
        : diff === 2
          ? " far-next"
          : diff === slides.length - 1
            ? " prev"
            : diff === slides.length - 2
              ? " far-prev"
              : "";
  }
  return (
    <div
      className="coverflow-slider"
      id="workSlider"
      aria-label="Galleria lavori"
    >
      <button
        className="slider-btn prev"
        type="button"
        aria-label="Immagine precedente"
        onClick={() => move(-1)}
      >
        ‹
      </button>
      <div
        className={`slider-stage${dragging ? " is-dragging" : ""}`}
        onPointerDown={(event) => {
          gesture.current = {
            start: event.clientX,
            moved: 0,
            dragged: false,
            active: true,
          };
          setDragging(true);
        }}
        onPointerMove={(event) => {
          if (!gesture.current.active) return;
          gesture.current.moved = event.clientX - gesture.current.start;
          if (Math.abs(gesture.current.moved) > 8) {
            gesture.current.dragged = true;
            event.currentTarget.setPointerCapture(event.pointerId);
          }
        }}
        onPointerUp={() => {
          if (!gesture.current.active) return;
          if (gesture.current.moved > 45) move(-1);
          if (gesture.current.moved < -45) move(1);
          gesture.current.active = false;
          setDragging(false);
        }}
        onPointerCancel={() => {
          gesture.current.active = false;
          setDragging(false);
        }}
        onDragStart={(event) => event.preventDefault()}
      >
        {slides.map((slide, index) => (
          <a
            key={slide.src}
            href={slide.src}
            data-fancybox="lavori"
            className={`slide${position(index)}`}
            onClick={(event) => {
              if (gesture.current.dragged) {
                event.preventDefault();
                event.stopPropagation();
              }
            }}
          >
            <img src={slide.src} alt={slide.alt} />
          </a>
        ))}
      </div>
      <button
        className="slider-btn next"
        type="button"
        aria-label="Immagine successiva"
        onClick={() => move(1)}
      >
        ›
      </button>
    </div>
  );
}
