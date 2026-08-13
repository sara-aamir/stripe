import { useState, useEffect, useRef } from "react";
import { caseStudies } from "../constant/constantData";

export const useApp = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeId, setActiveId] = useState(caseStudies[0].id);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const carouselRef = useRef(null);

  const handleToggle = (id) => {
    setActiveId((prev) => (prev === id ? prev : id));
  };

  const scrollCarousel = (direction) => {
    const node = carouselRef.current;
    if (!node) return;
    const amount = node.clientWidth * 0.8 * (direction === "left" ? -1 : 1);
    node.scrollBy({ left: amount, behavior: "smooth" });
  };

  useEffect(() => {
    const scrollEl = document.getElementById("root");
    if (!scrollEl) return;

    const handleScroll = () => setIsScrolled(scrollEl.scrollTop > 10);
    scrollEl.addEventListener("scroll", handleScroll);

    return () => scrollEl.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return {
    isScrolled,
    scrollToSection,
    scrollCarousel,
    activeId,
    activeTestimonial,
    setActiveTestimonial,
    carouselRef,
    handleToggle,
  };
};
