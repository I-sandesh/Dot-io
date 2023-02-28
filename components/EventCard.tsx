import Link from "next/link";
import React from "react";

function EventCard({
    name,
    description,
    date,
    location,
    image,
    id
}: {    
    name: string;
    description: string;
    date: string;
    location: string;
    image: string;
    id:string;
}) {
  let shareText = `
Do join this exciting event
Title: ${name}

http://localhost:3000/event/${id}
  `;
  return (
    <div className="card mx-5 container shadow-lg m-auto flex flex-col text-center max-w-[300px] p-5 rounded-md">
      <img
        src={image}
        alt=""
      />
      <h2 className="font-bold my-3 text-xl text-[#408080]">
        {name}
      </h2>
      <p>
        {description}
      </p>
      <span className="date text-[#408080] mt-3">{date}</span>
      <span className="text-[#2d4747] mb-3">{location}</span>

      <Link
        href={"/event/"+id}
        className="bg-primary text-white bg-[#408080] px-4 py-2 rounded-md hover:bg-[#408080bb]"
      >
        View Event
      </Link>
      {/* Whatsapp Share */}
      <a
        href={`https://wa.me/?text=${encodeURIComponent(shareText)}`}
        className="bg-primary text-white bg-[#408080] px-4 py-2 rounded-md hover:bg-[#408080bb]"
      >
        Share
      </a>

    </div>
  );
}

export default EventCard;
