import { ArrowIcon } from "components/icons";

export default function emailSubscribe() {
  return (
    <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
      <li>
        <a
          className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
          rel="noopener noreferrer"
          target="_blank"
          href="https://medium.com/@MBCube/subscribe"
        >
          <ArrowIcon />
          <p className="h-7">get email updates</p>
        </a>
      </li>
    </ul>
  );
}
