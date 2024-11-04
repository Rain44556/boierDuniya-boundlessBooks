

//local-storage
const getStoredAlreadyReadBooks = () => {
    
    //already read books list
    const storedAlreadyReadListStr = localStorage.getItem("already-read-list");
    if (storedAlreadyReadListStr) {
        const storedAlreadyReadList = JSON.parse(storedAlreadyReadListStr);
        return storedAlreadyReadList;
    } else {
        return [];
    }
}

const addToStoredAlreadyRead = (id) => {
    const storedAlreadyReadList = getStoredAlreadyReadBooks();
    if (storedAlreadyReadList.includes(id)) {
        //already exists, do not add
        //add alert
        console.log(id, "already exist in the read list")
    } else {
        storedAlreadyReadList.push(id);
        const storedAlreadyReadListStr = JSON.stringify(storedAlreadyReadList);
        localStorage.setItem('already-read-list', storedAlreadyReadListStr);
    }
}

export {addToStoredAlreadyRead}