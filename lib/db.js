const mysql = require('serverless-mysql')

const db = mysql({
  config: {
    host: '35.247.96.250',
    database: 'hawkins',
    user: 'root',
    password: 'eleven11'
  }
})

exports.query = async query => {
  try {
    const results = await db.query(query)
    await db.end()
    return results
  } catch (error) {
    return { error }
  }
}