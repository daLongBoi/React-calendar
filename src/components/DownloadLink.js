import React from "react";

const DownloadLink = ({ url, name }) => {
  return (
    <div className="mb-4">
      <p className="font-bold mb-1">Uploaded Document:</p>
      <a
        href={url}
        download={name}
        className="text-blue-500 hover:text-blue-700"
      >
        {name}
      </a>
    </div>
  );
};

export default DownloadLink;
