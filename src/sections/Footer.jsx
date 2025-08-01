import { mySocials } from "../constants";

const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      {/* Terms and Privacy */}
      <div className="flex gap-2">
        <p>Terms & Conditions</p>
        <span>|</span>
        <p>Privacy Policy</p>
      </div>

      {/* Social Icons */}
      <div className="flex gap-3">
        {mySocials?.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
          >
            <img
              src={social.icon}
              alt={social.name}
              className="w-5 h-5"
              loading="lazy"
            />
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p>© 2025 Arbaz H. All rights reserved.</p>
    </section>
  );
};

export default Footer;
