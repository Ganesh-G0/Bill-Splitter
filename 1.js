let tip = 0;
document.querySelectorAll('.btn').forEach(function(button) {
  button.addEventListener('click', function() {
    tip = ($(this).val()).slice(0, -1);
    console.log("Tip form btn: " + tip);
  });
  button.addEventListener('input', function() {
    tip = $(this).val();
    console.log("Tip form input: " + tip);
  });
});
document.querySelector("#numberOfPeople").addEventListener("input", function() {
  document.addEventListener('input', () => {
    let bill = $("#bill").val();
    let numberOfPeople = $("#numberOfPeople").val();
    if (numberOfPeople != 0 && bill != 0 && tip != 0) {
      let totalTip = bill * (tip / 100);
      let totalBill = Number(totalTip) + Number(bill);
      let totalTipPerPerson = (totalTip / numberOfPeople).toFixed(2);
      let totalBillPerPerson = (totalBill / numberOfPeople).toFixed(2);    
      // $("#totalTipAmtPerPerson").text(with2Decimals(totalTipPerPerson));
      $("#totalTipAmtPerPerson").text(totalTipPerPerson);
      $("#totalBillAmtPerPerson").text(totalBillPerPerson);
      $("#zero").addClass("d-none");
      $("#numberOfPeople").removeClass("b-2");
      console.log("Bill: " + bill);
      console.log("Tip: " + tip);
      console.log("People: " + numberOfPeople);
    } else { 
      $("#zero").removeClass("d-none");
      $("#numberOfPeople").addClass("b-2");
      console.log("Number is a Zero");
    }  
  })
})
$('#reset').click(()=> {
  $("#bill").val("");
  $("#numberOfPeople").val("");
  $("#totalTipAmtPerPerson").text('0.00');
  $("#totalBillAmtPerPerson").text('0.00');
})
// function with2Decimals(num) {
//   let ogNum = num;
//   let newNum = num.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]; 
//   console.log(num, newNum);
//   return newNum;
// }
