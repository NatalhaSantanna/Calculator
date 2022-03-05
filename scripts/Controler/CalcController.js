class CalcController {
    constructor() {
            //tecla 0 da calculadora (atributo privado)
            this._locale = 'pt-BR';
            this._displayCalcEl = document.querySelector("#display");
            this._dateEl = document.querySelector("#data");
            this._timeEl = document.querySelector("#hora");
            this._currentDate;
            this.initialize();
        }
        //initialize é onde fica tudo o que o objeto terá que fazer
    initialize() {
        this.setDisplayDateTime();

        setInterval(() => {
            //para atualizar hora e a data a cada 1 segundo
            this.setDisplayDateTime();
        }, 1000 /*equivale 1 segundo*/ );
    }
    initButtonsEvent() {
        let buttons = document.querySelectorAll("buttons > g, parts > g");
    }
    setDisplayDateTime() {
        this.displayDate = this.currentDate.toLocaleDateString(this._locale);
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }
    get displayTime() {
        return this._timeEl.innerHTML;
    }
    set displayTime(value) {
        return this._timeEl.innerHTML = value;
    }
    get displayDate() {
        return this._dateEl.innerHTML;
    }
    set displayDate(value) {
            return this._dateEl.innerHTML = value;
        }
        //para resgatar um valor usa get
    get displayCalc() {
            return this._displayCalcEl.innerHTML;
        }
        //para mudar o valor de displayCalc usa-se o set
    set displayCalc(value) {
        this._displayCalcEl.innerHTML = value;
    }
    get currentDate() {
            return new Date();
        }
        //para mudar o valor de currentDate usa-se o set
    set currentDate(value) {
        this._currentDate = value;
    }
}