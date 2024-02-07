class DrinkMachine{
    serveDrink(size){
        if (size === 'large') {
            console.log('you will get a complementary cookie');
        }else{
            console.log('you will get a complementary candy');
        }

    }
}

module.exports = DrinkMachine;