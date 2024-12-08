(function (){
    const fizzBuzzScroll = {
        olElement: document.getElementById('fizzbuzz'),
        windowheight: window.innerHeight,
        start: 1,
        end: 100,
         init() {
            this.gap = this.end;
            document.documentElement.classList.add('js-enabled');
            this.generateNewItemElements();
            this.addEventListeners();
        },
        addEventListeners() {
            window.addEventListener('scrollend', (evt) => {
                this.generateNewLiElements();
            });
        },
        toggleSum(evt) {
            {
                [evt.currentTarget.dataset.sum, evt.currentTarget.textContent] = [evt.currentTarget.textContent, evt.currentTarget.dataset.sum];
            }
        },
        getSum(until) {
            return (until * (until + 1)) / 2;
        },
        generateNewItemElements() {
            for (; this.start <= this.end; this.start++) {
                if (this.start % 3 === 0) {
                    if (this.start % 5 === 0) {
                        this.olElement.insertAdjacentHTML('beforeend', '<li class="fizzbuzz">FI<i>zz</i>BU<i>zz</i>');
                    } else {
                        this.olElement.insertAdjacentHTML('beforeend', '<li class="fizz">FI<i>zz</i></li>');
                    }
                } else if (this.start % 5 === 0) {
                    this.olElement.insertAdjacentHTML('beforeend', '<li class="buzz">BU<i>zz</i></li>');
                } else {
                    const liElement = document.createElement('li')
                    liElement.textContent = this.start;
                    liElement.addEventListener('click', this.toggleSum);
                    liElement.dataset.sum = this.getSum(this.start);
                    this.olElement.insertAdjacentElement('beforeend', liElement);
                }
            }
            this.end += this.gap;
        },
        generateNewLiElements() {
            const bodyHeight = document.body.clientHeight;
            const scroll = window.scrollY;
            if (scroll + this.windowheight >= bodyHeight) {
                this.generateNewItemElements();
            }
        }
    }
    fizzBuzzScroll.init();
})()

/*
API : Application Programming Interface
Kevin Powell : incredible scroll-based animations with CSS (regarder la vidéo !)
 - un objet qui n'a pas de papa aura 'window' comme papa
 - JS est un objet
 - Revoir stack and heat pour contrôle
*/
