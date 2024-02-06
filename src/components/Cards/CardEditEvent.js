import React from "react";

// components

export default function CardEditEvent() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-rc-white border-0">
        <div className="flex-auto px-4 lg:px-10 py-10">
          <form>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label className="mb-3 block text-rc-black">
                    Event Name
                  </label>
                  <input
                    type="text"
                    placeholder="Event Name"
                    className="border-[1.5px] px-4 py-3 placeholder-gray-500 text-rc-black bg-transparent outline-none border-gray-500 rounded-lg font-medium focus:border-rc-red focus:ring-rc-red active:border-rc-red-400 w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>

              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label className="mb-3 block text-rc-black">
                    Event Date
                  </label>
                  <input
                    type="date"
                    className="border-[1.5px] px-4 py-3 placeholder-gray-500 text-rc-black bg-transparent outline-none border-gray-500 rounded-lg font-medium focus:border-rc-red focus:ring-rc-red active:border-rc-red-400 w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <div className="w-full px-4">
                <div className="relative w-full mb-3">
                <label className="mb-3 block text-rc-black">
                Event Description
                </label>
                <textarea
                  rows={6}
                  placeholder="Event Description"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none border-gray-500  focus:border-rc-red focus:ring-rc-red active:border-rc-red-400 ease-linear transition-all duration-150"
                ></textarea>
                </div>
              </div>
              <div className="w-full px-4">
                <div className="relative w-full mb-3">
                <label className="mb-3 block text-rc-black">
                    Event Price
                  </label>
                  <div className="relative w-full">
                  <input
                    type="text"
                    className="border-[1.5px] px-10 py-3 placeholder-gray-500 text-rc-black bg-transparent outline-none border-gray-500 rounded-lg font-medium focus:border-rc-red focus:ring-rc-red active:border-rc-red-400 w-full ease-linear transition-all duration-150"
                  />
                  <span className="absolute top-[9.5px] sm:top-3 left-4 z-50 cursor-pointer"><i className="fa-solid fa-indian-rupee-sign"></i></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full  px-4">
              <label
                for="photo"
                className="mb-3 block text-rc-black"
              >
                Upload Photo
              </label>
              <label className="flex w-full cursor-pointer appearance-none items-center justify-center rounded-md border-2 border-dashed border-gray-500 p-6 transition-all focus:border-rc-red focus:ring-rc-red active:border-rc-red-400">
                <div className="space-y-1 text-center">
                  <div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-6 w-6 text-gray-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                      />
                    </svg>
                  </div>
                  <div className="text-gray-600">
                    <a
                      href="#"
                      className="font-medium text-primary-500 hover:text-primary-700"
                    >
                      Click to upload
                    </a>{" "}
                    or drag and drop
                  </div>
                  <p className="text-sm text-gray-500">
                    PNG, JPG or JPEG
                  </p>
                </div>
                <input id="photo" type="file" className="sr-only"/>
              </label>
            </div>
            <div className="flex justify-center mt-2">
            <button className="bg-rc-red-500 text-rc-white hover:bg-rc-red-400 active:bg-rc-red-400 font-bold uppercase text-sm mt-3 px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none transition duration-700 ease-in-out text-center w-36">
                  Submit
                </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
