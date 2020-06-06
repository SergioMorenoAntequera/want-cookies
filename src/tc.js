
class TakeCookies {
    
    constructor(element, options=null){
        this.tc  = document.querySelector(element);
        if(this.tc === null){
            console.log("Please, read the god dammit documentation...");
            return;
        }

        // Yeah  you are seeing right
        if(options==null) { options = {}; }
        // Title /////////////////////////////////////////////////////////////////////////
        this.tc.appendChild(document.createElement("h1"));
        if(options.title !== undefined){
            this.tc.querySelector("h1").innerHTML = options.title;
        } else {
            this.tc.querySelector("h1").innerHTML = "Cookies Warning";
        }

        // Contenedor ////////////////////////////////////////////////////////////////////
        let content = document.createElement("div");
        content.classList.add("content");
        this.tc.appendChild(content);


        // Texto
        let text = document.createElement("p");
        content.appendChild(text);
        if(options.text !== undefined){
            text.innerHTML = options.text;
        } else {
            // text.innerHTML = "Al entrar y navegar por este sitio web usted acepta que se utilicen cookies en su navegador. Estas cookies se van utilizando para poder ofrecer un servicio mejor y más peronalizado, además para recoger información de cara a un sistema de analíticas de la página y no son compartidas con ninguna persona externa a los creadores de la página y el sistema ya mencionado mantenidas por un tiempo indefinido. ";
            text.innerHTML = "When you enter and browse in this site you are accepting the use of cookies in your browser. This cookies are going to be used to be able to offer a better and custome service, moreover to let us pick information to use used in a analytics system inside this webpage. Also, your cookies are not shared with anyone appart from the responsable group  of the webpage. This cookies are hold for an undefined ammount of time.";
        }

        // Enlace
        let link = document.createElement("a");
        if(options.cookiesPageUrl !== undefined){
            link.setAttribute("href", options.cookiesPageUrl);
        } else {
            link.setAttribute("href", "404");            
        }
        if(options.cookiesPageText !== undefined){
            link.innerHTML = options.cookiesPageText;
        } else {
            link.innerHTML = "See more...";
        }
        text.appendChild(link);

        // Botón //////////////////////////////////////////////////////////////////////////
        let button = document.createElement("button");
        if(options.buttonText !== undefined){
            button.innerHTML = options.buttonText;
        } else {
            button.innerHTML = "OKAY";
        }
        content.appendChild(button);

        
        this.cta = document.querySelector("#takecookies button");
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