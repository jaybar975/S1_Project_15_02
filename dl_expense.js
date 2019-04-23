"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 2

   Author: Justin Aybar
   Date: 4.18.19  
   
   Filename: dl_expenses.js
   
   Function List
   =============
   
   validateSummary()
      Validates the data entry in the summary field.
   
   calcClass(sumClass)
      Sums up all of the data values for elements of the sumClass class.
      
   calcExp()
      Calculates the travel expenses from all categories and dates.
      
   formatNumber(val, decimals)
      Formats the value, "val" to the number of decimals indicated 
      by "decimals", adding thousands separators.
      
   formatUSCurrency(val)
      Formats the value, "val", as U.S. currency.
      
*/
// This adds the window with addEventListener called load with an anonymous function 
window.addEventListener("load", function () {
      // This creates the variable called changingCells equal to document of querySelectorAll with the element table with a class of travelExp and a input element with a id of sum
      var changingCells = document.querySelectorAll("table#travelExp input.sum");
      // This creates the for loop with a variable with a index equal to zero, index less than changingCells with a dot length then index plus plus.
      for (var i = 0; i < changingCells.length; i++) {
            // Changing cells with a index of addEventListener with change and the calcExp function
            changingCells[i].addEventListener("change", calcExp);
      }
      // This gets the id from the index file of the submitButton with a addEventListener called click and the validateSummary function
      document.getElementById("submitButton").addEventListener("click", validateSummary);
});
// This creates a function called validateSummary
function validateSummary() {
      // This creates the variable called summary equal to document of querySelector from the textarea element with a class of summary
      var summary = document.querySelector("textarea#summary");
      // This creates the if else statement with a summary of validity and valueMissing
      if (summary.validity.valueMissing) {
            // This creates ghe summary to pop up a error message if you didn't fill out that part of information
            summary.setCustomValidity("You must include a summary of the trip in your report");
      } else {
            // This creates the summary with a customValidity with the string empty
            summary.setCustomValidity("");
      }
}
// This creates the function called calcClass with a parameter of sumClass
function calcClass(sumClass) {
      // This creates the variable called sumFields equal to document of getElementByClassName of sumClass
      var sumFields = document.getElementsByClassName(sumClass);
      // This creates another variable called sumTotal equal to 0
      var sumTotal = 0;
      // This creates the for loop with a variable of index equal to 0, index less than sumFields dot length and index plus plus
      for (var i = 0; i < sumFields.length; i++) {
            // This creates a variable called itemValue equal to parseFloat with sumFields of index dot value
            var itemValue = parseFloat(sumFields[i].value);
            // This creates the if statement with a isNaN with itemValue strict equality of false
            if (isNaN(itemValue) === false) {
                  // This creates the sumTotal plus equals to itemValue
                  sumTotal += itemValue;
            }
      }
      // This returns the sumTotal variable
      return sumTotal;
}
// This creates the function of calcExp
function calcExp() {
      // this creates the variable called expTable equal to document of querySelectorAll of the table element with a class of travelExp the table body element and the table row element
      var expTable = document.querySelectorAll('table#travelExp tbody tr');
      // This creates the for loop with a variable of index equal to 0
      for (var i = 0; i < expTable.length; i++) {
            // This creates the document of getElementById of "subTotal" plus index with a value equal to formatNumber with the calcClass function of "date" plus index of 2
            document.getElementById("subtotal" + i).value = formatNumber(calcClass("date" + i), 2);
      }
      // This creates the document of getElementById called "transTotal" with a value equal to the formatNumber function and the calcClass function of "trans" of 2
      document.getElementById("transTotal").value = formatNumber(calcClass("trans"), 2);
      // This creates the document of getElementById called "lodgeTotal" with a value equal to the formatNumber function and the calcClass function of "lodge" of 2
      document.getElementById("lodgeTotal").value = formatNumber(calcClass("lodge"), 2);
      // This creates the document of getElementById called "mealTotal" with a value equal to the formatNumber function and the calcClass function of "meal" of 2
      document.getElementById("mealTotal").value = formatNumber(calcClass("meal"), 2);
      // This creates the document of getElementById called "otherTotal" with a value equal to the formatNumber function and the calcClass function of "other" of 2
      document.getElementById("otherTotal").value = formatNumber(calcClass("other"), 2);
      // This creates the document of getElementById called "expTotal" with a value equal to the formatNumber function and the calcClass function of "sum" of 2
      document.getElementById("expTotal").value = formatUSCurrency(calcClass("sum"), 2);
}



function formatNumber(val, decimals) {
      return val.toLocaleString(undefined, {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
      });
}

function formatUSCurrency(val) {
      return val.toLocaleString('en-US', {
            style: "currency",
            currency: "USD"
      });
}