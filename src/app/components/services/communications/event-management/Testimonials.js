// components/services/communications/event-management/Testimonials.js
"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { gsap } from "gsap";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    quote:
      "“For three years of successful collaborations, Blackberg Group has proven themselves to be a valuable partner. They consistently bring professionalism, creativity, and forward-thinking strategies to every project, crafting experiences that resonate and leave a lasting impact.”",
    author: "Anne Bailey",
    rating: 5,
    image: "/images/services/communications/event-management/testimonial-1.jpg",
  },
  {
    id: 2,
    quote:
      "“I’ve worked with a lot of event professionals over the years, but this team stands out. Their ability to manage complexity, stay calm under pressure, and still make every moment feel intentional and personal is unmatched. From the first planning call to the final guest goodbye, everything was seamless. We’ve never had an event that felt so aligned with our goals and so effortless to execute.”",
    author: "Carlos Martinez",
    rating: 5,
    image: "/images/services/communications/event-management/testimonial-1.jpg",
  },
  {
    id: 3,
    quote:
      "“For three years of successful collaborations, Blackberg Group has proven themselves to be a valuable partner. They consistently bring professionalism, creativity, and forward-thinking strategies to every project, crafting experiences that resonate and leave a lasting impact.”",
    author: "Anne Bailey",
    rating: 5,
    image: "/images/services/communications/event-management/testimonial-1.jpg",
  },
];

const Testimonials = () => {
  const titleRef  = useRef(null);
  const swiperRef = useRef(null);
  const prevRef   = useRef(null);
  const nextRef   = useRef(null);
  const pageRef   = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger);

      // fade in title
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power1.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 90%",
        },
      });

      // fade in the swiper container
      gsap.from(swiperRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power1.out",
        scrollTrigger: {
          trigger: swiperRef.current,
          start: "top 85%",
        },
      });
    });
  }, []);

  return (
    <section id="testimonials" className="py-8 py-lg-10">
      <div className="container">
        <h2 ref={titleRef} className="display-5 text-center mb-6">
          Testimonials
        </h2>

        <div ref={swiperRef}>
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            loop={true}
            slidesPerView={1}
            spaceBetween={40}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{
              el: pageRef.current,
              clickable: true,
            }}
            a11y={{
              prevSlideMessage: "Previous testimonial",
              nextSlideMessage: "Next testimonial",
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();

                swiper.params.pagination.el = pageRef.current;
                swiper.pagination.init();
                swiper.pagination.render();
                swiper.pagination.update();
              });
            }}
          >
            {testimonials.map(({ id, quote, author, rating, image }) => (
              <SwiperSlide key={id}>
                <div className="row align-items-center gx-5">
                  <div className="col-12 col-lg-5 offset-lg-1 testimonial-quote">
                    <div className="stars mb-3">
                      {Array.from({ length: rating }).map((_, i) => (
                        <span key={i} className="text-primary fs-4 me-1">
                          ★
                        </span>
                      ))}
                    </div>
                    <p>{quote}</p>
                    <p className="fw-bold mt-3">— {author}</p>
                  </div>
                  <div className="col-12 col-lg-5 testimonial-image">
                    <Image
                      src={image}
                      alt={`Photo of ${author}`}
                      width={700}
                      height={450}
                      className="img-fluid rounded-4"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* custom nav & bullets */}
          <div className="row mt-4">
            <div className="col-12 col-lg-5 offset-lg-1 order-2 order-lg-1">
              <div className="testimonial-nav d-flex justify-content-center justify-content-lg-start gap-4 mt-4 mt-lg-0">
                <button
                  ref={prevRef}
                  className="testimonial-nav-btn testimonial-prev"
                  aria-label="Previous"
                >
                  <img
                    src="/images/arrow-narrow-left-light.svg"
                    width="16"
                    height="16"
                  />
                </button>
                <button
                  ref={nextRef}
                  className="testimonial-nav-btn testimonial-next"
                  aria-label="Next"
                >
                  <img
                    src="/images/arrow-narrow-right-light.svg"
                    width="16"
                    height="16"
                  />
                </button>
              </div>
            </div>
            <div className="col-12 col-lg-5 order-1 order-lg-2">
              <div
                ref={pageRef}
                className="testimonial-pagination d-flex justify-content-center"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
