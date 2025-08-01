import accessoriesImg from "../assets/projects/accessories.jpg";
import authSystemImg from "../assets/projects/auth-system.jpg";
import blazorAppImg from "../assets/projects/blazor-app.jpg";
import gameEngineImg from "../assets/projects/game-engine.jpg";
import wordpressThemeImg from "../assets/projects/wordpress-theme.jpg";
import elearningImg from "../assets/projects/elearning.jpg";

import csharp from "../assets/logos/csharp.svg";
import dotnet from "../assets/logos/dotnet.svg";
import efcore from "../assets/logos/efcore.png";
import tailwindcss from "../assets/logos/tailwindcss.svg";

import auth0 from "../assets/logos/auth0.svg";
import react from "../assets/logos/react.svg";
import sqlite from "../assets/logos/sqlite.svg";

import blazor from "../assets/logos/blazor.svg";
import dotnetcore from "../assets/logos/dotnetcore.svg";

import cplusplus from "../assets/logos/cplusplus.svg";
import git from "../assets/logos/git.svg";
import microsoft from "../assets/logos/microsoft.svg";

import wordpress from "../assets/logos/wordpress.svg";
import html5 from "../assets/logos/html5.svg";
import css3 from "../assets/logos/css3.svg";
import vitejs from "../assets/logos/vitejs.svg";

import azure from "../assets/logos/azure.svg";
import stripe from "../assets/logos/stripe.svg";

import whatsAppIcon from "../assets/socials/whatsApp.svg";
import linkedInIcon from "../assets/socials/linkedIn.svg";
import instagramIcon from "../assets/socials/instagram.svg";

export const myProjects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Facilitates purchases from international websites like Amazon and eBay, allowing customers to shop from these sites and have products delivered domestically.",
    subDescription: [
      "Built a scalable application with ASP.NET Core MVC, integrating global platforms like Amazon for domestic delivery.",
      "Implemented secure authentication and database management using ASP.NET Core Identity and Entity Framework Core.",
      "Designed a responsive frontend with Tailwind CSS, enhancing user experience.",
      "Added payment systems, localization, and product filtering for functionality improvements.",
    ],
    href: "",
    logo: "",
    image: accessoriesImg,
    tags: [
      { id: 1, name: "C#", path: csharp },
      { id: 2, name: ".Net", path: dotnet },
      { id: 3, name: "Ef Core", path: efcore },
      { id: 4, name: "TailwindCSS", path: tailwindcss },
    ],
  },
  {
    id: 2,
    title: "Authentication & Authorization System",
    description:
      "A secure authentication and authorization system using Auth0 for seamless user management.",
    subDescription: [
      "Integrated Auth0 for authentication, supporting OAuth, JWT, and multi-factor authentication.",
      "Implemented role-based access control (RBAC) for fine-grained user permissions.",
      "Developed a React-based frontend with Tailwind CSS for a sleek user experience.",
      "Connected to a secure SQLite database for user data storage.",
    ],
    href: "",
    logo: "",
    image: authSystemImg,
    tags: [
      { id: 1, name: "Auth0", path: auth0 },
      { id: 2, name: "React", path: react },
      { id: 3, name: "SQLite", path: sqlite },
      { id: 4, name: "TailwindCSS", path: tailwindcss },
    ],
  },
  {
    id: 3,
    title: "Blazor Web App",
    description:
      "A modern, interactive web application built with Blazor WebAssembly and .NET Core.",
    subDescription: [
      "Developed a fully interactive Single Page Application (SPA) using Blazor WebAssembly.",
      "Implemented API interactions using .NET Core for a robust backend.",
      "Designed responsive UI components with Tailwind CSS for an enhanced UX.",
      "Integrated SQLite for efficient client-side database storage.",
    ],
    href: "",
    logo: "",
    image: blazorAppImg,
    tags: [
      { id: 1, name: "Blazor", path: blazor },
      { id: 2, name: ".NET Core", path: dotnetcore },
      { id: 3, name: "SQLite", path: sqlite },
      { id: 4, name: "TailwindCSS", path: tailwindcss },
    ],
  },
  {
    id: 4,
    title: "C++ Game Engine",
    description:
      "A lightweight C++ game engine designed for 2D and 3D game development.",
    subDescription: [
      "Built a powerful rendering engine using OpenGL and C++.",
      "Developed a physics engine with collision detection and particle effects.",
      "Implemented a scripting system for easy game customization.",
      "Optimized performance with multi-threading and efficient memory management.",
    ],
    href: "",
    logo: "",
    image: gameEngineImg,
    tags: [
      { id: 1, name: "C++", path: cplusplus },
      { id: 2, name: "C#", path: csharp },
      { id: 3, name: "Git", path: git },
      { id: 4, name: "Microsoft", path: microsoft },
    ],
  },
  {
    id: 5,
    title: "WordPress Custom Theme",
    description:
      "A fully customizable WordPress theme optimized for performance and SEO.",
    subDescription: [
      "Developed a responsive WordPress theme using HTML5, CSS3, and JavaScript.",
      "Integrated Tailwind CSS for modern styling and UI enhancements.",
      "Optimized SEO and page speed using Vite.js for fast builds.",
      "Implemented custom widgets and plugin compatibility for extended functionality.",
    ],
    href: "",
    logo: "",
    image: wordpressThemeImg,
    tags: [
      { id: 1, name: "WordPress", path: wordpress },
      { id: 2, name: "HTML5", path: html5 },
      { id: 3, name: "CSS3", path: css3 },
      { id: 4, name: "Vite.js", path: vitejs },
    ],
  },
  {
    id: 6,
    title: "American Islamic High School",
    description:
      "A web application that allows users to enroll in courses, watch video lectures, and take quizzes.",
    subDescription: [
      "Built using Blazor WebAssembly for a seamless SPA experience.",
      "Implemented video streaming with Azure Media Services.",
      "Added a quiz system with dynamic question generation and real-time grading.",
      "Integrated Stripe API for secure payment processing.",
    ],
    href: "",
    logo: "",
    image: elearningImg,
    tags: [
      { id: 1, name: "Blazor", path: blazor },
      { id: 2, name: "Azure", path: azure },
      { id: 3, name: "Stripe", path: stripe },
      { id: 4, name: "TailwindCSS", path: tailwindcss },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://web.whatsapp.com/send?phone=447452880482",
    icon: whatsAppIcon,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/arbazh/",
    icon: linkedInIcon,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/arbazhaidr_?igsh=MXJ0bWE0MW93dzRodg==",
    icon: instagramIcon,
  },
];

export const experiences = [];
export const reviews = [];
