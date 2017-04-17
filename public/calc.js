$(document).ready(function() {
  calcSetup();
  display();
 //updateDisplay();
  isNumber();
  isOperator();
  operate();

});


/// build Calculator
var calcSetup = function() {
  var table = $('<table>');
  table.attr({name:"MyCalculator", id:"myCalc"})
  var header = $('<tr>');
  header.attr({name: "header", id:"header"})
  var display = $('<td>');
  display.attr({id:"display", colspan:4, name:"display"})
  display.text("");
  header.append(display);
  table.append(header);

   var $tr0=$('<tr>');
   var $td0a=$('<td colspan=“5” id="display">');
   $tr0.append($td0a);
   $('table').append($tr0);

// table row 1
   var $tr1=$('<tr>');
   var $td1a = $('<td>');
   $td1a.addClass("number");
   var $btn1a=$('<button value="7">7</button>');
   $td1a.append($btn1a);

   var $td1b=$('<td>');
   $td1b.addClass("number");
   var $btn1b=$('<button value="8">8</button>');
   $td1b.append($btn1b);

   var $td1c=$('<td>');
   $td1c.addClass("number");
   var $btn1c=$('<button value="9">9</button>');
   $td1c.append($btn1c);

   var $td1d=$('<td>');
   $td1d.addClass("operator");
   var $btn1d=$('<button value="/">/</button>');
   $td1d.append($btn1d);

   $tr1.append($td1a, $td1b, $td1c, $td1d);
   $('table').append($tr1);

// row 2
   var $tr2=$('<tr>');
   var $td2a=$('<td>');
   $td2a.addClass("number");
   var $btn2a=$('<button value="4">4</button>');
   $td2a.append($btn2a);

   var $td2b=$('<td>');
   $td2b.addClass("number");
   var $btn2b=$('<button value="5">5</button>');
   $td2b.append($btn2b);

   var $td2c=$('<td>');
   $td2c.addClass("number");
   var $btn2c=$('<button value="6">6</button>');
   $td2c.append($btn2c);

   var $td2d=$('<td>');
   $td2d.addClass("operator");

   var $btn2d=$('<button value="*">*</button>');
   $td2d.append($btn2d);

   $tr2.append($td2a, $td2b, $td2c, $td2d);
   $('table').append($tr2);
   // row 3
   var $tr3=$('<tr>');
   var $td3a=$('<td>');
   $td3a.addClass("number");
   var $btn3a=$('<button value="1">1</button>');
   $td3a.append($btn3a);

   var $td3b=$('<td>');
   $td3b.addClass("number");
   var $btn3b =$('<button value="2">2</button>');
   $td3b.append($btn3b);

   var $td3c=$('<td>');
   $td3c.addClass("number");
   var $btn3c=$('<button value="3">3</button>');
   $td3c.append($btn3c);

   var $td3d=$('<td>');
   $td3d.addClass("operator");
   var $btn3d=$('<button value="-">-</button>');
   $td3d.append($btn3d);

   $tr3.append($td3a, $td3b, $td3c, $td3d);
   $('table').append($tr3);
   // row 4
   var $tr4=$('<tr>');
   var $td4a=$('<td>');
   $td4a.addClass("number");
   var $btn4a=$('<button value="0">0</button>');
   $td4a.append($btn4a);

   var $td4b=$('<td id=“decimal”>');
   var $btn4b=$('<button value=".">.</button>');
   $td4b.append($btn4b);

   var $td4c=$('<td id="clear">');
   var $btn4c=$('<button value="C">C</button>');
   $td4c.append($btn4c);

   var $td4d=$('<td>');
   $td4d.addClass("operator");
   var $btn4d=$('<button value="+">+</button>');
   $td4d.append($btn4d);

   $tr4.append($td4a, $td4b, $td4c, $td4d);
   $('table').append($tr4);
   //
   var $tr5=$('<tr>');
   var $td5a=$('<td colspan="5" id="sum">');
   var $btn5a=$('<button value="=">=</button>');
   $td5a.append($btn5a);
   $tr5.append($td5a);
   $('table').append($tr5);
 }

// *******************************************************

var display = function(){
    $('#display').on('click', function(e) {
      var buttonPressed = $(this);
      console.log(buttonPressed);

      if (buttonPressed === "C") {
      result = 0;
      currentEntry = '0';
    } else if (buttonPressed === '.') {
      currentEntry += '.';
    } else if (isNumber(buttonPressed)) {
      if (currentEntry === '0') currentEntry = buttonPressed;
      else currentEntry = currentEntry + buttonPressed;
    } else if (isOperator(buttonPressed)) {
      prevEntry = parseFloat(currentEntry);
      operation = buttonPressed;
      currentEntry = '';
    } else if (buttonPressed === '=') {
      currentEntry = operate(prevEntry, currentEntry, operation);
      operation = null;
    }

    updateDisplay(currentEntry);
  });
};

var updateDisplay = function(displayValue) {
  var displayValue = displayValue.toString();
  $('.display').html(displayValue.substring(0, 10));
};

 var isNumber = function(value) {
  return !isNaN(value);
}

var isOperator = function(value) {
  return value === '/' || value === '*' || value === '+' || value === '-';
};


var operate = function(a, b, operation) {
  a = parseFloat(a);
  b = parseFloat(b);
  console.log(a, b, operation);
  if (operation === '+') return a + b;
  if (operation === '-') return a - b;
  if (operation === '*') return a * b;
  if (operation === '/') return a / b;
}
