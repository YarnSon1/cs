function loader() {

    var loader = document.getElementById("loader");

    setTimeout(function () {

        loader.classList.add("hidden");

    }, 2000);

}

loader();

window.onload = function(){ 

            var current = 0;

            document.getElementById('rotate').onclick = function(){

                current = (current+5)%360;

                this.style.transform = 'rotate('+current+'deg)';

            }

        };
