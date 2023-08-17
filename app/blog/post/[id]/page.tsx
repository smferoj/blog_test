import React from "react";

import dataSet from "../../../../data/blogData.json";

const PostPage = ({ params }: { params: { id: string }}) => {
  const id = params.id;

  const post = dataSet.find(item => item.id === parseInt(id));

  if(!post){
    return <p> Post not found</p>
  }
  return (
     <div className="w-full pt-[150px] flex justify-center items-center">
       <div className="w-3/4 p-4 rounded-md  mx-3 my-2 bg-slate-200 flex flex-col justify-center">
        <div className="flex flex-col my-3">
            <h2 className="font-semibold text-3xl text-center"> Post Details </h2>
              <h2> Number: {post.id}</h2>
              <h2> Title: {post.title}</h2>
              <p> Date: {post.date}</p>
              <p className="pt-3"> {post.content} </p>
        </div>
       </div>

     </div>
  );
};

export default PostPage;