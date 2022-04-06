function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);  
    }

    function initate() {
      var style1 = document.getElementById("lightpg");
      var style2 = document.getElementById("darkpg");

      style1.onclick = function () { swapStyleSheet("light.css") };
      style2.onclick = function () { swapStyleSheet("dark.css"); };
    }

      window.onload = initate;