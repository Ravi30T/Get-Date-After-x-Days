const addDays = require('date-fns/addDays')

const getDaysAfter = (days) => {
    
    const dateString = addDays(new Date(2020, 07, 22), days)    

    return `${dateString.getDate()}-${dateString.getMonth() + 1}-${dateString.getFullYear()}`;

}


module.exports = getDaysAfter;