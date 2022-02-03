//Префикс (29) был жирным и в два раза меньше чем основной телефон
//Префикс +375 был не жирным и таким же как основной телефон 

const prefixSelector= $('.phone-code');
const prefixText = prefixSelector.text();
const prefixTextArr = prefixText.split(' ');
const code = prefixTextArr[0];
const operator = prefixTextArr[1];

prefixSelector.html(code + " <span class = 'operator'>" + operator + " </span>");

const operatorSelector = $(".operator");
const operatorFontSize = parseInt(operatorSelector.css("font-size"));

operatorSelector.css({
  fontWeight: 'bold',
  fontSize: operatorFontSize/2 + 'px'
})

// Формат основной части телефона был изменен с XX-XX-XXX на XXX-XX-XX (регулярные выражения)

const numberRegExp = new RegExp(/[0-9][0-9]-[0-9][0-9]-[0-9][0-9][0-9]/)

const headerSelector = $('.header-contacts');
const headerHtml = headerSelector.html();
const numberText = headerHtml.match(numberRegExp)[0]

const updatedNumberTextArr = numberText.split('');
updatedNumberTextArr[2] = numberText[4];
updatedNumberTextArr[3] = numberText[2];
updatedNumberTextArr[5] = numberText[7];
updatedNumberTextArr[6] = numberText[5];

const updatedNumberText =  `<span class="number">${updatedNumberTextArr.join('')}</span>`

const updatedHeaderHtml = headerHtml.replace(numberText, updatedNumberText)

headerSelector.html(updatedHeaderHtml)

// Текст "(Velcom)" был удален (удаляла через узлы)

headerSelector[0].childNodes[3].remove()

//Весь номер телефона имел отступ в 10px от остального текста

$('.number').css({
  padding: '10px',
})
