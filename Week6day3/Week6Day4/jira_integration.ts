import axios  from "axios";
let endpoint = 'https://testleaf-team-qhgf7v1c.atlassian.net/rest/api/2/issue'
let userName = 'yuvarani.sekar@testleaf.com'
let password = 'ATATT3xFfGF0bDf5KbHDuQ3C560aisjxpwn6QhqBNs9GfsO5kwN4oNzh3Mr9mx1QSu6ZBEj4UFlRHk-v4JVHzamOs_FVk26JDk-xrkoWEU6gSpWchn2wnfyJXiHeC9ZJduuNpSjyEMlhufz_4-wGqPjlXdbCPo1UO5Nna7AKpvLucdEoe6N7QC4=CB7B92A5'
let keyId = 'PAW'

export async function createIssue(summary:string, description:string) {
    // this values comes dynamically from failed test
    const issueRequest =
    {
  "fields": {
    "project": {
      "key": keyId
    },
    "issuetype": {
      "name": "Bug"
    },
    "summary":summary,
    "description":description
  }
}
await axios.post(endpoint,issueRequest,
    {
        auth:{
            //internally browser/ API client encodes using base64
            username:userName,
            password :password
        },
        headers:{
            "Content-Type":"application/json"
        }
    }
)
}