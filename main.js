let page = $('body')
let myDiv = $('<div></div>');
let myTextInput = $('#textInput');
page.append(myDiv);
myDiv.html('Click Here');
myUnorderedList = $('<ul></ul>')
page.append(myUnorderedList);
myDiv.on('click',()=>{
    let myLi = $(`<li>${myTextInput.val()}</li>`)
    myUnorderedList.append(myLi)
    myTextInput.val("");
})