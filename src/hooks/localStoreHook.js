const getDataFromLocalStore = () => {
    let data = localStorage.getItem("donateData");
    if (data) {
        return JSON.parse(data);
    }
    return data = [];
}

const addDataToLocalStore = id => {
    const storedData = getDataFromLocalStore();
    const isDataExist = storedData.find(data => data === id);
    if (isDataExist) {
        localStorage.setItem("donateData", JSON.stringify([...storedData]));
        return "You have already in this one Donated!"
    } else {
        localStorage.setItem("donateData", JSON.stringify([...storedData, id]));
        return "Successfully Donated!"
    }
}

export { getDataFromLocalStore, addDataToLocalStore }