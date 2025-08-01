import React, { useEffect } from "react";
import { motion } from "framer-motion";
import arrowUp from "../assets/arrow-up.svg"; // ✅ Corrected path

const ProjectDetails = ({
  title,
  description,
  subDescription = [],
  image,
  tags = [],
  href,
  closeModal,
}) => {
  const handleContentClick = (e) => {
    e.stopPropagation(); // Prevent closing modal on content click
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-3"
      onClick={closeModal}
    >
      <motion.div
        onClick={handleContentClick}
        className="relative w-full max-w-[80%] sm:max-w-[480px] md:max-w-[550px] lg:max-w-[620px] max-h-[80vh] overflow-y-auto border shadow-lg rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-3 right-4 text-emerald-500 text-4xl font-bold hover:text-gray-400 focus:outline-none"
          aria-label="Close"
        >
          &times;
        </button>

        {/* Image */}
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full max-h-52 object-cover rounded-t-2xl"
          />
        )}

        {/* Content */}
        <div className="p-5">
          <h5 className="mb-2 text-xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>

          {subDescription.map((subDesc, index) => (
            <p key={index} className="mb-3 font-normal text-neutral-400">
              {subDesc}
            </p>
          ))}

          <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
            {/* Tags */}
            <div className="flex gap-3 flex-wrap">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg size-10 hover-animation"
                />
              ))}
            </div>

            {/* Project Link */}
            {href && (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-white hover:underline"
              >
                View Project
                <img src={arrowUp} className="size-4" alt="arrow" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
