let tip = 0;
document.querySelectorAll('.btn').forEach(function(button) {
  button.addEventListener('click', function() {
    tip = ($(this).val()).slice(0, -1);
    console.log(tip);
  });
  button.addEventListener('input', function() {
    tip = $(this).val();
    console.log($(this).val());
  });
});
document.addEventListener('input', () => {
  let bill = $("#bill").val();
  let numberOfPeople = $("#numberOfPeople").val();
  console.log(bill);
  console.log(tip);
  console.log(numberOfPeople);
  // bill = 142.55; tip = 15; numberOfPeople = 5;
  if (numberOfPeople != 0 && bill != 0 && tip != 0) {
    let totalTip = bill * (tip / 100);
    let totalBill = Number(totalTip) + Number(bill);
    let totalTipPerPerson = (totalTip / numberOfPeople - 0.01).toFixed(2);
    let totalBillPerPerson = (totalBill / numberOfPeople).toFixed(2);    
    $("#totalTipAmtPerPerson").text(totalTipPerPerson);
    $("#totalBillAmtPerPerson").text(totalBillPerPerson);
  } else { console.log("Else Not a Number")}  
})
$('#reset').click(()=> {
  $("#totalTipAmtPerPerson").text('0.00');
  $("#totalBillAmtPerPerson").text('0.00');
})