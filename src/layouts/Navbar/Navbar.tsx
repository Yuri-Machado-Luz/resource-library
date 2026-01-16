import { motion as Motion } from "motion/react";
import clsx from "clsx";
import MenuItems from "./const.ts";
import { useGlow, GLOW_PRESETS, COLOR_VARS } from "@components";

void useGlow;
void GLOW_PRESETS;
void COLOR_VARS;

const Navbar = () => {
  return (
    <>
      <nav className="navbar center flex items-center justify-center pt-10">
        <div
          className={clsx(
            "center container flex items-center justify-between",
            "bg-main-gray/30 rounded-full border border-x-zinc-600 border-t-zinc-700 border-b-zinc-500",
            "px-18 py-10 backdrop-blur-3xl",
          )}
        >
          <Motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="font-logo unselectable text-4xl"
            href="#"
          >
            YUMA
            <span className="text-hex-pri-light unselectable inline-block text-6xl/0">
              .
            </span>
          </Motion.a>
          <ul className="center text-md flex gap-5 font-sans">
            {MenuItems.map((item, index) => (
              <Motion.li
                className="unselectable hover:text-hex-pri cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 280, damping: 24 }}
                key={index}
              >
                <a
                  href={item.path}
                  className={clsx(
                    "unselectable hover:text-hex-pri",
                    "cursor-pointer px-4 py-5 uppercase",
                    "tracking-widest",
                  )}
                >
                  {item.title}
                </a>
              </Motion.li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
export { Navbar };
