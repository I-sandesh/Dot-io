import { SendEvent } from "@/components/firebase/firebase";
import React, { useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "@/firebaseConfig";
import { useAuth } from "@/contexts/authContext";
import { useRouter } from "next/router";
function inputHTMLFormat(title, value, setValue, type = "text") {
  return (
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label
          className="block uppercase tracking-wide text-[#408080] text-xs font-bold mb-2"
          htmlFor="input"
        >
          {title}
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 transition-all"
          id="input"
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        required/>
      </div>
    </div>
  );
}
function CreateEvent() {
  const {user} = useAuth();
  const router = useRouter();
  if(!user?.uid){
    router.push("/login");
  }
  const [eventTitle, seteventTitle] = useState("");
  const [eventDesc, seteventDesc] = useState("");
  const [eventDate, seteventDate] = useState("");
  const [eventLocation, seteventLocation] = useState("");
  const [File, setFile] = useState("");
  const [eventCharge, setEventCharge] = useState(0);
  const [eventSponsor, setEventSponsor] = useState("");
  const [eventcoordinator1, setEventcoordinator1] = useState("");
  const [eventcoordinator2, setEventcoordinator2] = useState("");
  function submitHandler(e) {
    e.preventDefault();
    let data = {
      name: eventTitle,
      description: eventDesc,
      date: eventDate,
      location: eventLocation,
      charge: eventCharge,
      sponsors: eventSponsor,
      coordinator1: eventcoordinator1,
      coordinator2: eventcoordinator2,
      image: "",
      uid:user?.uid
    };
    if (File) {
      const storageRef = ref(
        storage,
        `/files/${new Date().getTime()}-${File.name}`
      );
      const uploadTask = uploadBytesResumable(storageRef, File);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            data.image = downloadURL;
            console.log("File available at", downloadURL);
            SendEvent(data);
          });
        }
      );
    } else {
      SendEvent(data);
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center p-6">
      <form onSubmit={submitHandler} className="w-full max-w-lg">
        {inputHTMLFormat("Event Name", eventTitle, seteventTitle, "text")}

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-[#408080] text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Event Image
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 transition-all"
              id="file"
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
            required/>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-[#408080] text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              event Description
            </label>
            <textarea
              className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none transition-all"
              id="message"
              value={eventDesc}
              onChange={(e) => seteventDesc(e.target.value)}
            required></textarea>
          </div>
        </div>

        {inputHTMLFormat(
          "Event Date & Time",
          eventDate,
          seteventDate,
          "datetime-local"
        )}
        {inputHTMLFormat("Event Venue", eventLocation, seteventLocation)}
        {inputHTMLFormat(
          "Charge(in $)",
          eventCharge,
          setEventCharge,
          "number"
        )}
        {inputHTMLFormat("Sponsors", eventSponsor, setEventSponsor)}

        {inputHTMLFormat(
          "Name & Number of Coordinator 1",
          eventcoordinator1,
          setEventcoordinator1
        )}

        {inputHTMLFormat(
          "Name & Number of Coordinator 2",
          eventcoordinator2,
          setEventcoordinator2
        )}

        
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <button
              className="shadow bg-[#408080] hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Add Event
            </button>
          </div>
          <div className="md:w-2/3"></div>
        </div>
      </form>
    </div>
  );
}

export default CreateEvent;
