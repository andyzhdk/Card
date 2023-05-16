(function () {

    const attacks = document.getElementById('attacks');
    const ability = document.getElementById('ability');
    const burst = document.getElementById('burst');

    const tab1 = document.getElementById('tab1');
    const tab2 = document.getElementById('tab2');
    const tab3 = document.getElementById('tab3');

    attacks.addEventListener("click", function(){ switchTabAnimation('attacks'); });
    ability.addEventListener("click", function(){ switchTabAnimation('ability'); });
    burst.addEventListener("click", function(){ switchTabAnimation('burst'); });
    

    function switchTabAnimation(tab) {
        switch(tab){
            case 'attacks': {

                tab1.classList.add('selected');
                tab2.classList.remove('selected');
                tab3.classList.remove('selected');

                attacks.classList.add('active');
                ability.classList.remove('active');
                burst.classList.remove('active');
                break;
            }
            case 'ability': {

                tab2.classList.add('selected');
                tab1.classList.remove('selected');
                tab3.classList.remove('selected');

                ability.classList.add('active');
                burst.classList.remove('active');
                attacks.classList.remove('active');
                break;
            }
            case 'burst': {

                tab3.classList.add('selected');
                tab2.classList.remove('selected');
                tab1.classList.remove('selected');

                burst.classList.add('active');
                ability.classList.remove('active');
                attacks.classList.remove('active');
                break;
            }
        }
    }

    // JS copied from "https://codepen.io/chrisboon27/pen/kPpYOR"
    var movementStrength = 50;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    $("#xiangling-img").mousemove(function(e){
            var pageX = e.pageX - ($(window).width() / 2);
            var pageY = e.pageY - ($(window).height() / 2);
            var newvalueX = width * pageX * -1 - 25;
            var newvalueY = height * pageY * -1 - 50;
            $('#xiangling-img').css("background-position", newvalueX+"px     "+newvalueY+"px");
    });

})();