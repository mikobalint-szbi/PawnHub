
export function getNum(str){
    return Number(str.match(/[\d.]+/g)?.join('') || '')
}