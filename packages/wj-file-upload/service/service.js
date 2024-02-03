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
  if( type.toLowerCase() !== 'folder' ) {
    fileType().forEach((i) => {
      if( i.type.includes(type.toLowerCase()) ) {
        searchType = i.name;
      }
    });
  } else {
    searchType = 'folder';
  }

  return searchType;
}

export function isValidFileType(file, acceptedFileTypes) {
  console.log("FILE", file, acceptedFileTypes);
  // Get the base MIME type
  const baseMimeType = file.type.split('/')[0];
  console.log("BASE MIME TYPE", baseMimeType);
  // If acceptedFileTypes is a string, convert it to an array
  let acceptedTypes = Array.isArray(acceptedFileTypes) ? acceptedFileTypes : acceptedFileTypes.split(',');
  console.log("ACCEPTED TYPES", acceptedTypes);
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

  console.log("UPLOAD FILE:", file, chunkSize, preview);
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
            console.log('Upload complete');
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



