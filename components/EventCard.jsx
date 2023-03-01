import { useAuth } from "@/contexts/authContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTwitter, FaFacebook, FaWhatsapp, FaShare } from "react-icons/fa";
import { DeleteEvent } from "./firebase/firebase";
function DateFormat(date) {
  let d = new Date(date);
  var strArray = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (d.getDate() +
    " " +
    strArray[d.getMonth()] +
    " " +
    d.getFullYear() +
    " " +
    d.getHours() +
    ":" +
    d.getMinutes());
}

function EventCard({ name, description, date, location, image, id, uid }) {
  const { user } = useAuth();
  let shareText = `
Do join this exciting event
Title: ${name}

http://dot-io.vercel.app/event/${id}
  `;
  return (
    <div className="relative card mx-5 bg-white container shadow-lg m-auto flex flex-col text-center max-w-[300px] p-5 rounded-md min-h-[400px]">
      <img src={image} alt="" className="max-h-40" />
      <h2 className="font-bold my-3 text-xl text-[#408080]">{name}</h2>
      <p
        className=""
        style={{
          height: "60px",
          lineHeight: "20px",
          overflow: "hidden",
        }}
      >
        {description.substring(0, 100)}...
      </p>
      <span className="date text-[#408080] mt-3">{DateFormat(date)}</span>
      <span className="text-[#2d4747] mb-3">{location.substring(0, 30)}</span>

      <Link
        href={"/event/" + id}
        className="bg-primary text-white bg-[#408080] px-4 py-2 rounded-md hover:bg-[#408080bb]"
      >
        View Event
      </Link>
      {user?.uid &&
        (uid === user?.uid || user?.uid == "kueF1pvVYtYuL9aMMS7lHJnocxp2") && (
          <button
            onClick={() => DeleteEvent(id)}
            className="bg-primary text-white bg-[#df4548] px-4 py-2 rounded-md hover:bg-[#408080bb] my-2"
          >
            Delete Event
          </button>
        )}

      {/* Whatsapp Share */}

      <div className="flex justify-evenly text-3xl mt-2">
        <a
          href={`https://wa.me/?text=${encodeURIComponent(shareText)}`}
          className="text-green"
          target={"_blank"}
          rel="noreferrer"
        >
          {<FaWhatsapp />}
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=http://localhost:3000/event/${id}`}
          className="text-blue-900"
          target={"_blank"}
          rel="noreferrer"
        >
          {<FaFacebook />}
        </a>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            shareText
          )}`}
          className="text-blue-400"
          target={"_blank"}
          rel="noreferrer"
        >
          {<FaTwitter />}
        </a>

        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            shareText
          )}`}
          className="text-gray-800"
        >
          {<FaShare />}
        </a>
      </div>
    </div>
  );
}

export default EventCard;
