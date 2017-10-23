class HoverCta {
    constructor(cta) {
        this.cta = cta
        const text = this.cta.innerHTML;
        this.state = true;
        this.init(text)
    }

    init(text) {
        this.cta.innerHTML=""
        const span = document.createElement('span');
        const nextText = document.createTextNode(text);
        span.appendChild(nextText)
        this.cta.appendChild(span)

        this.cta.addEventListener("mouseover",() => {
            this.animate()
            this.state = false
        })
        this.cta.addEventListener("mouseout", () => {
            this.state = true
        })

    }

    animate() {
        if(this.state) {
            const span = this.cta.querySelector('span')
            var tl = new TimelineLite();
            tl.to(span, 0.1, {
                alpha: 0,
                ease: Power2.ease,
                y: -(span.offsetHeight/3)})
                .to(span,0, {
                    alpha: 0,
                    y: (span.offsetHeight/3)
                })
                .to(span, 0.1, {
                    alpha: 1,
                    ease: Power2.ease,
                    y: 0})
        } else {
            return null;
        }


    }

}

export default HoverCta
