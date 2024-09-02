import React, { useState } from "react";
import AndroidAppdev from "../assets/courseimages/AndroidAppdev.jpg";
import Aws from "../assets/courseimages/Aws.png";
import BigData from "../assets/courseimages/BigData.png";
import CloudComputing from "../assets/courseimages/CloudComputing.jpg";
import DataScience from "../assets/courseimages/DataScience.jpg";
import FlutterAndDartDev from "../assets/courseimages/FlutterAndDartDev.png";
import GoogleCloud from "../assets/courseimages/GoogleCloud.png";
import IOSdev from "../assets/courseimages/IOSdev.jpg";
import JavaImg from "../assets/courseimages/JavaImg.png";
import JavascriptImg from "../assets/courseimages/JavascriptImg.jpg";
import MachineLearning from "../assets/courseimages/MachineLearning.png";
import MsAzure from "../assets/courseimages/MsAzure.jpg";
import Python from "../assets/courseimages/Python.jpg";
import PythonForDA from "../assets/courseimages/PythonForDA.jpg";
import ReactJsImg from "../assets/courseimages/ReactJsImg.png";
import ReactNative from "../assets/courseimages/ReactNative.png";
import AmazonLogo from "../assets/courseimages/AmazonLogo.png";
import GoogleLogo from "../assets/courseimages/GoogleLogo.png";
import MsLogo from "../assets/courseimages/MsLogo.png";
import FbLogo from "../assets/courseimages/FbLogo.png";
import AppleLogo from "../assets/courseimages/AppleLogo.png";

const alumniCompanies = [
  { name: "Google", logo: GoogleLogo },
  { name: "Microsoft", logo: MsLogo },
  { name: "Amazon", logo: AmazonLogo },
  { name: "Facebook", logo: FbLogo },
  { name: "Apple", logo: AppleLogo },
];

const allCourses = {
  "Web Development": [
    {
      name: "Python for Web Development",
      image: Python,
      description:
        "Master Python for web development in this comprehensive course. Learn to build dynamic websites and web applications using Django and Flask frameworks. Explore database integration, RESTful API development, and deployment strategies. By the end, you'll be able to create robust, scalable web solutions using Python.",
      link: "/course1",
    },
    {
      name: "Java Web Development",
      image: JavaImg,
      description:
        "Dive deep into Java web development with this intensive course. Learn to build enterprise-grade web applications using Spring Boot and Hibernate. Master RESTful web services, microservices architecture, and security best practices. Gain hands-on experience with real-world projects and industry-standard tools.",
      link: "#",
    },
    {
      name: "React.js Mastery",
      image: ReactJsImg,
      description:
        "Become a React.js expert with this comprehensive course. Learn to build modern, interactive user interfaces using React hooks, context API, and Redux. Master component lifecycle, state management, and performance optimization techniques. Create responsive, accessible web applications and integrate with backend APIs.",
      link: "#",
    },
    {
      name: "Full-Stack JavaScript",
      image: JavascriptImg,
      description:
        "Master full-stack JavaScript development in this all-encompassing course. Learn to build complete web applications using Node.js, Express, and MongoDB on the backend, and React.js on the frontend. Explore authentication, real-time features with WebSockets, and deployment to cloud platforms. Become proficient in modern JavaScript ecosystem and tools.",
      link: "#",
    },
  ],
  "Data Science": [
    {
      name: "Data Science Fundamentals",
      image: DataScience,
      description:
        "Lay a solid foundation in data science with this comprehensive course. Learn essential statistical concepts, data manipulation techniques, and exploratory data analysis. Master popular Python libraries like Pandas, NumPy, and Matplotlib for data processing and visualization. Gain practical experience with real-world datasets and develop critical analytical skills.",
      link: "#",
    },
    {
      name: "Machine Learning Essentials",
      image: MachineLearning,
      description:
        "Dive into the world of machine learning with this in-depth course. Explore various ML algorithms including regression, classification, clustering, and deep learning. Learn to implement these algorithms using scikit-learn and TensorFlow. Understand model evaluation, feature engineering, and hyperparameter tuning to optimize your ML models.",
      link: "#",
    },
    {
      name: "Python for Data Analysis",
      image: PythonForDA,
      description:
        "Master data analysis using Python in this practical, hands-on course. Learn to clean, transform, and analyze complex datasets using Pandas and NumPy. Explore advanced data visualization techniques with Matplotlib and Seaborn. Gain proficiency in statistical analysis, time series analysis, and working with various data formats.",
      link: "#",
    },
    {
      name: "Big Data Analytics",
      image: BigData,
      description:
        "Unlock the power of big data with this comprehensive analytics course. Learn to process and analyze massive datasets using Hadoop and Spark ecosystems. Master distributed computing concepts, data streaming, and NoSQL databases. Explore machine learning at scale and gain hands-on experience with real-world big data projects.",
      link: "#",
    },
  ],
  "Mobile Development": [
    {
      name: "React Native Development",
      image: ReactNative,
      description:
        "Build cross-platform mobile apps with React Native in this comprehensive course. Learn to create native iOS and Android applications using JavaScript and React. Master component-based architecture, state management, and native module integration. Gain hands-on experience with real-world app development and deployment.",
      link: "#",
    },
    {
      name: "iOS App Development with Swift",
      image: IOSdev,
      description:
        "Become an iOS developer with this in-depth Swift programming course. Learn to build elegant, high-performance apps for iPhone and iPad. Master UIKit, SwiftUI, and key iOS frameworks for networking, data persistence, and location services. Gain practical experience with Xcode and publish your own app to the App Store.",
      link: "#",
    },
    {
      name: "Android App Development",
      image: AndroidAppdev,
      description:
        "Master Android app development using Kotlin in this comprehensive course. Learn to create robust, user-friendly applications for the world's most popular mobile platform. Explore Android architecture components, material design, and data storage options. Gain hands-on experience with Android Studio and Google Play publishing process.",
      link: "#",
    },
    {
      name: "Flutter & Dart Development",
      image: FlutterAndDartDev,
      description:
        "Create beautiful, natively compiled applications for mobile, web, and desktop with Flutter. Master Dart programming language and Flutter framework to build cross-platform apps. Learn state management, custom animations, and integration with native features. Develop real-world projects and deploy to multiple platforms from a single codebase.",
      link: "#",
    },
  ],
  "Cloud Computing": [
    {
      name: "Cloud Computing Fundamentals",
      image: CloudComputing,
      description:
        "Dive into the world of cloud computing with this comprehensive course. Understand core concepts of cloud architecture, services, and deployment models. Learn about virtualization, containerization, and serverless computing. Explore multi-cloud strategies and gain hands-on experience with major cloud platforms like AWS, Azure, and GCP.",
      link: "#",
    },
    {
      name: "AWS Certified Solutions Architect",
      image: Aws,
      description:
        "Prepare for the AWS Certified Solutions Architect exam with this in-depth course. Master core AWS services including EC2, S3, RDS, and VPC. Learn to design scalable, highly available, and fault-tolerant systems on AWS. Gain hands-on experience with real-world scenarios and best practices for AWS architecture design.",
      link: "#",
    },
    {
      name: "Microsoft Azure Administrator",
      image: MsAzure,
      description:
        "Become a Microsoft Azure expert with this comprehensive administrator course. Learn to manage Azure subscriptions, secure identities, and implement network security. Master Azure virtual machines, storage solutions, and Azure Active Directory. Gain practical experience with Azure portal, PowerShell, and CLI for efficient cloud management.",
      link: "#",
    },
    {
      name: "Google Cloud Platform Architecture",
      image: GoogleCloud,
      description:
        "Master Google Cloud Platform architecture in this advanced course. Learn to design, develop, and manage robust, scalable applications using GCP services. Explore Compute Engine, Kubernetes Engine, and App Engine for diverse computing needs. Gain expertise in GCP networking, storage, and machine learning services for comprehensive cloud solutions.",
      link: "#",
    },
  ],
};

const CoursesPage = () => {
  const [activeTab, setActiveTab] = useState("Web Development");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-20 px-10 text-center">
        <h2 className="text-6xl font-bold mb-4">Courses</h2>
        <p className="text-3xl mb-8">
          Explore our diverse range of courses designed to help you excel in
          your career and personal growth.
        </p>
      </section>

      {/* Introductory Description Section */}
      <section className="bg-grey py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-5xl font-bold text-gray-900 mb-8 leading-tight drop-shadow-md">
            Why Choose Our Courses?
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our courses are meticulously crafted to equip you with the essential
            skills and knowledge necessary to thrive in today's dynamic tech
            landscape. Whether you're embarking on a new career path or seeking
            to elevate your current expertise, our industry-aligned curriculum
            and expert instructors are here to guide you. With immersive,
            hands-on projects, real-world applications, and a vibrant community
            of learners, you're not just learning—you’re preparing for a future
            full of possibilities.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 mt-8">
        <div className="flex space-x-6 border-b pb-4 mb-8 overflow-x-auto">
          {Object.keys(allCourses).map((tab) => (
            <button
              key={tab}
              className={`text-lg font-semibold py-2 px-4 ${
                activeTab === tab
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {allCourses[activeTab].map((course) => (
                <div
                  key={course.name}
                  className="group border border-gray-300 rounded-2xl transform transition-transform duration-300 hover:scale-105 shadow-lg"
                >
                  <div className="flex items-center">
                    <img
                      src={course.image}
                      alt={course.name}
                      className="rounded-t-2xl w-full h-[79%] object-cover"
                    />
                  </div>
                  <div className="p-6 lg:p-8 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                    <h4 className="text-2xl text-gray-900 font-medium leading-8 mb-5">
                      {course.name}
                    </h4>
                    <p className="text-gray-500 text-lg leading-7 mb-10">
                      {course.description}
                    </p>
                    <a
                      href={course.link}
                      className="text-indigo-600 relative inline cursor-pointer text-xl font-medium before:bg-violet-600 before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right 
                    before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
                    >
                      Learn more..
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Alumni Block */}
        <section className="py-24 bg-grey">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-6xl font-extrabold text-gray-900 mb-16 text-center drop-shadow-lg">
              Our Alumni Work At
            </h3>
            <div className="flex flex-wrap justify-center gap-12">
              {alumniCompanies.map((company) => (
                <div
                  key={company.name}
                  className="flex flex-col items-center transform transition-transform duration-300 hover:scale-105"
                >
                  <div className="bg-gray-100 p-6 rounded-full shadow-lg  hover:shadow-purple-400">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="h-16 w-16 object-contain"
                    />
                  </div>
                  <p className="text-xl text-gray-800 font-semibold mt-6">
                    {company.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CoursesPage;
