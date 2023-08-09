import React, { useState } from "react";
import Image from "./assets/Banner.png";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Web3Storage } from "web3.storage";
const Marketplace = () => {
  const [allFiles, setAllFiles] = useState([]);
  const [uploadMessage, setUploadMessage] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const getAccessToken = () => {
    return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDhhOTM2OWQxMzU5ODA5QzM1ZDhiODRjMGVjNDA5NzRGN0QyODhmYTUiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2OTE1MTgwMjA2NjUsIm5hbWUiOiJpcGZzX2ZpbGUifQ.Xoq3NEHglUKD1qFBo5-URotk8WB3Dbcnnn5MTSiLaww"; // Replace with your actual access token
  };

  const makeStorageClient = () => {
    return new Web3Storage({ token: getAccessToken() });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setAllFiles([...allFiles, file]);
      setUploadMessage("");
    } else {
      setUploadMessage("No file selected");
    }
  };

  const handleUpload = async () => {
    if (allFiles.length > 0) {
      const client = makeStorageClient();
      const uploadResults = [];

      for (const file of allFiles) {
        const name = file.name;
        const cid = await client.put([file], { name });
        uploadResults.push({ name, cid });
      }

      console.log("Uploaded files:", uploadResults);
      setAllFiles([]);
    } else {
      setUploadMessage("No files selected for upload");
    }
  };

  const listUploads = async () => {
    const client = makeStorageClient();
    const uploads = [];
    for await (const upload of client.list()) {
      uploads.push({
        name: upload.name,
        cid: upload.cid,
        size: upload.dagSize,
      });
    }
    setUploadedFiles(uploads);
  };

  <style></style>;
  return (
    // <div className="overflow-hidden">
    <section className="container mx-auto">
      <div className="flex flex-col items-center lg:flex-row">
        <div className="flex-1">
          {/* ... existing hero content ... */}
          {/* Add the file upload UI here */}
          <div>
            {/* <h1>Web3.Storage File Upload</h1> */}
            <h1
              className="mb-6 px-[100px] text-[32px] leading-tight lg:text-[64px] "
              data-aos="fade-down"
              data-aos-delay="500"
            >
              Fastest & secure platform
            </h1>

            <div>
              <div>
                {/* <input type="file" onChange={handleFileChange} /> */}

                <label
                  class="m-10 inline-flex items-center rounded-lg bg-blue-700 px-7 py-2.5 text-center text-lg font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  data-aos="fade-down"
                  data-aos-delay="700"
                >
                  <span>Choose file</span>
                  <input
                    type="file"
                    class="hidden"
                    onChange={handleFileChange}
                  />
                  <svg
                    class="ml-2 h-3.5 w-3.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </label>
              </div>

              <div className="flex flex-col items-center lg:flex-row">
                <div>
                  <button
                    className="m-10  gap-x-6 rounded-full bg-blue-500 px-6 py-2 text-sm font-bold text-white lg:h-16 lg:text-base"
                    data-aos="fade-down"
                    data-aos-delay="700"
                    onClick={handleUpload}
                  >
                    <div className="justify-betweeen flex items-center gap-2">
                      Upload
                      <IoIosArrowDroprightCircle className="text-2xl lg:text-3xl" />
                    </div>
                  </button>
                </div>
                <div>
                  <button
                    className="m-10  gap-x-6 rounded-full bg-blue-500 px-6 py-2 text-sm font-bold text-white lg:h-16 lg:text-base"
                    data-aos="fade-down"
                    data-aos-delay="700"
                    onClick={listUploads}
                  >
                    List Uploads
                  </button>
                </div>
              </div>

              {/* <button onClick={handleUpload}>Upload</button> */}
            </div>
          </div>
        </div>
        {/* <div className="flex-1"> */}
        {/* <img
            src={Image}
            alt="banner"
            width="2600px"
            height="300px"
            data-aos="fade-up"
            data-aos-delay="600"
          /> */}
        {/* </div> */}
      </div>

      <div className=" container mx-auto flex justify-center text-center lg:mb-24">
        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="flex flex-1 flex-col gap-16 lg:flex-row">
            <div className="w-full text-center lg:text-left">
              <div className="bg-violet-300 rounded-md p-4">
                <div className=" mb-6 text-4xl font-medium">Uploaded Files</div>

                <ul className="list-disc pl-6">
                  {uploadedFiles.map((file, index) => (
                    <li className="text-black underline" key={index}>
                      <a
                        className="text-2xl hover:underline"
                        href={`https://dweb.link/ipfs/${file.cid}`}
                      >
                        {file.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* ... remaining content ... */}
          </div>
        </div>
      </div>
      {/* copy & social */}

      <div></div>
    </section>
    // {/* </div> */}
  );
};

export default Marketplace;
