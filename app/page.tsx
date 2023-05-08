import Image from "next/image";
import { GitHubIcon, MediumIcon, TwitterIcon } from "components/icons";
import { name, about, bio, avatar } from "lib/info";
import emailSubscribe from "components/email-subscribe";

export const revalidate = 60;

export default async function HomePage() {
  let starCount = 0,
    views = 0,
    tweetCount = 0;

  // try {
  //   [starCount, views, tweetCount] = await Promise.all([
  //     getStarCount(),
  //     getBlogViews(),
  //     getTweetCount(),
  //   ]);
  // } catch (error) {
  //   console.error(error);
  // }

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">{name}</h1>
      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
        {about()}
      </p>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <Image
          alt={name}
          className="rounded-full grayscale"
          src={avatar}
          placeholder="blur"
          width={100}
          priority
        />
        <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/mouadbouras"
            className="flex items-center gap-2"
          >
            <TwitterIcon />
            {`follow me on Twitter`}
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/mouadbouras"
            className="flex items-center gap-2"
          >
            <GitHubIcon />
            {`checkout my GitHub`}
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://medium.com/@MBCube"
            className="flex items-center gap-2"
          >
            <MediumIcon />
            {` view my Medium articles`}
          </a>
        </div>
      </div>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {bio()}
      </p>
      {emailSubscribe()}
    </section>
  );
}
