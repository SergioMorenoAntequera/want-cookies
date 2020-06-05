
class TakeCookies {
    
    constructor(options=null){
        this.tc  = document.querySelector("#takecookies");
        this.cta = document.querySelector("#takecookies .cta button");

        // Title
        this.tc.appendChild(document.createElement("h1"));
        if(options.title !== undefined){
            this.tc.querySelector("h1").innerHTML = options.title;
        } else {
            this.tc.querySelector("h1").innerHTML = "Aviso de cookies";
        }

        
        if(options.text !== undefined){
            this.tc.querySelector(".content p").innerHTML = options.text;
        } else {
            this.tc.querySelector(".content p").innerHTML = "Al entrar y navegar por este sitio web usted acepta que se utilicen cookies en su navegador. Estas cookies se van utilizando para poder ofrecer un servicio mejor y más peronalizado, además para recoger información de cara a un sistema de analíticas de la página y no son compartidas con ninguna persona externa a los creadores de la página y el sistema ya mencionado mantenidas por un tiempo indefinido. ";
        }
        
        

        if(this.checkCookies()){
            this.tc.style.visibility = "hidden";
        } else {
            this.cta.addEventListener("click", (e) => {
                this.giveCookies();
                this.tc.style.visibility = "hidden";
            });
        }
    }

    checkCookies() {
        var name = "wantcookies" + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
        }
        return "";
    }
    giveCookies() {
        document.cookie = "wantcookies=true";
    }
}

let cookiesManager = new TakeCookies({
    // title: "Politica de cookies",
    // text: "PRAAA",

});