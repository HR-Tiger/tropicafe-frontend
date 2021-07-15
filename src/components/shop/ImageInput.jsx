import React from 'react';

export default function ImageInput({ setFiles }) {

  const pullFiles = (e) => {
    const { files } = e.target;
    const images = [];
    for (let i = 0; i < files.length; i++) {
      images.push(files[i]);
    }
    // console.log(e.target.files);
    // console.log(e.target.file);
    console.log(files);
    setFiles(files);
  };

  return (
    <div className="mb-3">
      <label className="form-label">Share some photos</label>
      <div className="input-group mb-3">
        <input
          className="form-control"
          name="photos"
          type="file"
          accept="image/*"
          id="imageInput"
          onChange={pullFiles}
          multiple
        />
        <label
          className="input-group-text"
          htmlFor="imageInput">
            Upload
        </label>
      </div>
    </div>
  );
}
