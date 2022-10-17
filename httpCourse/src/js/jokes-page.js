import {getJoke} from "./http-provider";

const body = document.body;
let btnJoke, olList;

const createJoke = () => {
    const html = `
        <h1>Jokes</h1>
        <hr>
        <button class="btn btn-primary"> Other joke</button>
        <ol class="mt-2 list-group">
            <li class="list-group-item">...</li>
        </ol>
    `;

    const divJoke = document.createElement("div");
    divJoke.innerHTML = html;

    body.append(divJoke);
}

const events = () => {
    olList = document.querySelector("ol");
    btnJoke = document.querySelector("button");

    btnJoke.addEventListener("click", async()=>{
        btnJoke.disabled = true;
        drawJoke(await getJoke());
        btnJoke.disabled = false;
    })
}

const drawJoke= (joke) =>{
    const olItem = document.createElement("li");
    olItem.innerHTML = `<b>${joke.id}</b> ${joke.value}`;
    olItem.classList.add("list-group-item");
    olList.append(olItem);
}
export const init = () => {
    createJoke();
    events();
}