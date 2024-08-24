// function getData(getId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data =", getId)
//             reject ("code ma reject ka kana");
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 5000);
//     })
// }
// getData(1, () => {
//     getData(2, () => {
//         getData(3, () => {
//             getData(4)
//         })
//     });
// });
// const getPromise = () => {

//     return new Promise((resolve, reject) => {
//         console.log("i am a promise");
//         // resolve("success");
//         reject("reject shum");
//     });
// };
// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise is ful filld",res);
      
// });
// promise.catch((err) => {
//     console.log("rejected,", err);
    
// });
/*
function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout((res) => {
            console.log("data1");
            resolve("success");
        }, 4000
        );
        
    });
}
function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout((res) => {
            console.log("data2");
            resolve("success");
        }, 4000
        );
        
    });
}
console.log("fetching data1....");
let p1 = new asyncFunc1();
p1.then((res) => {
    console.log(res);
    console.log("fetching data2....");
    
    let p2 = new asyncFunc2();
    p2.then((res) => {
        console.log(res

        )
    })

});
function getData(getId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", getId)
            resolve("success");
        }, 3000);
    });
}

getData(1).then((res) => {
    console.log(res);
    getData(2).then((res) => {
        console.log(res);
        getData(3).then((res) => {
            console.log(res)
        })
    })

})*/

// function api() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200);
//         }, 2000);
//     })
// }
// async function getWeatherData() {
//     await api();
//     await api();
// }

function getData(getId, getNextData) {
 
    const number = Math.floor(Math.random() * 100);

    const promise = new Promise((res, rej) => {

        if (number < 50)
        {
            res({
                data: {
                    name: 'homse'
                }
            })
        }
        else
        {
            rej('No data found');
        }
    })

    return promise;
}


const callData = async () => {

    try
    {
        const response = await getData();
        console.log(response)

        console.log('welcome')
    }
    catch (err)
    {
        console.log(err)
        console.log('Error')
    }
}

// callData();

/*
const callBack = () => {
    console.log('welcome')

}
const error = () => {
    console.log('Error')
}


const newData = (callback, error) =>
{
    const number = Math.floor(Math.random() * 100);

    if (number < 50)
    {
        callback({
            data: {
                name: 'homse'
            }
        })
    }
    else
    {
        error('No data found');
    }
}
//Call back from Mansoor seb
const one = (callback) => {
    setTimeout(() => {
        console.log('one');
        callback();
        
    }, 5000);
}
const two = (callback) => {
    setTimeout(() => {
        console.log('two');
        callback();
        
    }, 4000);
}
const three = (callback) => {
    setTimeout(() => {
    console.log('three');
    }, );
}

one(
    () => {
        two(
            () => {
                three(() => {
                    console.log("Done")
                })
            }
        )
    }
);
*/
//using promises
const one = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("one");
            resolve();
        }, 5000);
    });
}

const two = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("two");
            resolve();
        }, 4000);
    });
}

const three = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("three");
            resolve();
        }, 2000);
    });
}
//>>the below code is for executing promises
// one().then(() => {
//     return two();
// }).then(() => {
//     return three();
// }).then(() => {
//     console.log("done");
// });

//>below is for async await
 async function run() {
    await one();
    await two();
    await three();
}
run();

