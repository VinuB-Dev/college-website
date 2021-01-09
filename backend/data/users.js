import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'brave soldier',
    email: 'brave@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'knight',
    email: 'knight@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
