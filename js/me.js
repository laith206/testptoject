//-------------------------------------

var bestfood = document.getElementById('bestfood');
var btn = document.getElementById('btn');
var background = document.getElementById('background');
var showfromid = document.getElementById('showfromid');
var foodTYPE = document.getElementById('pizzfood');
var loding = document.getElementById('loding');


//var serchinput = document.getElementById('serchinput');
//var serchbtn = document.getElementById('serchbtn');

// get pizza 
let allpizza = [];

async function apipizz() {
    let apia = await fetch(`https://forkify-api.herokuapp.com/api/search?&q=pizza`)
    let apjason = await apia.json()
    allpizza = apjason.recipes;
    console.log(allpizza)
    bestfoods()
    // foodTYPES()
}

apipizz()
// --------------  bestfood  ---------------------

// show pizza 
function bestfoods() {

    let cartona = ` `;


    for (let i = 0; i < 10; i++) {
        cartona += `
        <div class="col-lg-4 col-md-6 pb-3 mb-5 ">
        <div class="cont-img ">
            <img src="${allpizza[i].image_url}" onclick="apipizzid(${allpizza[i].recipe_id})"
                class=" card-img img-fluid" alt="">
            <div class="opacity"></div>
            <h3>${allpizza[i].title}
            </h3>
            <p>${allpizza[i].publisher}
            </p> <a href="${allpizza[i].source_url}">More</a>
        </div>
    </div> `
    }

    bestfood.innerHTML = cartona;

}




let nav = document.querySelector('.navbar');

window.onscroll = function () {
    var top = window.scrollY;
    console.log(top);

    if (top >= 900) {
        nav.classList.add('activ-aa')
        //   btn.style.display = "flex";
    }

    else {

        // btn.style.display = "none";
        nav.classList.remove('activ-aa')

    }
}

$(window).scroll(function () {

    let scrol2 = $("#best").offset().top;
    let windowscrol = $(window).scrollTop();
    if (windowscrol > scrol2) {
        $("#btn").fadeIn();

    }
    else {
        $("#btn").fadeOut(500);
    }
})


$('#btn').click(function () {
    $("body, html").animate({ scrollTop: '0' }, 1000)
})


// link smouthink 
$("a[href^='#']").click(function (e) {
    let x_href = $(e.target).attr("href");
    let ahref = $(x_href).offset().top;
    $("body, html").animate({ scrollTop: ahref }, 2000)

})


$(".aaa").eq(1).css("backgroundcolor", "blue");













// --------------  food-TYPES  ---------------------

//  let allfode = [];
//  
//  async function apifode() {
//      let apia = await fetch(`https: //forkify-api.herokuapp.com/api/search?&q=pizza`)
//      let apjason = await apia.json()
//      allfode = apjason.recipes;
//      console.log(allfode);
//      foodTYPES(allfode)
//  };
//  
//  
//  
//  
//  
//  
//  function foodTYPES(allfode) {
//      let cartona = ` `;
//      for (let i = 0; i < allfode.len; i++) {
//          cartona +=
//              ` 
//              <div class="TYPES-img col-lg-3 ml-1 position-relative  ">
//              <img src="${allfode[i].image_url}" class=" img-fluid " alt="selling">
//              <div class="sell-back">
//                  <div class="text">
//                      <span class="ico mx-2 d-flex  "><i class="fab fa-facebook "></i></span>
//                      <span class="ico mx-2 d-flex  "><i class="fab fa-twitter"></i></span>
//                      <span class="ico mx-2 d-flex  "><i class="fab fa-yahoo"></i></span>
//                      <span class="ico mx-2 d-flex  "><i class="fab fa-google"></i></span>
//                  </div>
//              </div>
//          </div>
//          `
//      }
//  
//      foodTYPE.innerHTML = cartona;
//  
//  }
//  























// get pizza by id
async function apipizzid(id) {
    let apiaid = await fetch(`https: //forkify-api.herokuapp.com/api/get?rId=${id}`)
    let apjasonid = await apiaid.json()
    var allpizzaid = apjasonid.recipe;
    console.log(allpizzaid).background.style.display = "flex";
    background.style.flex = "wrap";
    desplaypzzaid(allpizzaid)
}
//
//// show pizza by id
// function desplaypzzaid(allpizzaid) {
//     let cartona = ` `;
// 
//     cartona = ` <div class=" col-md-6 "> 
//     <div class="hover-im"> <img src="${allpizzaid.image_url}"class=" card-img img-fluid"alt=""> 
//     </div>
//      </div> 
//      <div class=" col-md-6"> <h3 style="color: #e1e1e1;">${allpizzaid.title}
//                </h3> <p>${allpizzaid.ingredients}
//                    
//                
//    
//                </p> <a href="${allpizzaid.source_url}"class="text-decoration-none">Read More</a> </div> <i id="close"onclick="clos()"class="far fa-times-circle text-info"></i> ` showfromid.innerHTML = cartona;
// 
// }

// hiden pizza by id
function clos() {
    background.style.display = "none";
}

// get search allfode
let allfode = [];

async function apifode(fode) {
    let apia = await fetch(`https: //forkify-api.herokuapp.com/api/search?&q=${fode}`)
    let apjason = await apia.json()
    allfode = apjason.recipes;
    console.log(allfode);
    desplayfode(allfode)
}

;

// event btn search allfode
serchbtn.addEventListener("click", function () {

    apifode(serchinput.value)
}

);

// show search allfode
function desplayfode(allfode) {
    let cartona = ` `;

    for (let i = 0; i < allfode.length; i++) {
        cartona += ` <div class="col-lg-4 col-md-6 pb-3 mb-5 "> <div class="cont-img "onclick="apipizzid(${allfode[i].recipe_id})"> <img src="${allfode[i].image_url}"class=" card-img img-fluid"alt=""> <div class="opacity"></div> <h3>$ {
                           allfode[i].title
                       }
   
                       </h3> <p>$ {
                           allfode[i].publisher
                       }
   
                       </p> <a href="${allfode[i].source_url}">More</a> </div> </div> `
    }

    showpizaa.innerHTML = cartona;
}

document.addEventListener("keydown", function (e) {

    if (e.keyCode === 27) {

        background.style.display = "none"
        loding.style.display = "none"
    }
}

);

$(".slidnava,.slidnavb").click(function () {

    $(".slidnav").toggleClass('aaa');

    $(".slidnav span").click(function (e) { }

    )
}

)
$(".slidnav span").click(function () {
    var color = $(this).css("background-color");
    console.log(color) //  var cooll = {'box-shadow': '10px', '30px', '30px'};
    // $("h1,p,span,h5,h6").css("background-color", color);
    //  $("img").css("box-shadow", "10px 10px 5px color");
    // nav.style.boxShadow = "10px 20px 30px rgb(18, 12, 100)";
    // $("img").css("--box-shadow-color", color);
    // var bodyStyles = window.getComputedStyle(document.body);
    //  var fooBar = bodyStyles.getPropertyValue('--box-shadow-color'); //get

    document.body.style.setProperty('--box-shadow-color', color); //set
}

);


// changh nav color if scroll down
// let nav = document.querySelector('.navbar');
// 
// window.onscroll = function () {
//     var top = window.scrollY;
//     console.log(top);
// 
//     if (top >= 900) {
//         nav.classList.add('activ-aa')
//     }
// 
//     else {
//         nav.classList.remove('activ-aa')
//     }
// }

               //  var matches = document.querySelector(".slidnav");
               //  
               //  matches.addEventListener("click", function(e) {
               //  
               //      console.log(e.target)
               //      let aa = e.target.classList;
               //      console.log(aa)
               //      let aaa = aa.value;
               //      console.log(aaa)
               //      document.body.classList.add(aaa);
               //  });
               //  




               // let aa = $(".bg-danger").style();
               // let aa = $(e.target).attr("style");
               //console.log(aa)
               // $('div').on('click', function(e) {
               //     console.log($(e.target).attr('class'));
               // });
               // var theColorIs = $('.slidnav span').css("background-color");
               // console.log(aa)
               // let aaa = aa.background - color;
               //  console.log(theColorIs)
               //  $("body").css("background-color", theColorIs); 
               //document.body.classList.replace(aaa,aaa);
               //div.classList.replace("foo", "bar");
               // $("h1,p,span,h5,h6").style.replace("red", "green");
               // ----------------------------------------------------------------------
               // https://forkify-api.herokuapp.com/api/get?rId=47334      api id
               // https://forkify-api.herokuapp.com/api/search?&q=pizza   apipizz
               // "https://forkify-api.herokuapp.com/api/get?rId=47334https: //westhors.github.io/Fast-food/index.html"  web to test
               // https://forkify-api.herokuapp.com/api/get?rId=47334      api id
               // https://forkify-api.herokuapp.com/api/search?&q=pizza   apipizz
               // "https://forkify-api.herokuapp.com/api/get?rId=47334https: //westhors.github.io/Fast-food/index.html"  web to test
               //------------------------------------


