// function searchIndustry(){
//   let input = document.getElementById("search").value.toLowerCase();
//   let cards = document.getElementsByClassName("card");

//   for(let i=0; i<cards.length; i++){
//     let text = cards[i].innerText.toLowerCase();
//     cards[i].style.display = text.includes(input) ? "block" : "none";
//   }
// }

// function show(name){
//     if(name == "Bricks Industry"){
//         alert(
//             "Bricks Industry Names:\n\n1. Ram Bricks\n2. Sita Company\n3. Laxman Bricks Industry\n4>"
//         );
//     }
// }
// function show(type){

//   if(type === "bricks"){
//     alert(
//       "Bricks Industries List:\n\n" +
//       "1. Ram Bricks\n" +
//       "2. Sita Company\n" +
//       "3. Laxman Bricks Industry\n" +
//       "4. Sri Lakshmi Bricks\n" +
//       "5. Golden Fly Ash Bricks"
//     );
//   }

// }
function searchIndustry(){
  let input = document.getElementById("search").value.toLowerCase();
  let cards = document.getElementsByClassName("card");

  for(let i=0; i<cards.length; i++){
    let text = cards[i].innerText.toLowerCase();
    cards[i].style.display = text.includes(input) ? "block" : "none";
  }
}

function show(type){

  if(type === "bricks"){
    alert(
      "Bricks Industries List:\n\n" +
      "1. Ram Bricks\n" +
      "2. Sita Company\n" +
      "3. Laxman Bricks Industry\n" +
      "4. Sri Lakshmi Bricks\n" +
      "5. Golden Fly Ash Bricks"
    );
  }

}

