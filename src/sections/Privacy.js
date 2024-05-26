import React from "react";

function Privacy({ disable }) {
  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
      <div
        onClick={() => disable()}
        className="absolute bg-red-500 top-0 left-0 text-2xl cursor-pointer"
      >
        {"<-- Back"}
      </div>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Privacy and Cookie Policy
      </h1>

      <h2 className="text-2xl font-semibold mb-4 text-gray-700">
        Privacy Policy
      </h2>
      <p className="mb-4">
        Welcome to Abtin's Portfolio Website. Your privacy is important to me,
        and I am committed to protecting any personal information you may
        provide while using this site.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-gray-700">
        Information Collection
      </h3>
      <p className="mb-4">
        I do not collect, store, or process any personal information from
        visitors to this website. You can browse through the entire site without
        providing any personal data.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-gray-700">
        Use of Information
      </h3>
      <p className="mb-4">
        Since no personal information is collected, there is no data to use,
        share, or sell to third parties.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-gray-700">
        Third-Party Links
      </h3>
      <p className="mb-4">
        This website may contain links to other websites. Please be aware that I
        am not responsible for the privacy practices of other sites. I encourage
        you to be aware when you leave this site and to read the privacy
        policies of any other site that collects personal information.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-gray-700">
        Cookie Policy
      </h2>

      <h3 className="text-xl font-semibold mb-2 text-gray-700">
        Use of Cookies
      </h3>
      <p className="mb-4">
        This website does not use cookies to track or store any user
        information.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-gray-700">
        Third-Party Cookies
      </h3>
      <p className="mb-4">
        Although this website does not use cookies, it may contain embedded
        content (e.g., videos, images) from other websites that could use
        cookies. Embedded content from other websites behaves in the same way as
        if the visitor has visited the other website. These websites may collect
        data about you, use cookies, embed additional third-party tracking, and
        monitor your interaction with that embedded content.
      </p>

      <h3 className="text-xl font-semibold mb-2 text-gray-700">
        Managing Cookies
      </h3>
      <p>
        Since this site does not use cookies, there is no need for cookie
        management here. However, you can manage cookies in your browser
        settings if you visit other websites that do use cookies.
      </p>
    </div>
  );
}

export default Privacy;
