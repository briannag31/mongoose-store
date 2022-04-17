
    //   function myFunction(p1, p2) {
    //     let x1= p1 * p2;
    //     document.getElementById("demo").innerHTML = x1;
    //   }
      let buyItem = items.qty
      function buyAnItem() { 
      document.addEventListener("click", function(event) { 
        if(buyItem != -1){
          console.log("buy item")
        } else{
          console.log("nothing lft")
        }

        
      })
    }