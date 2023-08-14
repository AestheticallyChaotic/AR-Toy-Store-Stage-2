AFRAME.registerComponent("markerhandler", {
  init: async function () {

    //markerFound event
    this.el.addEventListener("markerFound", () => {
      console.log("marker is found");
      this.handleMarkerFound();
    });

    //markerLost event
    this.el.addEventListener("markerLost", () => {
      console.log("marker is lost");
      this.handleMarkerLost();
    });

  },
  handleMarkerFound: function () {
    // Changing button div visibility
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.style.display = "flex";

    var orderSummaryButton = document.getElementById("order-summary-button");
    var orderButtton = document.getElementById("order-button");

    orderButtton.addEventListener("click", () => {
      swal({
        icon: "https://i.imgur.com/4NZ6uLY.jpg",
        title: "Thanks For Order !",
        text: "",
        timer : "2000",
        buttons : false
      });
    });

    orderSummaryButton.addEventListener("click", () => {
      swal({
        icon : "warning",
        title : "Order Summary",
        text : "Work In Progress"
      });
    });
  }
});