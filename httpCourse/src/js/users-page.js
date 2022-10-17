const urlUsers = 'https://reqres.in/api/users?page=2';
const body  = document.body;
let tableBody;
let correlative = 0;

const createHTML = () => {
    const html = `
    <h1 class="mt-5"> users</h1>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">email</th>
                <th scope="col">Nombre</th>
                <th scope="col">Avatar</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.appendChild( div );

    tableBody = document.querySelector('tbody');
}

const createUserRow = ( user ) => {
    correlative++;
    const html = `
        <td scope="col"> ${correlative}</td>
        <td scope="col"> ${user.email} </td>
        <td scope="col"> ${user.first_name} ${user.last_name}</td>
        <td scope="col">
            <img class="img-thumbnail" src="${user.avatar}">
        </td>
    `;

    const tr = document.createElement('tr');
    tr.innerHTML = html;
    tableBody.appendChild(tr);
}

const getUsers = async() => {
    const resp = await fetch( urlUsers);
    const { data:users} = await resp.json(); 
    return users; 
}



export const init = async() => {
    createHTML();
    correlative = 0;
    (await getUsers()).forEach(createUserRow);
}

