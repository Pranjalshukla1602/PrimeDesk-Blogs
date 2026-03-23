import RedirectToBlogs from "@/components/RedirectToBlogs";

/**
 * No standalone marketing home — send visitors to the blog index.
 */
export default function Home() {
  return <RedirectToBlogs />;
}
