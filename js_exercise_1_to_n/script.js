/**
 * @name    script.js
 * @desc    this script takes a number 'n' and asks the user if they want the sum of 1... 'n' or the product of 1... 'n'
 */


(function(){
    var
        number      =   document.getElementById("number"),
        enterBtn    =   document.getElementById("enterBtn"),
        sum         =   document.getElementById("sum"),
        prod        =   document.getElementById("prod"),
        outputDiv   =   document.getElementById("outputDiv"),
        numArray    =   [],
        i           =   0,
        j           =   number.value,
        total = 0,
        product = 1,


    readNum     =       function () {
            sum.disabled = false;
            prod.disabled = false;
            numArray = [];
            total = 0;
            product = 1;
            console.log(number.value);
            enterBtn.innerHTML = "GO AGAIN";
            enterBtn.addEventListener("click",function () {
                outputDiv.innerHTML = "";
            })

    },//readNum

    totalNum        =   function () {
        numArray = [];
        for (j = number.value-1; j >= 0; j--){
            numArray.push((number.value - j));
        }

       for (i=0; i< numArray.length; i++){
            total   += numArray[i];

        }
        sum.disabled = true;
        outputDiv.innerHTML = "you have entered: " + number.value + ", which gives the following list of numbers: " + numArray + ". The total of which is: " + total;

    },//totalNum

    prodNum         =   function () {
        numArray = [];
        for (j = number.value-1; j >= 0; j--){
            numArray.push((number.value - j));
        }

        for (i=0; i< numArray.length; i++){
            product   *= numArray[i];

        }

        outputDiv.innerHTML = "you have entered: " + number.value + ", which gives the following list of numbers: " + numArray + ". The product of which is: " + product;
        prod.disabled = true;

    },//prodNum

    bindBtns        =   function () {

            enterBtn.addEventListener("click",readNum);
            sum.addEventListener("click", totalNum);
            prod.addEventListener("click", prodNum);

    },//bindBtns

    init        =       function(){
            bindBtns()
    };//init

    window.addEventListener("load", init);
})();