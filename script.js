var filepicker;

var blob = {
  url: 'https://www.filestackapi.com/api/file/AMltoa8ATECOsFTMduLz',
  filename: 'hello.txt',
  mimetype: 'text/plain',
  isWriteable: true,
  size: 100
};

filepicker.exportFile(
  blob,
  function(Blob){
    console.log(Blob.url);
  }
);
