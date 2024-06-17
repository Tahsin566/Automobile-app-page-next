"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {

  return <>

    <div className="flex bg-gradient-to-r from-blue-800 to-blue-600  justify-between p-[12px] text-white flex-wrap gap-[20px]">
      <div className="text-[20px] font-bold"><span className="text-[aquamarine]">A</span>utomobile</div>

      <div className="ju flex justify-between gap-[30px] flex-wrap">

        <div>Home</div>
        <div>Contact</div>
        <div>About</div>
      </div>
    </div>

    <div className="flex p-[25px] justify-between flex-wrap bg-slate-300 rounded-br-[200px] rounded-bl-[100px] gap-[10px]">

      <div className="max-w-[500px] flex flex-col gap-[20px]">

        <h2 className="font-bold text-[20px]">Your stop for car information</h2>
        <div className="text-[15px]">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris i officia deserunt mollit anim id est laborum."</div>
        <button className="bg-purple-700 w-[130px] px-[10px] py-[6px] text-white rounded-[20px]">Learn More</button>

      </div>

      <div>
        <img className="rounded-[90px]" src="https://img.freepik.com/free-photo/3d-car-with-vibrant-colors_23-2150797034.jpg?t=st=1718636603~exp=1718640203~hmac=bb4281dbb4c4536874b4834cdbd4baf5b4c38e8af17a23c47c827651fb5e3957&w=540" width={250} height={250} />
      </div>

    </div>

    <div className="text-center py-[20px] font-bold text-[18px]">Hook up for a scroll</div>

    <div className="flex gap-[30px] justify-center items-center px-[20px] flex-wrap">

      <div className=" min-h-[110px] max-w-[400px]">
        <div><span>⭕ </span>Car models</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        </div>
      </div>


      <div className="min-h-[110px] max-w-[400px]">
        <div><span>⭕ </span>Car parts</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        </div>
      </div>

      <div className="min-h-[110px] max-w-[400px]">
        <div><span>⭕ </span>Future releases</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        </div>
      </div>

    </div>

    <div className="flex justify-around py-[20px] bg-slate-300 gap-[60px]  items-center mt-[20px] flex-wrap px-[5px] rounded-tl-[100px]">

      <div>

        <div className="mb-[10px] font-semibold">Car models</div>
        <div className="text-[15px]"><span className="text-[12px]">⭕</span>Car models info</div>
        <div className="text-[15px]"><span className="text-[12px]">⭕</span>Car stats</div>
        <div className="text-[15px]"><span className="text-[12px]">⭕</span>Potential releases</div>

      </div>

      <div>

        <img className="rounded-[30px]" src="https://img.freepik.com/free-photo/cyberpunk-urban-scenery-with-car_23-2150712490.jpg?t=st=1718639583~exp=1718643183~hmac=babe7b3c34ffb93e0159fa621c223b21614b69bfb1588f466e52f4432fdcc18b&w=350" />

      </div>

    </div>
    <div className="flex justify-around py-[20px] bg-slate-300 gap-[60px]  items-center mt-[10px] flex-wrap px-[5px] rounded-br-[100px]">

      <div>

        <img className="rounded-[30px]" src="https://img.freepik.com/free-photo/spare-parts-car_1170-1344.jpg?t=st=1718645661~exp=1718649261~hmac=0f6ae4029d9cdb8b5fe5015e561c08c69d59d4eacd189f2d1ba2813c640bf32c&w=350" />

      </div>
      <div>

        <div className="mb-[10px] font-semibold">Car parts</div>
        <div className="text-[15px]"><span className="text-[12px]">⭕</span>Car models parts</div>
        <div className="text-[15px]"><span className="text-[12px]">⭕</span>Car old parts</div>
        <div className="text-[15px]"><span className="text-[12px]">⭕</span>Parts store</div>

      </div>


    </div>


    {/* Reviews */}
    <div className="text-center text-[18px] font-bold py-[10px]">Reviews by Renowned Companies</div>
    <div className="flex p-[10px] justify-around flex-wrap gap-[10px]">

      <div className="flex flex-col items-center">

        <div>Hyundai</div>
        <div>⭐⭐⭐⭐⭐</div>

      </div>


      <div className="flex flex-col items-center">

        <div>ATS</div>
        <div>⭐⭐⭐⭐</div>

      </div>


      <div className="flex flex-col items-center">

        <div>Honda</div>
        <div>⭐⭐⭐⭐⭐</div>

      </div>


    </div>

    <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white flex justify-around flex-wrap px-[5px] py-[10px] gap-[20px]">
      <div className="text-[20px] font-bold mb-[10px]"><span className="text-[aquamarine]">A</span>utomobile</div>

      <div className="flex gap-[50px] flex-wrap justify-center">

        <div className="flex justify-center flex-col items-center">
          <div>Footer</div>
          <div className="text-center">lorem ipsum dolor sit</div>
          <div className="text-center">lorem ipsum dolor sit</div>
        </div>



        <div className="flex justify-center flex-col items-center">
          <div>Footer</div>
          <div className="text-center">lorem ipsum dolor sit</div>
          <div className="text-center">lorem ipsum dolor sit</div>
        </div>



        <div className="flex justify-center flex-col items-center">
          <div>Footer</div>
          <div className="text-center">lorem ipsum dolor sit</div>
          <div className="text-center">lorem ipsum dolor sit</div>
        </div>

      </div>

      <div className="flex justify-between gap-[10px] items-center">

        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30" fill="#fff">
          <path d="M 23 3 A 4 4 0 0 0 19 7 A 4 4 0 0 0 19.09375 7.8359375 L 10.011719 12.376953 A 4 4 0 0 0 7 11 A 4 4 0 0 0 3 15 A 4 4 0 0 0 7 19 A 4 4 0 0 0 10.013672 17.625 L 19.089844 22.164062 A 4 4 0 0 0 19 23 A 4 4 0 0 0 23 27 A 4 4 0 0 0 27 23 A 4 4 0 0 0 23 19 A 4 4 0 0 0 19.986328 20.375 L 10.910156 15.835938 A 4 4 0 0 0 11 15 A 4 4 0 0 0 10.90625 14.166016 L 19.988281 9.625 A 4 4 0 0 0 23 11 A 4 4 0 0 0 27 7 A 4 4 0 0 0 23 3 z"></path>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 32 32" fill="#fff">
          <path d="M 4.0175781 4 L 13.091797 17.609375 L 4.3359375 28 L 6.9511719 28 L 14.246094 19.34375 L 20.017578 28 L 20.552734 28 L 28.015625 28 L 18.712891 14.042969 L 27.175781 4 L 24.560547 4 L 17.558594 12.310547 L 12.017578 4 L 4.0175781 4 z M 7.7558594 6 L 10.947266 6 L 24.279297 26 L 21.087891 26 L 7.7558594 6 z"></path>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50" fill="#fff">
          <path d="M 25 3 C 12.861562 3 3 12.861562 3 25 C 3 36.019135 11.127533 45.138355 21.712891 46.728516 L 22.861328 46.902344 L 22.861328 29.566406 L 17.664062 29.566406 L 17.664062 26.046875 L 22.861328 26.046875 L 22.861328 21.373047 C 22.861328 18.494965 23.551973 16.599417 24.695312 15.410156 C 25.838652 14.220896 27.528004 13.621094 29.878906 13.621094 C 31.758714 13.621094 32.490022 13.734993 33.185547 13.820312 L 33.185547 16.701172 L 30.738281 16.701172 C 29.349697 16.701172 28.210449 17.475903 27.619141 18.507812 C 27.027832 19.539724 26.84375 20.771816 26.84375 22.027344 L 26.84375 26.044922 L 32.966797 26.044922 L 32.421875 29.564453 L 26.84375 29.564453 L 26.84375 46.929688 L 27.978516 46.775391 C 38.71434 45.319366 47 36.126845 47 25 C 47 12.861562 37.138438 3 25 3 z M 25 5 C 36.057562 5 45 13.942438 45 25 C 45 34.729791 38.035799 42.731796 28.84375 44.533203 L 28.84375 31.564453 L 34.136719 31.564453 L 35.298828 24.044922 L 28.84375 24.044922 L 28.84375 22.027344 C 28.84375 20.989871 29.033574 20.060293 29.353516 19.501953 C 29.673457 18.943614 29.981865 18.701172 30.738281 18.701172 L 35.185547 18.701172 L 35.185547 12.009766 L 34.318359 11.892578 C 33.718567 11.811418 32.349197 11.621094 29.878906 11.621094 C 27.175808 11.621094 24.855567 12.357448 23.253906 14.023438 C 21.652246 15.689426 20.861328 18.170128 20.861328 21.373047 L 20.861328 24.046875 L 15.664062 24.046875 L 15.664062 31.566406 L 20.861328 31.566406 L 20.861328 44.470703 C 11.816995 42.554813 5 34.624447 5 25 C 5 13.942438 13.942438 5 25 5 z"></path>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48" fill="#fff">
          <path d="M 11.5 6 C 8.4802259 6 6 8.4802259 6 11.5 L 6 36.5 C 6 39.519774 8.4802259 42 11.5 42 L 36.5 42 C 39.519774 42 42 39.519774 42 36.5 L 42 11.5 C 42 8.4802259 39.519774 6 36.5 6 L 11.5 6 z M 11.5 9 L 36.5 9 C 37.898226 9 39 10.101774 39 11.5 L 39 36.5 C 39 37.898226 37.898226 39 36.5 39 L 11.5 39 C 10.101774 39 9 37.898226 9 36.5 L 9 11.5 C 9 10.101774 10.101774 9 11.5 9 z M 15.5 13 A 2.5 2.5 0 0 0 15.5 18 A 2.5 2.5 0 0 0 15.5 13 z M 14 20 C 13.447 20 13 20.447 13 21 L 13 34 C 13 34.553 13.447 35 14 35 L 17 35 C 17.553 35 18 34.553 18 34 L 18 21 C 18 20.447 17.553 20 17 20 L 14 20 z M 21 20 C 20.447 20 20 20.447 20 21 L 20 34 C 20 34.553 20.447 35 21 35 L 24 35 C 24.553 35 25 34.553 25 34 L 25 26.5 C 25 25.121 26.121 24 27.5 24 C 28.879 24 30 25.121 30 26.5 L 30 34 C 30 34.553 30.447 35 31 35 L 34 35 C 34.553 35 35 34.553 35 34 L 35 26 C 35 22.691 32.309 20 29 20 C 27.462 20 26.063 20.586016 25 21.541016 L 25 21 C 25 20.447 24.553 20 24 20 L 21 20 z"></path>
        </svg>

      </div>

    </div>

  </>
}
