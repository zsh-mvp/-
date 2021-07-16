function flatten (arr,bol){
    if(bol===true){
        return arr.flat(1)
    }else{
        return arr.toString().split(',').map(item => {
            return Number(item);
        })
    }
}

const res = flatten([1, [2], [3, [[4]]],[5,6]]);
console.log(res);
const res1 = flatten([1, [2], [3, [[4]]],[5,6]], true);
console.log(res1);
