import React from "react";
import { Link } from "react-router-dom";
import UserPage from "../../assets/images/user.png";

const UserLoginPage = () => {
  return (
    <div className="flex items-center justify-center bg-blue-100 py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-[#003B73] to-[#BFD7ED]">
      <section class="text-gray-600 body-font font-sans">
        <form className="bg-white pt-10 pb-6 mx-auto max-w-screen-lg rounded-lg">
          <div class="container mx-auto flex px-5 py-18 items-center justify-center flex-col">
            <div class="flex flex-col text-center w-full mb-6">
              <h1 class="sm:text-4xl text-5xl font-semibold title-font mb-2 text-[#000C66]">
                Hello User!
              </h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed font-semibold text-2xl text-[#000C66]">
                Welcome to Learning HubSpot.
              </p>
            </div>
            <img
              class="lg:w-1/4 md:w-1/3 w-3/4 mb-10 object-cover object-center rounded"
              alt="hero"
              src={UserPage}
            />
            <div class="text-center lg:w-2/3 w-full">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-semibold text-[#000C66]">
                You can access various features after Login.
              </h1>
              <p class="mb-8 leading-relaxed text-[18px] text-[#2c3e50]">
                Learning HubSpot is your ultimate destination for online
                education, offering a wide range of courses designed to empower
                you with the skills and knowledge needed to succeed in today's
                fast-paced world. Whether you're a student looking to enhance
                your academic knowledge, a professional aiming to advance your
                career, or a lifelong learner passionate about new subjects,
                Learning HubSpot provides personalized learning paths to meet
                your unique goals. Discover, Learn, and Grow with Learning
                HubSpot.
              </p>
              <div class="flex justify-center font-semibold">
                <Link
                  to="/signup"
                  class="inline-flex text-white bg-[#2c3e50] border-0 py-2 px-6 focus:outline-none hover:bg-[#3498db] rounded text-lg"
                >
                  Sign Up
                </Link>
                <Link
                  to="/login"
                  class="ml-4 inline-flex text-white bg-[#2c3e50] border-0 py-2 px-6 focus:outline-none hover:bg-[#3498db] rounded text-lg"
                >
                  Log In
                </Link>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default UserLoginPage;
