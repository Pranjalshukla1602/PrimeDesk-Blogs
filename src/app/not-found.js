import RedirectToBlogs from "@/components/RedirectToBlogs";

/**
 * Any unknown route (404) sends users to the blog index.
 */
export default function NotFound() {
  return <RedirectToBlogs />;
}
