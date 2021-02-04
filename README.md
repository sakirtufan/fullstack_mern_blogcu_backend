This project is still being developed — PRs, Contributions and Issues are all welcome!

# Getting started
<hr/>

To get the Node server running locally:
* Clone this repo
* `npm install` to install all required dependencies
* Create MongoDb Cluster and Get Connection MongoDb URI
* Set environment variables in `.env`
  * Set `MONGO_URI = <YOUR_MONGO_URI>`
  * Set `JWT_SECRET_KEY = <YOUR_SECRET_KEY>`
  * Set `SMTP_EMAIL=<YOUR_GMAIL_EMAIL>`
  * Set `SMTP_PASS=<YOUR_GMAIL_PASSWORD>`
* `npm run start` to start the local server

# Code Overview <hr/>
## Dependencies