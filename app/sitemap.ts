export default async function sitemap() {
  const routes = ["", "/about", "/blog", "/guestbook", "/uses"].map(
    (route) => ({
      url: `https://leerob.io${route}`,
      lastModified: new Date().toISOString().split("T")[0],
    })
  );

  return [...routes];
}
