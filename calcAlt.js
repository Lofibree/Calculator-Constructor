
class Calc {
    constructor() {
        this.operationButtons = [];
        this.operationButtonsHTML = [];
        this.digitButtons = [];
        this.digitButtonsHTML = [];

        this.resault = null;
        this.input1 = null;
        this.input2 = null;
        this.eventObject = null;

        this.start = function (elId) {
            var that = this;
            var elId = document.querySelector('#' + elId);
            this.operationButtons = elId.getElementsByClassName('operation-button');
            this.digitButtons = elId.querySelectorAll('.digit');

            this.input1 = elId.querySelector('#number1');
            this.input2 = elId.querySelector('#number2');
            this.resault = elId.querySelector('#resault');


            for (var i = 0; i < this.digitButtons.length; i++) {
                this.digitButtons[i].addEventListener('click', function (eventObject) {
                    that.digitButtonsHTML = this.innerHTML;
                    console.log(that.digitButtonsHTML);
                    that.digitOperation(that.digitButtonsHTML);
                });
            };

            for (var i = 0; i < this.operationButtons.length; i++) {

                this.operationButtons[i].addEventListener('click', function (eventObject) {
                    that.operationButtonsHTML = this.innerHTML;
                    console.log(that.operationButtonsHTML);
                    that.digitOperation(that.operationButtonsHTML);
                });
            };
        };


        this.digitOperation = function (operationCode) {
            var number1 = this.input1.value;
            if ((operationCode === '+') || (operationCode === '-') || (operationCode === '*') || (operationCode === '/')) {
                this.makeOperation(operationCode);
            } else if (this.input1.value.includes('..')) {
                window.alert('error: ..');
            } else if (number1 === 0) {
                this.input1.value = operationCode;
            } else {
                this.input1.value = number1 + operationCode;
            }
        };

        this.makeOperation = function (operationCode) {
            var that = this;
            var number1 = that.input1.value;
            var number2 = that.input2.value;

            if (operationCode === '+') {
                that.resault.innerHTML += ' \n' + number1 + operationCode + number2 + '=';
                that.resault.innerHTML += +number1 + +number2;
            } else if (operationCode === '-') {
                that.resault.innerHTML += ' \n' + number1 + operationCode + number2 + '=';
                that.resault.innerHTML += +number1 - +number2;
            } else if (operationCode === '*') {
                that.resault.innerHTML += ' \n' + number1 + operationCode + number2 + '=' + number1 * +number2;
            } else if (operationCode === '/') {
                that.resault.innerHTML += ' \n' + number1 + operationCode + number2 + '=' + number1 / +number2;
            }
        };
    }
};

