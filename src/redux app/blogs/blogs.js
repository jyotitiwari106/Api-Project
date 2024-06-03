import React from "react";
import { useSelector } from "react-redux";

const Blogs = () => {
  const data = useSelector((state) => state.blogs.value) || [];

  console.log(data);

  return (
    <div>
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        {Array.isArray(data) && data.length > 0 && (
          <a
            rel="noopener noreferrer"
            href="#"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-50"
          >
            <img
              src="https://source.unsplash.com/random/480x360"
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                {data[0]?.title}
              </h3>
              <span className="text-xs text-gray-600">February 19, 2021</span>
              <p>{data[0]?.body}</p>
            </div>
          </a>
        )}
        <div className="grid justify-center  gap-6 grid-cols-3">
          {Array.isArray(data) &&
            data.slice(1, 11).map((blog) => (
              <a
                key={blog.id}
                rel="noopener noreferrer"
                href="#"
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50"
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded h-44 bg-gray-500"
                  src="https://source.unsplash.com/random/480x360?1"
                  alt=""
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl capitalize font-semibold group-hover:underline group-focus:underline">
                    {blog.title}
                  </h3>
                  <span className="text-xs text-gray-600">
                    January 21, 2021
                  </span>
                  <p>{blog.body}</p>
                </div>
              </a>
            ))}
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            className="px-6 py-3 text-sm rounded-md hover:underline bg-gray-50 text-gray-600"
          >
            Load more posts...
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
