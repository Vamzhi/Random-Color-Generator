let Container = document.querySelector('.Container');
let Text = document.querySelector('.Hex');
let button = document.querySelector('a');
let DisplayHex = document.querySelector('p');

const ValidCharacter = "0123456789ABCDEF";
const HexDecimalLength = 6;

function RandomIntFromInternal(Min, Max) {
    return Math.floor(Math.random() * (Max - Min + 1) + Min);
}

function GetNextRandomColor() {
    let color = "#";
    for (let i = 0; i < 6; i++) {
        let GetRandomChar = ValidCharacter.charAt(RandomIntFromInternal(0, 15));
        color += GetRandomChar;
    };

    Text.innerHTML = color;
    Container.style.backgroundColor = color;

}

GetNextRandomColor();

button.addEventListener("click", function () {
    GetNextRandomColor();
}, false);
