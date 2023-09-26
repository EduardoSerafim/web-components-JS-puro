class CardNews extends HTMLElement{
    constructor(){
        super()

        const shadow = this.attachShadow({mode:"open"})
        shadow.appendChild(this.build())
        shadow.appendChild(this.style())
    }

    build(){
        const componentRoot = document.createElement("div")

        componentRoot.setAttribute("class", "card")

        const cardLeft= document.createElement("div")
        const cardRight= document.createElement("div")

        cardLeft.setAttribute("class", "card_left")
        cardRight.setAttribute("class", "card_right")

        const autor = document.createElement("span")
        const linkTitle = document.createElement("a")
        const newsContent = document.createElement("p")

        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous")
        linkTitle.textContent = this.getAttribute("title")
        linkTitle.href = this.getAttribute("link-url")
        newsContent.textContent = this.getAttribute("content")

        cardLeft.appendChild(autor)
        cardLeft.appendChild(linkTitle)
        cardLeft.appendChild(newsContent)

        const newsImage = document.createElement("img")
        
        newsImage.src = this.getAttribute("photo") || "https://winaero.com/blog/wp-content/uploads/2015/05/windows-10-user-account-login-icon.png"
        newsImage.alt = "Foto da notícia"
       

        cardRight.appendChild(newsImage)

        componentRoot.appendChild(cardLeft)
        componentRoot.appendChild(cardRight)

        return componentRoot
    }

    style(){
        const style = document.createElement("style")

        style.textContent = `
        .card{
            width: 80%;
            -webkit-box-shadow: 18px 24px 21px -8px rgba(0,0,0,0.75);
            -moz-box-shadow: 18px 24px 21px -8px rgba(0,0,0,0.75);
            box-shadow: 18px 24px 21px -8px rgba(0,0,0,0.75);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-top: 60px;
        }
        
        
        
        .card_left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 10px;
        }
        
        .card_left > span {
            font-weight: 400;
        }
        
        .card_left > a{
            margin-top: 15px;
            font-size: 25px;
            color: black;
            text-decoration: none;
            font-weight: bold;
        }
        
        .card_left > p{
            color: rgb(70, 70, 70);
        }
        
        
        `

        return style
    }
}

customElements.define("card-news", CardNews)