
class TakeCookies {
    
    element;
    options = {
        title: {
            "value": "Cookies Warning",
            "selector": "h1",
        },
        text: {
            "value": "When you enter and browse in this site you are accepting the use of cookies in your browser. This cookies are going to be used to be able to offer a better and custome service, moreover to let us pick information to use used in a analytics system inside this webpage. Also, your cookies are not shared with anyone appart from the responsable group  of the webpage. This cookies are hold for an undefined ammount of time.",
            "selector": "p",
        },
        cookiesPageText: {
            "value": "See more...",
            "selector": "a",
        },
        cookiesPageUrl: {
            "value": "404",
            "prop": "href",
        },
        buttonText: {
            "value": "OKAY",
            "selector": "button",
        },
    };
    
    constructor(element = null, options = null){
        this.setParentElement(element);
        this.setOptions(options);
        
        // Titulo
        this.insertElement(this.element, this.options.title);

        // Contenedor ////////////////////////////////////////////////////////////////////
        let content = document.createElement("div");
        content.classList.add("content");
        this.element.appendChild(content);
        // Texto y botón
        let texto = this.insertElement(content, this.options.text);
        let link = this.insertElement(texto, this.options.cookiesPageText);
        link = this.insetAttribute(link, this.options.cookiesPageUrl);
        let button = this.insertElement(content, this.options.buttonText);
        

        if(this.checkCookies()){
            this.element.style.visibility = "hidden";
        } else {
            button.addEventListener("click", (e) => {
                this.giveCookies();
                this.element.style.visibility = "hidden";
            });
        }
    }


    setParentElement(element){
        if(!document.querySelector(element)){
            this.element = document.createElement('div');
            this.element.setAttribute("id", "takecookies");
            document.querySelector("body").appendChild(this.element);
        } else {
            this.element = document.querySelector(element);
        }
    }
    setOptions(options){
        let keys = Object.keys(options);
        let classKeys = Object.keys(this.options);
        keys.forEach(key => {
            classKeys.forEach(classKey => {
                if(key == classKey){
                    this.options[key].value = options[key];
                }
            });
        });
    }
    insertElement(parent, element){
        let newElement = document.createElement(element.selector)
        parent.appendChild(newElement);
        newElement.innerHTML = element.value;
        return newElement;
    }
    insetAttribute(element, atribute){
       element.setAttribute(atribute.prop, atribute.value); 
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
}