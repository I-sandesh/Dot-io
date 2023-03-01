import React from "react";

function LoadingScreen() {
  return (
    <section className="bg-[#F3F4F6] min-h-screen bg-[url(https://thumbs.gfycat.com/ActiveLinedDevilfish-size_restricted.gif)] bg-no-repeat bg-cover flex justify-center items-center">
      <div className="flex justify-center items-center top-0 left-0 bottom-0 right-0 bg-[#0004] absolute transition-all">
        <div className="text-white text-3xl text-center">
          Welcome To
          <h1 className="font-extrabold text-8xl tracking-wider">Eventify</h1>
          All your events are here
        </div>
      </div>
    </section>
  );
}

export default LoadingScreen;
