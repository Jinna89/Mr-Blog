import React from "react";
import { Link } from "react-router-dom";

const BlogList = (props) => {
  return (
    <>
      <div className="container mx-auto my-16 py-8">
        <div className="grid mt-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {props.list.map((item,index)=>{
                return(
                    <Link key={index.toString()} to={'/details/'+item['id']} className="card bg-base-100 w-96 shadow-sm">
                        <figure>
                        <img
                        src={item['img']} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{item['title']}</h2>
                        <p>{item['short']}</p>
                    </div>
                    </Link>
                )
            })}
        </div>
      </div>
    </>
  );
};

export default BlogList;
