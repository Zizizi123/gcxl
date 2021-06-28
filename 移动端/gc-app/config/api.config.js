const isPro = Object.is(process.env.NODE_ENV, 'production')
 
console.log(isPro);
 
module.exports = {
  baseUrl: isPro ? 'http://120.24.64.7' : 'api/'
}