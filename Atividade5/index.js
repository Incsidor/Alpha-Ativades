const btao = document.querySelector("#converter");

btao.addEventListener("click", function converter(e){
    e.preventDefault();

    const value = document.querySelector("#value").value;
    console.log(value);
    console.log(typeof(value));
    const result = document.querySelector("#result");

    switch (value) {
        case "0":
            result.innerHTML = "Zero";
            break;
        case "1":
            result.innerHTML = "Um";
            break;
        case "2":
            result.innerHTML = "Dois";
            break;
        case "3":
            result.innerHTML = "Três";
            break;
        case "4":
            result.innerHTML = "Quatro";
            break;
        case "5":
            result.innerHTML = "Cinco";
            break;
        case "6":
            result.innerHTML = "Seis";
            break;
        case "7":
            result.innerHTML = "Sete";
            break;
        case "8":
            result.innerHTML = "Oito";
            break;
        case "9":
            result.innerHTML = "Nove";
            break;
        case "10":
            result.innerHTML = "Dez";
            break;
        default:
            break;
    }
})


const btao2 = document.querySelector("#information");
btao2.addEventListener("click", function(e){
    e.preventDefault();

    const calendarData = document.querySelector("#calendario").value;
    const completeData = new Date(calendarData);

    const year = completeData.getUTCFullYear();
    document.querySelector("#inf1").innerHTML = "Ano: " + year;

    const month = completeData.getUTCMonth();
    document.querySelector("#inf2").innerHTML = "Mês: " + (month + 1);
  

    const week = completeData.getUTCDay() - 1;
    const resultWeek = document.querySelector("#inf4");
    console.log(week);
    switch (week) {
        case 0:
            resultWeek.innerHTML = "Dia da Semana: Segunda-Feira";
            break;
        case 1:
            resultWeek.innerHTML = "Dia da Semana: Terça-Feira";
            break;
        case 2:
            resultWeek.innerHTML = "Dia da Semana: Quarta-Feira";
            break;
        case 3:
            resultWeek.innerHTML = "Dia da Semana: Quinta-Feira";
            break;
        case 4:
            resultWeek.innerHTML = "Dia da Semana: Sexta-Feira";
            break;
        case 5:
            resultWeek.innerHTML = "Dia da Semana: Sábado";
            break;
        case 6:
            resultWeek.innerHTML = "Dia da Semana: Domingo";
            break;
        default:
            break;
    }

    const day = completeData.getUTCDate();
    document.querySelector("#inf3").innerHTML = "Dia: " + day;

    const monthText = document.querySelector("#inf5");
    switch (month) {
        case 0:
            monthText.innerHTML = "Janeiro";
            break;
        case 1:
            monthText.innerHTML = "Fevereiro";
            break;
        case 2:
            monthText.innerHTML = "Março";
            break;
        case 3:
            monthText.innerHTML = "Abril";
            break;
        case 4:
            monthText.innerHTML = "Maio";
            break;
        case 5:
            monthText.innerHTML = "Junho";
            break;
        case 6:
            monthText.innerHTML = "Julho";
            break;
        case 7:
            monthText.innerHTML = "Agosto";
            break;
        case 8:
            monthText.innerHTML = "Setembro";
            break;
        case 9:
            monthText.innerHTML = "Outubro";
            break;
        case 10:
            monthText.innerHTML = "Novembro";
            break;
        case 11:
            monthText.innerHTML = "Dezembro";
            break;
        default:
            break;
    }

    const dayInMilisseconds = Date.now();
    document.querySelector("#inf6").innerHTML = dayInMilisseconds;
});

const btn3 = document.querySelector("#showMe");
btn3.addEventListener("click", function(nada){
    nada.preventDefault();

    const produtos = document.querySelector("#seletor").value; 

    switch (produtos) {
        case "1":
            document.getElementById("produto1").style.display = "flex";
            break;
        case "2":
            document.getElementById("produto2").style.display = "flex";
            break;
        case "3":
            document.getElementById("produto3").style.display = "flex";
            break;
        case "4":
            document.getElementById("produto4").style.display = "flex";
            break;
        case "5":
            document.getElementById("produto5").style.display = "flex";
            break;
            case "6":
                document.getElementById("produto6").style.display = "flex";
                break;
        default:
            break;
    }
});
