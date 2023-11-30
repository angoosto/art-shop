"use client";
import type { NextPage } from "next";
import Link from "next/link";
import Jumbotron from "./components/Jumbotron";
import Image from "next/image";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Toaster, toast } from "react-hot-toast";

const Home: NextPage = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleSubscription = () => {
    setShowModal(false);
    toast.success("Subscribed!", {
      iconTheme: { secondary: "#FAF5E9", primary: "#E3735E" },
      style: { border: "1px solid #E3735E", color: "#E3735E" },
    });
  };
  return (
    <>
      <Toaster />
      <Transition appear show={showModal} as={Fragment}>
        <Dialog
          as="div"
          className="flex flex-col items-center justify-center text-center"
          onClose={() => setShowModal(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-primary p-6 align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6"
                  >
                    Subscribe to my newsletter
                  </Dialog.Title>
                  <form className="group">
                    <div className="my-4">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="peer bg-gray-50 border border-gray text-gray-900 text-sm rounded-lg focus:border-accent block w-full p-2.5"
                        placeholder=" "
                        required
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      ></input>
                      <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                        Please enter a valid email address
                      </span>
                    </div>
                    <div className="mt-4">
                      <button
                        type="button"
                        className="flex justify-center rounded-md border border-accent bg-primary px-4 py-2 text-sm font-medium text-accent hover:bg-accent hover:text-gray-100 w-full group-invalid:pointer-events-none group-invalid:opacity-30"
                        onClick={handleSubscription}
                      >
                        Subscribe
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <div>
        <Jumbotron />
        <section className="bg-primary w-full h-full">
          <div
            className="justify-center items-center p-8 max-w-2xl space-y-3"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Image
              className="md:float-left m-auto p-3"
              src="/bethany-loveday-title-1683291712.jpg"
              alt={"Artist picture"}
              width={200}
              height={220}
            />
            <p>
              My name is Bethany Jefferson-Loveday and I am an artist based in
              the vale of Evesham, a charming area nestled between the Malvern
              Hills and the Cotswolds. I discovered an innate love of painting
              from a young age. I studied fine art up to A-Level at school and
              spent far too much time on my art homework, to the detriment of my
              other subjects and frustration of my Mother! I focused on
              portraits at the time, inspired by great artists such as Lucian
              Freud. I have spent much of my youth and 20s exploring galleries
              for inspiration.
            </p>

            <p>
              I had a break from art, focusing on my career, degree and
              professional qualifications. However, in 2022 when pregnant with
              my first baby, Heidi, I was diagnosed with cancer. What was so
              unbelievable about this diagnosis was that my husband was also
              receiving chemotherapy following a cancer diagnosis. I was signed
              off work for 4 months whilst having chemotherapy. During this
              period, I started painting again. It was a great way to relax,
              focus the mind and fill the walls of our home. I assumed I would
              be too busy to continue painting when Heidi arrived, but was
              determined and have managed to rediscover my love of painting. My
              husband and I are now in remission and unbelievably ended up on
              BBC Breakfast{" "}
              <Link
                href={"https://www.youtube.com/watch?v=8E1wz3E3nfY"}
                style={{ textDecoration: "underline" }}
              >
                where we told our story to Naga Munchetti and Charlie Stayt and
                Heidi went viral when she broke wind!
              </Link>
            </p>

            <p>
              My most recent works focus on gardens around Worcestershire and
              The Cotswolds, which I visited during my pregnancy and since
              having Heidi. We are surrounded by beautiful places and it is
              great to be able to bring them to life on canvas. I paint from my
              own photographs using acrylics. I have been recently inspired by
              David Hockney&apos;s style and techniques, using his book &quot;A
              Bigger Picture&quot; as a point of reference. I particularly like
              to focus on large expanses of foliage and do so in a bold,
              colourful style. I have very much enjoyed painting on a reasonably
              large scale as it enables me to be more expressive within my work.
            </p>

            <p>
              Thanks for taking the time to look at my work. Any questions,
              please reach out.
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="items-center justify-center text-accent border border-accent rounded-md hover:bg-accent hover:text-gray-100 p-2 w-full"
            >
              Subscribe to my newsletter
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
