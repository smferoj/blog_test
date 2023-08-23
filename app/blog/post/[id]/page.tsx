import getSinglePost from "@/lib/getSinglePost";
import Image from "next/image";
import Modal from "../../../components/Modal"

const singleBlog = async ({params}: { params: { id: string }}) => {
  const id = params.id;
  const post = await getSinglePost(id);
  console.log(post)
  if(!post){
    return <p> Post not found</p>
  }

  return (
     <div className="w-full pt-[20px] flex justify-center items-center">
       <div className="w-3/4 p-4 rounded-md  mx-3 my-2 bg-slate-200 flex flex-col justify-center">
       <div className="w-full pt-[15px] flex justify-center items-center">
      <div className="w-3/4 p-4 rounded-md mx-3 my-2 bg-slate-200 flex flex-col justify-center">
        <div className="flex flex-col my-3">
          <h2 className="font-semibold text-3xl text-center">Post Details</h2>
          <h2>Post ID: {post.postDetails.id}</h2>
          <p>Title: {post.postDetails.list_id}</p>
          <p>Title: {post.postDetails.title}</p>
          <div className="">
          <Image 
          src={post.postDetails.img} 
          alt="image" 
          height={120}
          width={120}
          layout="responsive"
           />
          </div>
          <div className="">
          <Modal modal={post.postDetails.content}/>
          
          </div>
          <div className="">
           <p>
               Updated at: {post.postDetails.created_at}
            </p>
           <p>
               Created at: {post.postDetails.updated_at}
            </p>
          </div>

        </div>
      </div>
    </div>
    
       </div>

     </div>
  );
};

export default singleBlog;