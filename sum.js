
module.exports.sum = (a, b) => {
  let env = process.env.TEST;
  console.log(env);
  return a + b;
} 