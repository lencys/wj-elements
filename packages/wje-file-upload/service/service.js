function fileType() {
  return [
    {
      "type": ["jpg", "jpeg", "png", "gif", "bpm", "tiff", "svg"],
      "name": "photo"
    },
    {
      "type": ["zip", "rar", "cab", "jar", "tar", "gzip", "uue", "bz2", "scorm", "war"],
      "name": "file-type-zip"
    },
    {
      "type": ["mov", "mp4", "avi", "flv"],
      "name": "video"
    },
    {
      "type": ["m4a", "mp3", "wav"],
      "name": "audio"
    },
    {
      "type": ["html", "html"],
      "name": "file-type-html"
    },
    {
      "type": ["css"],
      "name": "code"
    },
    {
      "type": ["txt"],
      "name": "file-type-txt"
    },
    {
      "type": ["doc", "docx"],
      "name": "file-type-doc"
    },
    {
      "type": ["xls", "xlsx"],
      "name": "file-type-xls"
    },
    {
      "type": ["pdf"],
      "name": "file-type-pdf"
    },
    {
      "type": ["ppt", "pptx", "odp"],
      "name": "file-type-ppt"
    }
  ];
}

export function getFileTypeIcon(type) {
  let searchType;
  if (type.toLowerCase() !== 'folder') {
    fileType().forEach((i) => {
      if (i.type.includes(type.toLowerCase())) {
        searchType = i.name;
      }
    });
  } else {
    searchType = 'folder';
  }

  return searchType;
}

export function isValidFileType(file, acceptedFileTypes) {
  // Get the base MIME type
  const baseMimeType = file.type.split('/')[0];
  // If acceptedFileTypes is a string, convert it to an array
  let acceptedTypes = Array.isArray(acceptedFileTypes) ? acceptedFileTypes : acceptedFileTypes.split(',');
  // If acceptedFileTypes is empty, throw an error
  if (acceptedTypes.length === 0) {
    throw new Error("acceptedFileTypes is empty");
  }

  // Iterate over acceptedFileTypes
  for (let type of acceptedTypes) {
    // ak type na image/* a file je napriklad image/png tak vratime true
    if (type.includes(baseMimeType + "/*")) {
      return true;
    }

    // Ak type suboru obsahuje konkretny typ a to bud ak je to zapisany napriklad image/png alebo len png tak vratime true
    if (type.includes(file.type) || type.includes(file.type.split('/')[1])) {
      return true;
    }
  }

  // Ak sme nic nenasli tak vratime false
  return false;
}

export function uploadFile(file, chunkSize, preview) {
  let start = 0;
  const progressArray = new Array(Math.ceil(file.size / chunkSize)).fill(0);

  const readAndUploadChunk = (start, end) => {
    const reader = new FileReader();
    const chunkIndex = start / chunkSize;
    const chunk = file.slice(start, end);

    reader.onload = (e) => {
      const xhr = new XMLHttpRequest();

      xhr.open("POST", "/upload", true);
      xhr.setRequestHeader('Content-Range', `${start}-${end}/${file.size}`);

      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const progress = (event.loaded / event.total) * 100;
          progressArray[chunkIndex] = progress;
          const totalProgress = progressArray.reduce((a, b) => a + b, 0) / progressArray.length;
          // this.updateOverallProgress(progressArray, file.lastModified);
          // preview.setAttribute("progress", totalProgress);
        }
      };

      xhr.onload = () => {
        if (xhr.status == 200 || xhr.status == 201) {
          progressArray[chunkIndex] = 100; // Táto časť je kompletná
          // this.updateOverallProgress(progressArray, file.lastModified);

          // Odoslanie ďalšej časti
          start += chunkSize;
          if (start < file.size) {
            preview.setAttribute("uploaded", start);
            readAndUploadChunk(start, Math.min(start + chunkSize, file.size));
          } else {
            preview.setAttribute("uploaded", start);
          }
        } else {
          console.error('Error during upload: ', xhr.statusText);
        }
      };
      xhr.send(e.target.result);
    };
    reader.readAsArrayBuffer(chunk);
  }

  readAndUploadChunk(start, Math.min(start + chunkSize, file.size));
}

export function upload(url, chunkSize = 1024 * 1024, wholeFile = false) {
  if (wholeFile) {
    return (file, preview) => uploadWholeFile(url, file, preview);
  }
  return (file, preview) => uploadFileInChunks(url, chunkSize, file, preview);
}


export async function uploadFileInChunks(url, chunkSize = 1024 * 1024, file, preview) {
  let offset = 0;
  const totalChunks = Math.ceil(file.size / chunkSize);
  const partResponses = [];

  while (offset < file.size) {
    const chunk = file.slice(offset, offset + chunkSize);

    // Creating a custom ReadableStream to track progress of the current chunk
    const stream = new ReadableStream({
      start(controller) {
        const reader = chunk.stream().getReader();
        let uploadedBytes = 0;

        reader.read().then(function process({ done, value }) {
          if (done) {
            controller.close();
            return;
          }

          // Track progress
          uploadedBytes += value.byteLength;
          const percentComplete = ((offset + uploadedBytes) / file.size) * 100;
          console.log(`Upload Progress: ${percentComplete.toFixed(2)}%`);
          preview.setAttribute("uploaded", offset + uploadedBytes);

          // Enqueue chunk data into the stream
          controller.enqueue(value);

          // Read the next chunk
          return reader.read().then(process);
        });
      }
    });

    const formData = new FormData();
    formData.append('file', new Blob([stream])); // Send the current stream (chunk)
    formData.append('chunkIndex', Math.floor(offset / chunkSize)); // Send chunk index
    formData.append('totalChunks', totalChunks); // Send total chunks

    try {
      // Send the current chunk via Fetch
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Failed to upload chunk ${Math.floor(offset / chunkSize) + 1}: ${response.statusText}`);
      }

      console.log(`Chunk ${Math.floor(offset / chunkSize) + 1}/${totalChunks} uploaded successfully.`);
      partResponses.push(response);

    } catch (error) {
      console.error('Error uploading chunk:', error);
      break;
    }

    // Move to the next chunk
    offset += chunkSize;
  }

  console.log('File upload complete!');
  return partResponses.at(-1).json();
}

export function uploadWholeFile(url, file, preview) {
  const formData = new FormData();
  formData.append('file', file);

  //use fetch 
  return fetch(url, {
    method: 'POST',
    body: formData
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      preview.setAttribute("uploaded", file.size);
      return data;
    })
    .catch(error => {
      console.error('Error:', error);
    });

}



