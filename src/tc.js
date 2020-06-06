
class TakeCookies {
    
    element;
    options = [
        {
            "name": "title", 
            "default": "Cookies Warning",
            "selector": "h1",
        },
        {
            "name": "text", 
            "default": "When you enter and browse in this site you are accepting the use of cookies in your browser. This cookies are going to be used to be able to offer a better and custome service, moreover to let us pick information to use used in a analytics system inside this webpage. Also, your cookies are not shared with anyone appart from the responsable group  of the webpage. This cookies are hold for an undefined ammount of time.",
            "selector": "p",
        },
        {
            "name": "cookiesPageText", 
            "default": "See more...",
            "selector": "a",
        },
        {
            "name": "cookiesPageUrl", 
            "default": "404",
            "selector": "a url",
        },
        {
            "name": "buttonText", 
            "default": "OKAY",
            "selector": "button",
        },
    ];
    
    constructor(element=null, options=null){
        

        this.setElement(element);
        
        this.options.forEach(option => {
            this.setOption(option);
        });

        // Yeah  you are seeing right
        if(options==null) { options = {}; }
        // Title /////////////////////////////////////////////////////////////////////////
        this.element.appendChild(document.createElement("h1"));
        if(options.title !== undefined){
            this.element.querySelector("h1").innerHTML = options.title;
        } else {
            this.element.querySelector("h1").innerHTML = "Cookies Warning";
        }

        // Contenedor ////////////////////////////////////////////////////////////////////
        let content = document.createElement("div");
        content.classList.add("content");
        this.element.appendChild(content);


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
            this.element.style.visibility = "hidden";
        } else {
            this.cta.addEventListener("click", (e) => {
                this.giveCookies();
                this.element.style.visibility = "hidden";
            });
        }
    }

    // COOKIES METHODS
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


    setElement(element){
        if(element == null){
            this.element = document.createElement('div');
            this.element.setAttribute("id", "takecookies");
            document.querySelector("body").appendChild(this.element);

        } else {
            this.element  = document.querySelector(element);
        }
    }

    // Check option and put value
    setOption(option){
        let optionSelector =  this.element.querySelector(option.selector);
        console.log(optionSelector);
    }

}