const FetchSimulation = (dataBase, time) =>{
    return new Promise((resolve,rejact) =>{
        setTimeout(()=>{
            resolve(dataBase);
            rejact(new Error("Algo salió mal."))
        }, time)
    });
}

export default FetchSimulation;