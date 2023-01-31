let user1 = {
    name: 'Kim', 
    age: 20,
    address: {
        city: 'Seoul',
        street: 'Dongdaemun'
    }
}

const showMsg = () => {
    const { city, street } = user1.address;
    alert(`${city}`)
}