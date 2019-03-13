$(function(){
  var $width = $('#rectangle-width'),
      $height = $('#rectangle-height'),
      $calc = $('#rectangle-calc'),
      blnValid = false;

$calc.click(function{
  if(blnValid)return;

  var width = Number($width.val()),
      height =  Number($height.val()),
      p = roundFractional(width * 2 + height * 2, 2),
      a = roundFractional(width * height, 2);
      $('#rectangle-perimeter').val(p);
      $('#rectangle-area').val(a);
          
});
$('#rectangle-perimeter').val(p);
$('#rectangle-area').val(a);
});

$width.focusout(function() {
      blnValid = validate('#rectangle-width');
        
});
  
$height.focusout(function() {
      blnValid = validate('#rectangle-height');
        
});


function roundFractional(x, n) {
      return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
        
}


function validate(field) {
      var $data = $(field),
      $message = $(field + '-validate'),
      label = $(field).attr('data-label');

      if($data.val() === '') {
          $message.html(label + '不能为空！');
          $data.select();
          return false;                           
      }

      if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($data.val())) {
          $message.html(label + '必须是数值');
          $data.select();
          return false;                 
      }

      if(window.Number($data.val()) < 0) {
         $message.html(label + '必须大于零');
         $data.select();
         return false;
                              
      }

      $message.html('');
      return true;
}
});


.rectangle{
    width:370px;
    margin: 50px auto;
    font-size: 1.1em;
}

input, label, span {
    margin: 5px 0;
    font-size: 1em;
    padding-left: 5px;

}

#rectangle-calc {
    width: 70px;
    margin-left: 63px;

}

span {
    color: red;

}

#rectangle-width-validate,
#rectangle-height-validate {
    color: red;
    margin-left: 63px;
    font-size: 0.8em;

}

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">
  <title>矩形计算器</title>
  <link rel="stylesheet" href="rectangle.css">
</head>
<body>
  <div class="rectangle">
      <label>宽度：</label>
      <input id="rectangle-width" type="text" data-label="宽度" autofocus>
      <span>*</span>
      <br>
      <div id="rectangle-width-validate"></div>
      <label>高度：</label>
      <input id="rectangle-height" type="text" data-label="高度">
      <span>*</span>
      <br>
      <div id="rectangle-height-validate"></div>
      <input id="rectangle-calc" type="button" value="计算">
      <br>
      <label>周长：</label>
      <input id="rectangle-perimeter" type="text" disabled>
      <br>
      <label>面积：</label>
      <input id="rectangle-area" type="text" disabled>
    </div>
 <script src="rectangle.js"></script>
</body>
</html>




























