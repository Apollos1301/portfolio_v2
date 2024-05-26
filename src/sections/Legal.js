import React from "react";

const Legal = ({ disable }) => {
  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
      <div
        onClick={() => disable()}
        className="absolute bg-red-500 top-0 left-0 text-2xl cursor-pointer"
      >
        {"<-- Back"}
      </div>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Impressum (Legal Notice)
      </h1>

      <h2 className="text-2xl font-semibold mb-4 text-gray-700">
        Contact Information
      </h2>
      <p className="mb-4">
        <strong>Website Owner:</strong> Abtin Pourhadi
      </p>
      <p className="mb-4">
        <strong>Email:</strong> pourhadi.abtin@posteo.de
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Disclaimer</h2>
      <p className="mb-4">
        The information provided on this website is for general informational
        purposes only. All information on the site is provided in good faith,
        however, I make no representation or warranty of any kind, express or
        implied, regarding the accuracy, adequacy, validity, reliability,
        availability, or completeness of any information on the site.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-gray-700">
        External Links Disclaimer
      </h2>
      <p className="mb-4">
        The site may contain (or you may be sent through the site) links to
        other websites or content belonging to or originating from third parties
        or links to websites and features in banners or other advertising. Such
        external links are not investigated, monitored, or checked for accuracy,
        adequacy, validity, reliability, availability, or completeness by me.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Copyright</h2>
      <p className="mb-4">
        Unless otherwise stated, the content, layout, design, data, graphics,
        and other material on this website are protected by copyright laws and
        are owned or controlled by Abtin Pourhadi. You may not reproduce,
        distribute, or otherwise use any of the materials without prior written
        permission from the copyright owner.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-gray-700">
        Governing Law
      </h2>
      <p>
        These terms shall be governed and construed in accordance with the laws
        of Germany, without regard to its conflict of law provisions.
      </p>
    </div>
  );
};

export default Legal;
