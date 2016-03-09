

$(document).ready(function() {
     $('#nav-tax-returns').click(function() {
          $('#toggle-tax-returns').toggle();
     });
     filepicker.setKey("A2DtRrZBwRSGFqlZnYeY9z");
});




$(document).ready(function(){
  $('#filepicker').click(function(e){

    filepicker.pickAndStore(
      {multiple: true},
      {},
      function onSucess(Blob){
        var json = (JSON.stringify(Blob));
        var content = JSON.parse(json);

        $('#toggle-tax-returns').append(content[0].filename + '' + content[0].url);
        $('#toggle-tax-returns').append(content[0].filename);
        console.log('success');
      },
      function onError(FPError){
        console.log(FPERROR.toString());
      },
      function onProgress(FPProgress){
        console.log('progress');
      }
    );
  })
})




















// $('.filepicker').click(function(){
//         filepicker.pick(
//
//           function(Blob){
//             console.log("Store successful:", JSON.stringify(Blob));
//           },
//           function(Blob){
//             console.log(JSON.stringify(Blob));
//           },
//           function(FPError){
//             console.log(FPError.toString());
//           })
//         filepicker.store(
//           blob,
//           {filename: 'cat#1.png'},
//           function(new_blob){
//         console.log(JSON.stringify(new_blob));
//           })
//           }
//         )
//     });




// var blob = {
//   url: 'https://www.filestackapi.com/api/file/A2DtRrZBwRSGFqlZnYeY9z',
//   filename: 'cat.png',
// };
//
// // filepicker.pick()
// console.log("Storing", blob.filename);
// filepicker.store(
//   blob,
//   {filename: 'theCat1.png'},
//   function(new_blob){
//     console.log(JSON.stringify(new_blob));
//   }
// );










// $(document).ready(function(){
//   $('.list-group-item').click(function(){
//     $('.preview').toggle();
//   });
//
// });
