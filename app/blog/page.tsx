import Link from "next/link";
import getAllPosts from "../../lib/getAllPosts";

export default async function BlogPage() {
  const posts = await getAllPosts();
  // console.log(posts);

  return (
    <main className="w-full h-full">
      <div className="md:w-2/4 sm:w-3/4 m-auto p-4 my-4 rounded-lg bg-slate-800 drop-shadow-lg">
        <h1 className="text-slate-200 text-center text-2xl font-extrabold">
          Blogs Page
        </h1>
      </div>

      {/* ========Blogs===== */}
      <div className="w-full flex flex-col justify-center items-center">
        {posts?.map((post: any, index: any) => (
          <div
            className="w-3/4 p-4 rounded-md mx-3 my-2 bg-slate-200 flex flex-col justify-center"
            key={index}
          >
            <div className="flex items-center my-1">
              <div className="mr-auto">
                <h2 className="mr-auto font-bold"> {post.id}: {post.title}</h2>
              </div>
              <Link
                href={`/blog/post/${post.id}`}
                className="px-4 py-2 text-center text-xl  bg-slate-900 rounded-md font-semibold text-slate-200"
              >
                Read Post
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
