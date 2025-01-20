import React,{useState} from 'react';
import {useDropzone} from 'react-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay, faTrash, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { IoMdImages } from "react-icons/io";
import ConfirmationDialog from './ConfirmationDialog';

const FileUploadInput = () => {
  const [filesList, setFilesList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileToDelete, setFileToDelete] = useState(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/jpeg': [],
      'image/png': [],
      'image/jpg': [],
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
    setIsModalOpen(false);
    setFileToDelete(null);
  };

  const handleDeleteClick = (fileId) => {
    setFileToDelete(fileId);
    setIsModalOpen(true);
  };

  
  const files = filesList.map((file,index) => (
    <li
      key={index}
      className="flex sm:gap-3 flex-col sm:flex-row items-center p-2 border border-gray-300 rounded-lg my-2"
    >
      <div className=''>
        <img
          src={file.preview}
          alt={file.path}
          className="w-14 h-14 object-cover rounded-lg"
        />
      </div>
      <div className='w-full'>
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
              className={`text-red-500 cursor-pointer ${file.progress === 100 && 'text-red-500'}`} 
              onClick={() =>
                file.progress === 100 ? handleDeleteClick(file.id) : handleFileRemove(file.id)
              }
            />
          </div>
        </div>
        <div className='w-full flex items-center'>
          <div className='w-full bg-gray-200 rounded-full h-2.5 flex items-center'>
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
      <div {...getRootProps({className: 'dropzone'})}  className='border border-dashed border-gray-300 rounded-lg cursor-pointer'>
        <input {...getInputProps()} />
        <div className='flex flex-col items-center justify-center my-4 cursor-pointer'>
          <IoMdImages className='text-5xl text-blue-700 mx-auto' />
          <p className='h-full font-medium text-center'>Drop your image here or <span className='text-blue-700 font-semibold'>browse</span></p>
          <p className='uppercase text-gray-300 text-xs mt-1'>png,jpg,jeg</p>
        </div>
      </div>
      <aside>
      <ul className="">{files}</ul>
      </aside>

      <ConfirmationDialog
        isOpen={isModalOpen}
        onConfirm={() => handleFileRemove(fileToDelete)}
        onCancel={() => setIsModalOpen(false)}
      />
    </section>
  );
}

export default FileUploadInput