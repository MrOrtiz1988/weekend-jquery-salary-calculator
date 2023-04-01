//testing js if js is working
console.log('Hello JS!');

$(document).ready(onReady);


function onReady(){
    //testing if jquery is working
    console.log('Hello JQuery!');
    //this handles the submit button on its click and is passed in a function
    $('#submit').on('click', onSubmit);
    //this handles the delete button on its click and is passed in a function
    $('tbody').on('click', '.delete-btn', deleteEntry);
    
    $("tr:even").css("background-color", "#eeeeee");
}

//onSubmit handles new data being added to the table 
function onSubmit(event){
    //preventing page from reloading when submit button gets clicked
    event.preventDefault();
    //setting variables to grab data from inputs
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let id = $('#employee-number').val();
    let title = $('#employee-title').val();
    let salary = $('#employee-salary').val();
    //formattedSalary converts the number with the commas 
    let formattedSalary = Intl.NumberFormat().format(salary);
    
    //table data being appended to the tbody
    $('tbody').append(`
    <tr>
    <td> ${firstName} </td>
    <td> ${lastName} </td>
    <td> ${id} </td>
    <td> ${title} </td>
    <td class="annual-salary">$<span id="salary-int">${formattedSalary}</span></td>
    <td><div class="delete-div"><button class="delete-btn">Delete</button></div></td>
    </tr>`);

    //clearing out the input fields
    $('#firstName').val('');
    $('#lastName').val('');
    $('#employee-number').val('');
    $('#employee-title').val('');
    $('#employee-salary').val('');

    //logic to handle the newly added entries
    let sum = 0;

    for(let int of $('span#salary-int')){
        sum += Number(int.innerHTML.replace(/,/g, ""));
    }

    let monthlyCost = sum / 12;

    if(monthlyCost > 20000){
        $('.total').css('background-color', 'red');
    }else{
        $('.total').css('background-color', 'white');
    }

    $('#total-number').text(Intl.NumberFormat().format(monthlyCost));
    //css being applied to every oher rows
    $("tr:even").css("background-color", "#eeeeee");
}

function deleteEntry(){
    //selecting what got clicked and removing the whole row
    $(this).parent().parent().parent().remove();

    //had to add the same logic so that monthly cost becomes updated
    //couldnt figure a better way to do it but ill take the win
    let sum = 0;

    for(let int of $('span#salary-int')){
        sum += Number(int.innerHTML.replace(/,/g, ""));
    }

    let monthlyCost = sum / 12;

    if(monthlyCost > 20000){
        $('.total').css('background-color', 'red');
    }else{
        $('.total').css('background-color', 'white');
    }

    $('#total-number').text(Intl.NumberFormat().format(monthlyCost));
    $("tr:even").css("background-color", "#eeeeee");
}