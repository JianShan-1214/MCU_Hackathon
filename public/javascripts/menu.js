let foodCount = {};
let foodPrice = {};
let total = 0;

//$(".card-deck a").click(()=>{
//  $("#foodSel").append(`<p>${$(this).text()}</p>`);
//  
//  if(foodCount[$("card h5").text()] !== undefined) foodCount[$("card h5").text()]++;
//  else foodCount[$("card h5").text()] = 0;
//  
//  //$("#nums").val(foodCount);
//})

function order(vary,price){
  if(foodCount[vary] !== undefined) foodCount[vary]++;
  else {
    foodCount[vary] = 1;
    foodPrice[vary] = price;
    $("#foodSel").append(`<div class="float-right"><div class="input-group"><div class="input-group-prepend"><button class="btn btn-secondary" onclick="increment('${vary}')">+</button></div><span class="input-group-text" id="${vary}"></span><div class="input-group-append"><button class="btn btn-secondary" onclick="decrement('${vary}')">-</button><span class="input-group-text">* $${price}</span></div></div></div><p>${vary}</p>`);
  }
  
  $(`#${vary}`).text(foodCount[vary]);
  sum(vary,foodCount[vary]);
}

function increment(vary){
  foodCount[vary] += 1;
  $(`#${vary}`).text(foodCount[vary]);
  sum(vary,foodCount[vary]);
}

function decrement(vary){
  if(foodCount[vary]>1) foodCount[vary] -= 1;
  $(`#${vary}`).text(foodCount[vary]);
  sum(vary,foodCount[vary]);
}

function sum(vary,price){
  total = 0;
  for (i in foodCount){
    total += foodCount[i] * foodPrice[i];
  }
  //total += foodCount[vary] * price;
  $("#total").text(Math.round(total));
}

//$("#add").click(()=>{
//  foodCount++;
//  $("#nums").val(foodCount);
//})
//
//$("#remove").click(()=>{
//  if(foodCount>0) foodCount--;
//  $("#nums").val(foodCount);
//})

//$("#nums").change(()=>{
//  foodCount = $("#nums").val();
//  if(foodCount<0){
//    foodCount = 0;
//    $("#nums").val("0");
//  }
//})