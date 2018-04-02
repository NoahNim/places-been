// Business Logic

function Destination(location, landmarks, date, notes){
  this.location = location;
  this.landmarks = landmarks;
  this.date = date;
  this.notes = notes;
}

Destination.prototype.fullInfo = function () {
  return this.location + " " + this.landmarks + " " + this.date + " " + this.notes;
};

$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedLocation = $("input#newLocation").val();
    var inputtedLandmarks = $("input#newLandmarks").val();
    var inputtedDate = $("input#newDate").val();
    var inputtedNotes = $("input#newNotes").val();

    var newDestination=new Destination(inputtedLocation, inputtedLandmarks, inputtedDate, inputtedNotes);

    $("ul#placeList").append("<li><span class='place'>" + newDestination.fullInfo() + "</span></li>");
  });


});
