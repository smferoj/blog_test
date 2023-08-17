import Link from "next/link";

export default async function Home() {
  return (
    <main className="w-full h-full pt-[150px]">
      <div className="md:w-2/4 sm:w-3/4 m-auto p-4 my-4 rounded-lg bg-slate-800 drop-shadow-lg">
        <h1 className="text-slate-200 text-center text-3xl font-extrabold"> MY BLOG APP</h1>
        {/* Link */}
      </div>
      <div className="flex my-10">
          <Link href={"/blog"} className="w-3/5 md:w-2/6 text-center rounded-md p-2 m-auto bg-slate-200 font-semibold " > See Blogs </Link>
        </div>
      
    </main>
  )
}
