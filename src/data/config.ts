const config = {
  title: "Ali Hassan | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Ali Hassan, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Ali Hassan, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Ali Hassan",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Ali Hassan",
  email: "alihassanengineer.official@gmail.com",
  site: "https://nareshkhatri.dev",

  // for github stars button
  githubUsername: "engineeralihassan",
  githubRepo: "my-3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/nothotchaddi",
    linkedin: "https://www.linkedin.com/in/software-engineer-ali-hassan",
    instagram: "https://www.instagram.com/alihassan_vibes?igsh=OXdlcXhneGJiMWdo",
    facebook: "https://www.facebook.com/share/18nCVUiF2H/",
    github: "https://github.com/engineeralihassan",
  },
};
export { config };
