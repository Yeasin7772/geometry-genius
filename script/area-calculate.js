// work with function -->

// triangle calculate
function calculateTriangleArea(){
    const base = getInputValue('triangle-base');
    const height = getInputValue('triangle-height');
    if (isNaN (base) || isNaN (height)) {
        alert('please provide me a value of number');
        return;
    }

    const calculate = 0.5 * base * height ;

    setElementInnerText('triangle-area', calculate)
}
// rectangle calculate
function calculateRectangleArea(){
    const rectangleWidth = getInputValue ('rectangle-width');
    const rectangleLength = getInputValue ('rectangle-length');
    if (isNaN (rectangleLength) || isNaN (rectangleWidth)) {
        alert ('please provide me a value of number')
        return;
    }

    const calculate = rectangleWidth * rectangleLength;
    setElementInnerText ('rectangle-area', calculate);
}
//Ellipse calculate
function calculateEllipseArea(){
    const ellipseBase = getInputValue ('Ellipse-base');
    const ellipseHeight = getInputValue ('Ellipse-height');
    if (isNaN (ellipseBase) || isNaN (ellipseHeight)) {
        alert ('please provide me a value of number');
        return;
    }

    const math = 3.14 *ellipseBase * ellipseHeight;
    setElementInnerText('Ellipse-area', math);
}
//Parallelogram calculate
function calculateParallelogramArea(){
    const base = getInputValue ('Parallelogram-base');
    const height = getInputValue ('Parallelogram-height');
     if (isNaN(base) || isNaN (height)) {
        alert ('please provide me a value of number');
        return;
     }

    const area = base * height;
    setElementInnerText('Parallelogram-area', area)


}
// main function get values and parseFloat --->

function getInputValue (FieldId){
    const inputField = document.getElementById (FieldId);
    const inputFieldValueText = inputField.value ;
    const inputValue =parseFloat (inputFieldValueText);
    inputField.value = '';
    return inputValue;

}
// just set  the value with function -->

function setElementInnerText (elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;

}