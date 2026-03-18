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
<svg width="50" height="50" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <g id="M">
        <path id="Rectangle" fill="#ffffff" fill-rule="evenodd" stroke="none" d="M 72 356 L 110 378.454559 L 110 166.136353 L 72 143.681824 Z"/>
        <path id="path1" fill="#ffffff" fill-rule="evenodd" stroke="none" d="M 160 346 L 211 286.840027 L 208 222 L 160 277 Z"/>
        <path id="path2" fill="#004d81" fill-rule="evenodd" stroke="none" d="M 141.013489 396.006714 L 160.02063 405.993134 L 159.848694 371.599915 L 140.708679 335.020874 Z"/>
        <path id="path3" fill="#004d81" fill-rule="evenodd" stroke="none" d="M 159 405.5 L 180 418 L 180 349 L 159 370.5 Z"/>
        <path id="path4" fill="#ffffff" fill-rule="evenodd" stroke="none" d="M 205 287 L 212 287 L 212 224 L 208 222 Z"/>
        <path id="path5" fill="#ffffff" fill-rule="evenodd" stroke="none" d="M 106.852112 234.446777 L 160.458679 346.117554 L 161 275 L 114 169 Z"/>
        <path id="path6" fill="#ffffff" fill-rule="evenodd" stroke="none" d="M 104 212 L 115 219 L 115 169 L 104 162 Z"/>
        <path id="Rectangle-copy-3" fill="#ffffff" fill-rule="evenodd" stroke="none" d="M 211 436 L 250 458.454559 L 250 246.136353 L 211 223.681824 Z"/>
        <path id="Triangle" fill="#004d81" fill-rule="evenodd" stroke="none" d="M 135.530884 180.288635 L 162.488892 241.927734 L 188.703979 211.025757 Z"/>
    </g>
    <g id="B">
        <path id="path7" fill="#ffffff" fill-rule="evenodd" stroke="none" d="M 297 268.836365 L 438 187.160706 L 438 143.744019 L 297 225.419678 Z"/>
        <path id="path8" fill="#ffffff" fill-rule="evenodd" stroke="none" d="M 297 436.75 L 438 355.5 L 438 312.5 L 297 393.75 Z"/>
        <path id="path9" fill="#ffffff" fill-rule="evenodd" stroke="none" d="M 295 352.593506 L 385 301.406494 L 385 259.406494 L 295 310.593506 Z"/>
        <path id="path10" fill="#ffffff" fill-rule="evenodd" stroke="none" d="M 384 300.022186 L 438 329 L 438 288.977814 L 384 260 Z"/>
        <path id="path11" fill="#ffffff" fill-rule="evenodd" stroke="none" d="M 402.999023 280.017517 L 438.019043 299.982483 L 438.000977 281.982483 L 402.980957 262.017517 Z"/>
        <path id="path12" fill="#ffffff" fill-rule="evenodd" stroke="none" d="M 400 337 L 438 337 L 438 297 L 400 297 Z"/>
        <path id="path13" fill="#ffffff" fill-rule="evenodd" stroke="none" d="M 404.479736 298 L 438 234.877228 L 408.520264 214 L 375 277.122772 Z"/>
        <path id="path14" fill="#ffffff" fill-rule="evenodd" stroke="none" d="M 400 234 L 438 234 L 438 181 L 400 181 Z"/>
        <path id="Rectangle-copy-4" fill="#ffffff" fill-rule="evenodd" stroke="none" d="M 260 458.696503 L 299 436.028656 L 299 223.931213 L 260 246.59906 Z"/>
    </g>
    <g id="3-bands">
        <path id="path15" fill="#ffffff" fill-rule="evenodd" stroke="none" d="M 215.007996 213.030457 L 254.937988 236.273804 L 431.953247 133.614807 L 392.023193 110.37146 Z"/>
        <path id="Rectangle-copy" fill="#004d81" fill-rule="evenodd" stroke="none" d="M 146.983261 172.677765 L 187.558655 196.773071 L 364.953247 94.614807 L 324.377808 70.519501 Z"/>
        <path id="Rectangle-copy-2" fill="#ffffff" fill-rule="evenodd" stroke="none" d="M 78.464584 133.313141 L 118.736832 157.00827 L 295.953247 54.614807 L 255.680939 30.919678 Z"/>
    </g>
</svg>
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
