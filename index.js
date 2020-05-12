(function() {
    function script() {
        //$(".esriPopup table table tbody tr:nth-child(2) td").text().match(/(\d+)[^\d]+/m)[1];

        var esriPopup = document.querySelector(".esriPopup");
        var observer = new MutationObserver(function(){
            if(esriPopup.style.visibility != 'visible'){
                var contentPane = esriPopup.querySelector(".contentPane")
                var button = document.createElement('button');
                button.innerHTML = "Alarm";
                button.addEventListener("click", function() {
                  debugger;
                  var repeatFunc = function(callback) {
                    document
                    .querySelector(".esriPopup")
                    .querySelector(".contentPane")
                    .querySelector("table")
                    .querySelector("table")
                    .querySelector(".imgHover")
                    .click();
                    callback(Number($(".esriPopup table table tbody tr:nth-child(2) td").text().match(/(\d+)[^\d]+/m)[1]));
                  }

                  repeatFunc(function(remain) {
                    debugger;
                    if (remain == NaN) {
                      alert("Not working for this route!")
                    } else {
                      var time = NaN;
                      while (isNaN(time = Number(prompt("Please enter the time", "10")))) {}
                      if (time > 0) {
                        var handle = setInterval(function(){ 
                          repeatFunc(function(remain_tracked){
                            if (remain_tracked <= time) {
                              alert("Time to go");
                              clearInterval(handle);
                            }
                          });
                        }, 30000);
                      } else {
                        alert("Cancelled")
                      }
                    }
                  });
                });
                contentPane.insertBefore(button, contentPane.children[0]);
            }
        });
        observer.observe(esriPopup, { attributes: true, childList: true });
    }
  
    function inject(fn) {
      const script = document.createElement('script');
      script.text = `(${fn.toString()})();`;
      document.documentElement.appendChild(script);
    }
  
    inject(script);
  })()