import React,{useState} from 'react';
import {useDropzone} from 'react-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay, faTrash, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

const FileUploadInput = () => {
  const [filesList, setFilesList] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/jpeg': [],
      'image/png': []
    },
    onDrop: (acceptedFiles) => {
      // Append new files to the existing list with initial progress set to 0
      const newFiles = acceptedFiles.map((file) => ({
        id: Date.now() + Math.random(), // Unique identifier for each file
        path: file.path.replace(/^.*[\\\/]/, ''),
        size: file.size,
        preview: URL.createObjectURL(file),
        progress: 0,
        isPaused: false,
      }));

      setFilesList((prevFiles) => [...prevFiles, ...newFiles]);

      // Simulate upload progress
      newFiles.forEach((file) => simulateUpload(file));
    },
  });

  const simulateUpload = (file) => {
    const interval = setInterval(() => {
      setFilesList((prevFiles) =>
        prevFiles.map((f) => {
          if (f.id === file.id) {
            if (f.isPaused || f.progress === 100) {
              if (f.progress === 100) clearInterval(interval);
              return f;
            }
            return { ...f, progress: Math.min(f.progress + 10, 100) };
          }
          return f;
        })
      );
    }, 500);
  };

  const togglePause = (fileId) => {
    setFilesList((prevFiles) =>
      prevFiles.map((file) =>
        file.id === fileId ? { ...file, isPaused: !file.isPaused } : file
      )
    );
  };

  const handleFileRemove = (fileId) => {
    setFilesList((prevFiles) => prevFiles.filter((file) => file.id !== fileId));
  };

  
  const files = filesList.map((file,index) => (
    <li
      key={index}
      className="flex items-center p-2 border border-gray-300 rounded-lg m-2"
    >
      <div className=''>
        <img
          src={file.preview}
          alt={file.path}
          className="w-8 h-8 object-cover rounded-lg"
        />
      </div>
      <div>
        <div className="flex items-center justify-between w-full">
          <div className='flex flex-col mr-5'>
            <p className="mt-2 text-sm text-gray-700">{file.path}</p>
            <p className="text-xs text-gray-500">{(file.size / 1024).toFixed(2)} KB</p>
          </div>
          <div className="flex items-center justify-between space-x-3">
            <FontAwesomeIcon 
              icon={file.progress === 100 ? faCheck : (file.isPaused ? faPlay : faPause)} 
              className={`text-blue-500 cursor-pointer ${file.progress === 100 && 'text-green-500'}`}
              onClick={() => file.progress !== 100 && togglePause(file.id)} 
            />
            <FontAwesomeIcon 
              icon={file.progress === 100 ? faTrash : faXmark} 
              className="text-blue-500 cursor-pointer" 
              onClick={() => handleFileRemove(file.id)} 
            />
          </div>
        </div>
        <div className='w-full flex items-center'>
          <div className='w-full bg-red-200 rounded-full h-2.5 flex items-center'>
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: `${file.progress}%` }}
            ></div>
          </div>
          <p className='ml-2 text-sm text-gray-600'>
            {/* {file.progress === 100
              ? 'Completed'
              : file.isPaused
              ? 'Paused'
              : 'Uploading'
            } */}
            <span>{file.progress}</span>%
          </p>
        </div>
      </div>
    </li>
  ));

  return (
    <section className="container">
      <div {...getRootProps({className: 'dropzone'})}  className='border border-dashed border-gray-300 rounded-lg'>
        <input {...getInputProps()} />
        <p className='p-5 w-full h-full cursor-pointer'>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside>
      <ul className="">{files}</ul>
      </aside>
    </section>
  );
}

export default FileUploadInput