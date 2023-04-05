import React from "react";

function Review() {
  return (
    <>
      <div className="mt-20">
        <h1 className="text-xl font-semibold">Rating and reviews</h1>
        <h2 className="text-base">
          Rating and reviews are verified from people who read the same type of
          books.
        </h2>
        <div className="mt-10">
          <div className="flex gap-5 mb-5 text-xl items-center">
            <p>5</p>
            <div className="relative max-w-[316px]">
              <div className="bg-[#D9D9D9] py-3 px-[316px] rounded-xl "></div>
              <div className="bg-[#5CCC7E] py-3 absolute top-0 rounded-xl px-[80%]"></div>
            </div>
          </div>
          <div className="flex gap-5 mb-5 text-xl items-center">
            <p>4</p>
            <div className="relative max-w-[316px]">
              <div className="bg-[#D9D9D9] py-3 px-[316px] rounded-xl "></div>
              <div className="bg-[#5CCC7E] py-3 absolute top-0 rounded-xl px-[8%]"></div>
            </div>
          </div>
          <div className="flex gap-5 mb-5 text-xl items-center">
            <p>3</p>
            <div className="relative max-w-[316px]">
              <div className="bg-[#D9D9D9] py-3 px-[316px] rounded-xl "></div>
              <div className="bg-[#5CCC7E] py-3 absolute top-0 rounded-xl px-[5%]"></div>
            </div>
          </div>
          <div className="flex gap-5 mb-5 text-xl items-center">
            <p>2</p>
            <div className="relative max-w-[316px]">
              <div className="bg-[#D9D9D9] py-3 px-[316px] rounded-xl "></div>
              <div className="bg-[#5CCC7E] py-3 absolute top-0 rounded-xl px-[4%]"></div>
            </div>
          </div>
          <div className="flex gap-5 mb-5 text-xl items-center">
            <p>1</p>
            <div className="relative max-w-[316px]">
              <div className="bg-[#D9D9D9] py-3 px-[316px] rounded-xl "></div>
              <div className="bg-[#5CCC7E] py-3 absolute top-0 rounded-xl px-[3%]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;
