import React from "react";

const Content = () => {
  return (
    <main className="flex-1 bg-white p-4">
      <section id="course1" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Course 1</h2>
        <p className="mb-4">Course 1 content goes here...</p>
        <video controls className="w-full mb-4">
          <source src="path/to/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <a href="path/to/document.pdf" className="text-blue-500">
          Download Document
        </a>
      </section>
      <section id="course2" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Course 2</h2>
        <p className="mb-4">Course 2 content goes here...</p>
        <video controls className="w-full mb-4">
          <source src="path/to/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <a href="path/to/document.pdf" className="text-blue-500">
          Download Document
        </a>
      </section>
      {/* Add more course sections as needed */}
    </main>
  );
};

export default Content;
