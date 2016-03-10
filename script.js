filepicker.setKey("A2DtRrZBwRSGFqlZnYeY9z");

var ref = new Firebase("https://doc-doc-goose.firebaseio.com");
var refTaxReturns = new Firebase("https://doc-doc-goose.firebaseio.com/tax-returns");
var refPayStubs = new Firebase("https://doc-doc-goose.firebaseio.com/pay-stubs");




$(document).ready(function() {
     $('#nav-tax-returns').click(function() {
       $('.toggle-tax-returns').toggle();
     });
     $('#nav-pay-stubs').click(function() {
       $('.toggle-pay-stubs').toggle();
     });
});


// function Filepicker(firebaseRef){
//   filepicker.pickAndStore(
//     {multiple: true},
//     {},
//     function onSucess(Blob){
//       var json = (JSON.stringify(Blob));
//       var content = JSON.parse(json);
//
//       firebaseRef.push({
//         filename: content[0].filename,
//         url: content[0].url
//       });
//       console.log('success');
//     },
//     function onError(FPError){
//       console.log(FPERROR.toString());
//     },
//     function onProgress(FPProgress){
//       console.log('progress');
//     }
//   );
// }

// $('#filepicker').click(Filepicker(refTaxReturns));

$(document).ready(function(){
  $('#filepicker').click(function(){
    filepicker.pickAndStore(
      {multiple: true},
      {},
      function onSucess(content){
        refTaxReturns.push({
          filename: content[0].filename,
          url: content[0].url
        });
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

function Snapshot(firebaseRef, resultId, badgeId, liId) {
  firebaseRef.on('child_added', function(snapshot){
    var data = snapshot.val();
    var $resultId = $('#' + resultId);
    var $badgeId = $('#' + badgeId);
    var $liId = $('#'+ liId)

    $resultId.append($('<div><a href="' + data.url + '">' + data.filename + '</a></div>'));
    $badgeId.text($liId.length - 1);
  });
}


Snapshot(refTaxReturns, 'result-tax-returns', 'badge-tax-returns', 'li-tax-returns');
