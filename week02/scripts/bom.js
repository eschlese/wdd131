const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", function () {
    if (input.value.trim() !== "") {

        const newLi = document.createElement('li');
        const delButton = document.createElement('button');
        newLi.textContent = input.value;
        delButton.textContent = '❌';
        delButton.ariaLabel = input.value;
        delButton.addEventListener("click", function() {
            list.removeChild(li);
            input.focus();
        })

        newLi.append(delButton);
        list.append(newLi);

        input.value = "";
    }

    input.focus();
})