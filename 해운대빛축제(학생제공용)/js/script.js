let v = 0;
function img() {
    $(".banner-imgs").css("left", `${v}%`);
    // $(".banner-imgs").animate({left: `${v}%`}, 400, 'linear')
    if(v == -200){
        v = 0;
    }else {
        v -= 100;
    }
    console.log();
}
setInterval(img, 1000);

// $(".banner-imgs").animate({"left": `${v}%`}, 400, 'linear');
// if(v == -200){
//     v = 0;
// }else {
//     v -= 100;
// }