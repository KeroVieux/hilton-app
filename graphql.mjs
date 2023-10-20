import shell from 'shelljs'
import 'dotenv/config'
shell.exec(`npx openapi-to-graphql-cli --port=3001 ${process.env.OPENAPI_URL}`)
