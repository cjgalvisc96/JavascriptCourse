const urlCRUD = "https://reqres.in/api/users";

const getUser = async(userId) => {
    const resp = await fetch(`${urlCRUD}/${userId}`);
    const {data}= await resp.json();
    return data;
}

const createtUser = async(user) => {
    const resp = await fetch(`${urlCRUD}`,
    {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json"
        }
    });
    return await resp.json();
}

const updatetUser = async(userId, user) => {
    const resp = await fetch(`${urlCRUD}/${userId}`,
    {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json"
        }
    });
    return await resp.json();
}

const deletetUser = async(userId) => {
    const resp = await fetch(`${urlCRUD}/${userId}`,
    {
        method: "DELETE",
    });
    return (resp.ok)?"Deleted":"Error";
}
export {
    getUser,
    createtUser,
    updatetUser,
    deletetUser
}