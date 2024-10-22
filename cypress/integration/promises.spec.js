it('Teste', () => { })

const getSomething = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(12)
        }, 1000)
    })
}

const system = () => {
    console.log('init')
    const prom = getSomething().then(some => {
        console.log(`Something is ${some}`)
        console.log("end")
    })
}

system()

// const getSomething = () => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(12)
//             }, 1000)
//         })
//     }
    
//     const system = async () => {
//         console.log('init')

//         const some = await getSomething()
//         console.log(`Something is ${some}`)
//         console.log("end")
//     }    
// system()