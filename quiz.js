/*const sendButton = document.getElementById('btn-add');
const textArea = document.getElementById('answer');
var message = textArea.value;

sendButton.addEventListener('click', function () {
    const message = new MessageContainerBuilder().BuildMessage(textArea.value);
    innerDiv.appendChild(message);
    textArea.value = '';
});

function encodeHtmlEntity(answer) {
    var output = answer.replace(/[\u00A0-\u9999<>\&]/gim, function (i) {
        return '&#' + i.charCodeAt(0) + ';';
    });

    return answer;
}

class MessageContainerBuilder {
    constructor() {
        var createDivElement = function (classTest) {
            var div = document.createElement('div');

            var classAttr = document.createAttribute('class');
            classAttr.value = classTest;
            div.setAttributeNode(classAttr);

            return div;
        };

        var createSpanElement = function (value, classTest) {
            var span = document.createElement('span');

            if (classTest) {
                var classAttr = document.createAttribute('class');
                classAttr.value = classTest;
                span.setAttributeNode(classAttr);
            }

            span.innerText = encodeHtmlEntity(value);

            return span;
        };

        this.BuildMessage = function (text) {
            var divContainer = createDivElement('Answer');
            var messageSpan = createSpanElement(text, 'ans');

            divContainer.appendChild(messageSpan);

            return divContainer;
        };
    }
}*/

var sendButton = document.getElementById('btn-add');
var innerDiv = document.getElementById('question');
sendButton.addEventListener('click', function () {

    innerDiv.innerHTML = innerDiv.innerHTML + '<div class="Answer" id="Answer">' + document.getElementById('answer').value +
        '<div class="ans" id="ans"></div></div>';

});

