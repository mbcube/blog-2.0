"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { LayoutGroup, motion } from "framer-motion";

const navItems = {
  "/": {
    name: "home",
  },
  "/mbcube": {
    name: "mbcube",
  },
  "/about": {
    name: "about",
  },
  "/blog": {
    name: "blog",
  },
};

function Logo() {
  return (
    <Link aria-label="Mouad Bouras" href="/">
      <svg
        width="50"
        height="43"
        viewBox="0 0 500 434"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1_2)">
          <path
            d="M69.6714 119.283L75.5196 109.146L131.746 11.8H368.254L418.339 98.6204L428.571 92.8754L374.972 0H125.019L59.5423 113.435L64.5121 116.355L69.6714 119.283Z"
            fill="white"
          />
          <path
            d="M434.807 103.59L429.743 106.519L424.575 109.439L430.328 119.283L486.452 216.534L368.254 421.372H243.958V433.06H374.972L500 216.534L434.807 103.59Z"
            fill="white"
          />
          <path
            d="M232.063 421.372H131.746L13.5398 216.534L63.5303 129.998L53.4013 124.15L0 216.534L125.019 433.06H232.063V421.372Z"
            fill="white"
          />
          <path
            d="M250.047 371.476L252.683 369.917V383.457L250.047 385.024L244.104 381.614L104.167 300.822V153.779L115.864 160.601V294.001L244.104 368.065L250.047 371.476Z"
            fill="white"
          />
          <path
            d="M377.513 121.721L365.618 128.439L250.047 61.6873L121.807 135.752H121.712L115.864 139.162V145.984L104.167 139.257V132.341L110.015 129.025L250.047 48.1474L377.513 121.721Z"
            fill="white"
          />
          <path
            d="M395.833 132.341V300.822L267.196 375.085V361.536L384.136 294.001V139.162L378.383 135.846L378.193 135.752L387.056 130.584V130.678L389.985 128.93H390.079L390.174 129.025L395.833 132.341Z"
            fill="white"
          />
          <path
            d="M392.904 140.816L384.136 145.881L353.241 163.718L255.895 219.945L249.952 223.356L244.104 219.945L146.655 163.718L130.385 154.365L115.863 145.881L107.095 140.816L112.944 130.678V130.584L121.712 135.752H121.807L152.504 153.486L249.952 209.807L347.401 153.486L358.116 147.25L378.193 135.752L387.056 130.584V130.678L387.159 130.782L392.904 140.816Z"
            fill="white"
          />
          <path
            d="M255.844 216.594H244.104V378.211H255.844V216.594Z"
            fill="white"
          />
          <path
            d="M255.878 341.528H244.139V427.22H255.878V341.528Z"
            fill="white"
          />
          <path
            d="M435.393 116.355L430.328 119.283L395.833 139.162L392.904 140.816L384.136 145.881L353.241 163.718L347.401 153.486L358.116 147.25L378.193 135.752L387.056 130.678L389.985 128.93H390.079L390.174 129.025L424.575 109.438L429.743 106.519L435.393 116.355Z"
            fill="white"
          />
          <path
            d="M152.504 153.486L146.655 163.719L130.385 154.365L115.864 145.984L104.167 139.257L69.6714 119.283L64.5122 116.355L70.4552 106.226L75.5197 109.146L110.015 129.025L112.944 130.679L121.712 135.752H121.807L152.504 153.486Z"
            fill="white"
          />
          <path
            d="M390.174 129.025L387.16 130.782L378.383 135.846L358.211 147.345L358.116 147.25L378.193 135.752L387.056 130.584V130.679L389.985 128.93H390.079L390.174 129.025Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_2">
            <rect width="500" height="433.06" fill="white" />
          </clipPath>
        </defs>
      </svg>

      {/* <motion.svg
        className="text-black dark:text-white h-[25px] md:h-[37px]"
        width="25"
        height="37"
        viewBox="0 0 232 316"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{
            opacity: 0,
            pathLength: 0,
          }}
          animate={{
            opacity: 1,
            pathLength: 1,
          }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 50,
          }}
          d="M39 316V0"
          stroke="currentColor"
          strokeWidth={78}
        />
        <motion.path
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 50,
          }}
          d="M232 314.998H129.852L232 232.887V314.998Z"
          fill="currentColor"
        />
      </motion.svg> */}
    </Link>
  );
}

export default function Navbar() {
  let pathname = usePathname() || "/";
  if (pathname.includes("/blog/")) {
    pathname = "/blog";
  }

  return (
    <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif">
      <div className="lg:sticky lg:top-20">
        <div className="ml-2 md:ml-[12px] mb-2 px-4 md:px-0 md:mb-8 space-y-10 flex flex-col md:flex-row items-start ">
          <Logo />
        </div>
        <LayoutGroup>
          <nav
            className="flex flex-row md:flex-col items-start relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
            id="nav"
          >
            <div className="flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0">
              {Object.entries(navItems).map(([path, { name }]) => {
                const isActive = path === pathname;
                return (
                  <Link
                    key={path}
                    href={path}
                    className={clsx(
                      "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle",
                      {
                        "text-neutral-500": !isActive,
                        "font-bold": isActive,
                      }
                    )}
                  >
                    <span className="relative py-[5px] px-[10px]">
                      {name}
                      {path === pathname ? (
                        <motion.div
                          className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-md z-[-1]"
                          layoutId="sidebar"
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      ) : null}
                    </span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  );
}
