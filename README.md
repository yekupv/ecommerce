
# Full-Stack ecommerce 🛒


## 🚀[Deployment](https://ecommerce-makhambet.netlify.app/)

Images are not loading because of how the server stores them, I'll fix it soon.  
Sometimes the site can take a very long time to load, again because of free hosting, try to come back later.


## Stack - PERN 🧰
- #### React(React-router-dom, React-bootstrap, axios, mobx, 

     #### jwt-decode)
- #### Node.js(express.js, bcrypt, jsonwebtoken, sequilize,    uuid) 
- #### Postgresql






## Features ⚙️
- Complex, Normalized Database ([diagram](https://clck.ru/T3MHn))
- Authorization/Registration(encrypted password in db)
- roles for admin and user
- JWT authentication 
- Fetching data from my API
- Filtering devices by type and/or brand
- Pagination
- Admin panel from where you can add product types, brands and products themself 
- separate page for each product 
- etc.

## Run Locally 🏃‍🏃🏿‍♂️

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies for each `./client` and `./server` directories

```bash
  npm install
```

Start the server in `./client`

```bash
  npm start
```

Start the server in `./server`

```bash
  npm run dev
```
### Environment Variables

Include this variables to your `.env ` file in client and server directories respectfully 

`API_KEY REACT_APP_API_URL = 'https://ecommerce-api-c93u.onrender.com'` for client

`DB_HOST=postgresql://postgres:WUqB0TS4TeTHZqndNNQJ@containers-us-west-177.railway.app:5445/railway`

`SECRET_KEY=random_secret_key123` for server

#### P.S don't spam my servers pls 😘




