export const sizes = [
    {
        title: 'Pequeno (300ml)',
        id: 'small',
        price: 10,
        time: 5
    },
    {
        title: 'Médio (500ml)',
        id: 'medium',
        price: 13,
        time: 7
    },
    {
        title: 'Grande (700ml)',
        id: 'large',
        price: 15,
        time: 10
    },
]

export const flavors = [
    {
        title: 'Morango',
        id: 'strawberry',
        additionaltime: 0
    },
    {
        title: 'Banana',
        id: 'banana',
        additionaltime: 0
    },
    {
        title: 'Kiwi',
        id: 'kiwi',
        additionaltime: 5
    },
]

export const additionals = [
    {
        title: 'Granola',
        id: 'granola',
        price: 0,
        additionaltime: 0
    },
    {
        title: 'Paçoca',
        id: 'peanutcandy',
        price: 3,
        additionaltime: 3
    },
    {
        title: 'Leite Ninho',
        id: 'milk',
        price: 3,
        additionaltime: 0
    },
]

export const urls = {
    neworder: '/',
    myorder: '/myorder'
}

export function convertNumber(number) {
    var number = number.toFixed(2).split(".");
    number[0] = "R$ " + number[0].split(/(?=(?:...)*$)/).join(".");
    return number.join(",");
}

export function convertTime(time) {
    return time + ' minutos';
  }