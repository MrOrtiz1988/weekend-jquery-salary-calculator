console.log('Hello JS!');

$(document).ready(onReady);

let sum = 0;

    for(let int of $('span#salary-int')){
        sum += Number(int.innerHTML.replace(/,/g, ""));
    }

    let monthlyCost = sum / 12;

    if(monthlyCost > 20000){
        $('.total').css('background-color', 'red')
    }else{
        $('.total').css('background-color', 'white')
    }

    $('#total-number').text(Intl.NumberFormat().format(monthlyCost));
    


function onReady(){
    console.log('Hello JQuery!');
    $('#submit').on('click', onSubmit);
    $('tbody').on('click', '.delete-btn', deleteEntry);
    

    let sum = 0;

    for(let int of $('span#salary-int')){
        sum += Number(int.innerHTML.replace(/,/g, ""));
    }

    let monthlyCost = sum / 12;

    if(monthlyCost > 20000){
        $('.total').css('background-color', 'red')
    }else{
        $('.total').css('background-color', 'white')
    }

    $('#total-number').text(Intl.NumberFormat().format(monthlyCost));
    $("tr:even").css("background-color", "#eeeeee");
}

function onSubmit(event){
    event.preventDefault();

    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let id = $('#employee-number').val();
    let title = $('#employee-title').val();
    let salary = $('#employee-salary').val();
    let formattedSalary = Intl.NumberFormat().format(salary);
    

    $('tbody').append(`
    <tr>
    <td> ${firstName} </td>
    <td> ${lastName} </td>
    <td> ${id} </td>
    <td> ${title} </td>
    <td class="annual-salary">$<span id="salary-int">${formattedSalary}</span></td>
    <td><div class="delete-div"><button class="delete-btn">Delete</button></div></td>
    </tr>`);

    $('#firstName').val('');
    $('#lastName').val('');
    $('#employee-number').val('');
    $('#employee-title').val('');
    $('#employee-salary').val('');

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

function deleteEntry(){
    $(this).parent().parent().parent().remove();

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
}