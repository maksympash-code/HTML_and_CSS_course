function update(){
    let money = +document.querySelector('.money').value
    let years = +document.querySelector('.years').value

    let result = money + money * 0.12 * years;
    document.querySelector('.result').textContent = result
}
update()

document.querySelector('.money').addEventListener('input', function(){
    update()
})

document.querySelector('.years').addEventListener('input', update);
