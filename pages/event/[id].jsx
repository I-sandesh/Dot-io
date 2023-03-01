import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { FaTwitter, FaFacebook, FaWhatsapp, FaShare } from "react-icons/fa";
import { GetEvents } from "@/components/firebase/firebase";
export default function Blog() {
  const router = useRouter();
  const { id } = router.query;
  const Events = GetEvents();
  if (Events.length == 0) {
    return <>Loading</>;
  }
  const index = Events.findIndex((Event) => {
    return Event.id == id;
  });
  let shareText = `
Do join this exciting event
Title: ${name}

http://dot-io.vercel.app/event/${id}
  `;
  // const Event = {
  //   name: "Solution Challenge Event",
  //   image:
  //     "https://th.bing.com/th/id/OIP.lbNwtS5QHxECLgBVO2ZLzAHaEK?pid=ImgDet&rs=1",
  //   description:
  //     "Build a solution to a local problem using Google technologies in accordance with one or more of the United Nations 17 Sustainable Development Goals.",
  //   date: "Fri, Mar 6, 7:00 AM",
  //   location: "Raj Park, New Delhi",
  //   charge: 200,
  //   sponsors: "Bing",
  //   coordinator1: "Himanshu, 8837472387",
  //   coordinator2: "Himasshu, 3438548356",
  // };
  const Event = Events[index];
  return (
    <>
      <Head>
        <title>{Event.name}</title>
        <meta name="description" content={Event.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="w-full min-h-screen bg-[#F3F4F6] flex p-3 justify-center items-center">
          <div className="card mx-5 container shadow-lg m-auto flex  text-center min-w-[250px] p-5 rounded-md flex-col flex-wrap justify-center max-w-3xl">
            <div className="upper flex flex-row flex-wrap justify-center">
              <div className="left max-w-sm">
                <img src={Event.image} alt="" />
              </div>
              <div className="right max-w-sm p-6">
                <h2 className="font-bold my-3 text-xl text-[#408080]">
                  {Event.name}
                </h2>
                <p>{Event.description}</p>
              </div>
            </div>
            <div className="">
              <div className="flex justify-center w-full gap-7">
                <span className="date text-[#408080] my-3">{Event.date}</span>
                <span className="text-[#2d4747] my-3">{Event.location}</span>
              </div>
              <p className="font-bold">Coordinators</p>
              <p>{Event.coordinator1}</p>
              <p className="mb-5">{Event.coordinator2}</p>
              <div>
                <Link
                  href={"/register/" + id}
                  className="bg-primary text-white bg-[#408080] px-4 py-2 rounded-md hover:bg-[#408080bb]"
                >
                  Register
                </Link>
                <Link
                  href={"/register/" + id}
                  className="bg-primary text-white bg-[#4264eb] px-4 py-2 rounded-md hover:bg-[#408080bb] ml-3"
                >
                  Feedback
                </Link>
              </div>

              <div className="text-right font-bold mt-4">
                <span className="text-right font-bold my-3">
                  {" "}
                  Sponsored By {Event.sponsors}
                </span>
              </div>
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
          </div>
        </div>
      </main>
    </>
  );
}
