parentDiv = $('#parentDiv')
myDiv = $('<div></div>');
myTextInput = $('#textInput');
parentDiv.append(myDiv);
myDiv.html('Click Here');
myUnorderedList = $('<ul></ul>')
myDiv.append(myUnorderedList);
myDiv.on('click',()=>{
    let myLi = $(`<li>${myTextInput.val()}</li>`)
    myUnorderedList.append(myLi)
    myTextInput.val("");
})