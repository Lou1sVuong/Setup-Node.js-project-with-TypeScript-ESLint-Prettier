type Handle = () => Promise<string>

const fullName = 'louis vuong'
const handle: Handle = () => Promise.resolve(fullName)
// console.log(fullName)
handle().then(console.log)
