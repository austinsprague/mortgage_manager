filepicker.setKey("A2DtRrZBwRSGFqlZnYeY9z");



var ref = new Firebase("https://doc-doc-goose.firebaseio.com");
var refTaxReturns = new Firebase("https://doc-doc-goose.firebaseio.com/tax-returns");
var refPayStubs = new Firebase("https://doc-doc-goose.firebaseio.com/pay-stubs");
var refProofFunds = new Firebase("https://doc-doc-goose.firebaseio.com/proof-funds");
var refPhotoId = new Firebase("https://doc-doc-goose.firebaseio.com/photo-id");




function ToggleContent(id){
  var $navId = $('#nav-' + id);
  var $toggleClass = $('.toggle-' + id);

  $navId.click(function(){
    $toggleClass.toggle();
  });
}

ToggleContent('tax-returns');
ToggleContent('pay-stubs');
ToggleContent('proof-funds');
ToggleContent('photo-id');



function Filepicker(firebaseRef, id){
  var $filepickerId = $('#filepicker-' + id);
  $filepickerId.click(function(){
    filepicker.pickAndStore(
      {multiple: true},
      {},
      function onSucess(Blob){
        var json = (JSON.stringify(Blob));
        var content = JSON.parse(json);

        firebaseRef.push({
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
  });
}

Filepicker(refTaxReturns, 'tax-returns');
Filepicker(refPayStubs,'pay-stubs');
Filepicker(refProofFunds,'proof-funds');
Filepicker(refPhotoId,'photo-id');


// var $badgeTaxReturn =
// $('#badge-tax-returns').text($('.li-tax-returns').length)

function Snapshot(firebaseRef, id) {
  firebaseRef.on('child_added', function(snapshot){
    var data = snapshot.val();
    var $resultId = $('#result-' + id);
    var $badgeId = $('#badge-' + id);
    var $liId = $('#li-'+ id)

    $resultId.append($('<div><a href="' + data.url + '">' + data.filename + '</a></div>'));
    $badgeId.text($liId.length);
  });
}



Snapshot(refTaxReturns, 'tax-returns');
Snapshot(refPayStubs, 'pay-stubs');
Snapshot(refProofFunds, 'proof-funds');
Snapshot(refPhotoId, 'photo-id');
