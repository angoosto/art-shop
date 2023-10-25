import type { NextPage } from "next";
import Link from "next/link";
import Jumbotron from "./components/Jumbotron";

const Home: NextPage = () => {
  return (
    <div>
      <Jumbotron />
      <div>
        <div
          className="flex justify-center items-center m-8 max-w-lg"
          style={{
            marginLeft: "auto",
            marginRight: "auto"
        }}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
