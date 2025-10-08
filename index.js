const express = require('express')
const app = express()
require("dotenv").config();
const port = process.env.PORT || 300


const githubData={
  "login": "githubraj12",
  "id": 174687029,
  "node_id": "U_kgDOCmmDNQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/174687029?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/githubraj12",
  "html_url": "https://github.com/githubraj12",
  "followers_url": "https://api.github.com/users/githubraj12/followers",
  "following_url": "https://api.github.com/users/githubraj12/following{/other_user}",
  "gists_url": "https://api.github.com/users/githubraj12/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/githubraj12/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/githubraj12/subscriptions",
  "organizations_url": "https://api.github.com/users/githubraj12/orgs",
  "repos_url": "https://api.github.com/users/githubraj12/repos",
  "events_url": "https://api.github.com/users/githubraj12/events{/privacy}",
  "received_events_url": "https://api.github.com/users/githubraj12/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 6,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-07-04T06:51:35Z",
  "updated_at": "2025-10-08T13:39:32Z"
}



app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get("/raj",(req,res)=>{
    res.send("hey we are getting ready for a new project")
})

app.get("/home",(req,res)=>{
    res.send("this is my home page.")
})

app.get('/mydata',(req,res)=>{
    res.json(githubData)
})
app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})


// require("dotenv").config();
// console.log(process.env)