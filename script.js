
$(document).ready(function() {
     $('#nav-tax-returns').click(function() {
       $('.toggle-tax-returns').toggle();
     });

     $('#nav-pay-stubs').click(function() {
       $('.toggle-pay-stubs').toggle();
     });
});

filepicker.setKey("A2DtRrZBwRSGFqlZnYeY9z");

var ref = new Firebase("https://doc-doc-goose.firebaseio.com");
var refTaxReturns = new Firebase("https://doc-doc-goose.firebaseio.com/tax-returns");

$(document).ready(function(){
  $('#filepicker').click(function(){
    filepicker.pickAndStore(
      {multiple: true},
      {},
      function onSucess(Blob){
        var json = (JSON.stringify(Blob));
        var content = JSON.parse(json);

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


refTaxReturns.on('value', function(snapshot){
  console.log(snapshot.val());
  var data = snapshot.val();
  // {-KCSX2kItRtWt7a5wtob: {sdfsfds}}
  // [-KCSX2kItRtWt7a5wtob]
  var keys = Object.keys(data);
  for (var i = 0; i < keys.length; i++) {
    var taxReturnId = keys[i];
    // console.log(taxReturnId);
    // console.log(data[taxReturnId]);
    var taxReturn = data[taxReturnId];
    $('#result-tax-returns').append($('<div><a href="' + taxReturn.url + '">' + taxReturn.filename + '</a></div>'));
  }
});
