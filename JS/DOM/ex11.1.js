/* La majoria d'aquest codi és una adaptació de una calculadora super guai amb animacions i coses. 
jo bàsicament he agafat el codi que entenia i m'agradava per fer una calculadora una mica xaxi
He deixat els comentaris originals ja que els trobo molt instructius */

let error = false;
let shift = document.querySelector("#shift");

(function() {
    // Shortcut to get elements
    var el = function(element) {
        if (element.charAt(0) === "#") { // If passed an ID...
            return document.querySelector(element); // ... returns single element
        }
        
        return document.querySelectorAll(element); // Otherwise, returns a nodelist
    };
    
    // Variables
    var viewer = el("#viewer"), // Calculator screen where result is displayed
    equals = el("#equals"), // Equal button
    nums = el(".num"), // List of numbers
    ops = el(".ops"), // List of operators
    theNum = "", // Current number
    oldNum = "", // First number
    resultNum, // Result
    operator; // Batman
    
    // When: Number is clicked. Get the current number selected
    var setNum = function() {
        if (resultNum) { // If a result was displayed, reset number
            theNum = this.getAttribute("data-num");
            resultNum = "";
        } else { // Otherwise, add digit to previous number (this is a string!)
            theNum += this.getAttribute("data-num");
        }
        
        viewer.innerHTML = theNum; // Display current number
        
    };
    
    // When: Operator is clicked. Pass number to oldNum and save operator
    var moveNum = function() {
        oldNum = theNum;
        theNum = "";
        operator = this.getAttribute("data-ops");
        
        equals.setAttribute("data-result", ""); // Reset result in attr
    };
    
    // When: Equals is clicked. Calculate result
    var displayNum = function() {
        
        // Convert string input to numbers
        oldNum = parseFloat(oldNum);
        theNum = parseFloat(theNum);
        // Perform operation
        // if(shift){
        //     switch (operator) {   
        //     case "plus":
        //         resultNum = "Potato";
        //         break;
            
        //     case "minus":
        //         resultNum = "No sé que posar";
        //         break;
            
        //     case "times":
        //         resultNum = "Tinc son";
        //         break;
            
        //     case "divided by":
        //         resultNum = "I gana";
        //         break;
            
        //     default:
        //         resultNum = theNum;
        //     }
        // }else{
            let shift = document.querySelector("#shift");
            switch (operator) {
                case "plus":
                    resultNum = oldNum + theNum;
                break;
                
                case "minus":
                    resultNum = oldNum - theNum;
                break;
                
                case "times":
                    if(shift.value == "0"){resultNum = oldNum ** theNum}
                    else{resultNum = oldNum * theNum}
                break;
                
                case "divided by":
                    if(shift.value == "0"){resultNum = Math.sqrt(theNum)}
                    else{resultNum = oldNum / theNum}
                break;
                
                default:
                resultNum = theNum;
            }
        
        // If NaN or Infinity returned
        if (!isFinite(resultNum)) {  
            if (isNaN(resultNum)) { // If result is not a number; set off by, eg, double-clicking operators
                resultNum = "Error!";
                if(error==false){alert("Recorda: número -> operació -> número")};
                error= true;
            } else { // If result is infinity, set off by dividing by zero
                resultNum = "Oh no...";
                el("#secret").style.display = "block";
            }
        }
        
        // Display result, finally!
        viewer.innerHTML = resultNum;
        equals.setAttribute("data-result", resultNum);
        
        // Now reset oldNum & keep result
        oldNum = 0;
        theNum = resultNum;
        
    };
    
    // When: Clear button is pressed. Clear everything
    var clearAll = function() {
        oldNum = "";
        theNum = "";
        viewer.innerHTML = "0";
        equals.setAttribute("data-result", resultNum);
    };
    
    /* The click events */
    
    // Add click event to numbers
    for (var i = 0, l = nums.length; i < l; i++) {
        nums[i].onclick = setNum;
    }
    
    // Add click event to operators
    for (var i = 0, l = ops.length; i < l; i++) {
        ops[i].onclick = moveNum;
    }
    
    shift.addEventListener("click", () => {
    console.log(shift.value);

        if(shift.value == "1"){
            shift.style.backgroundColor = "rgb(122, 190, 221)";
            document.querySelector("#times").innerHTML = "**";
            document.querySelector("#divide").innerHTML = "sqrt";
            shift.value = "0";
        }else{
            shift.style.backgroundColor = "rgb(42, 90, 112)";
            document.querySelector("#times").innerHTML = "*";
            document.querySelector("#divide").innerHTML = "/";
            shift.value = "1"
        }
    })

    // Add click event to equal sign
    equals.onclick = displayNum;
    
    // Add click event to clear button
    el("#clear").onclick = clearAll;
    
    // Add click event to reset button
    el("#reset").onclick() = function() {
        window.location = window.location;
    };
    
}());