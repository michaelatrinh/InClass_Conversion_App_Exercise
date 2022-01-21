//doing comps for the backend

const cadTohkd = (hkd) => {
    return hkd * 6.23
}


const hkdTocad = (cad) => {
    return cad / 0.16
}


//export default add wont work
module.exports = cadTohkd, hkdTocad
