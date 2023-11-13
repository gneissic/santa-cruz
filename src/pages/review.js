import { json} from "react-router-dom"

export async function action({request}) {
    const data =  await request.formData()
    const formData = {
        feedback: data.get("feed"),
        username: data.get("user"),
             email: data.get("e-mail"),
    }
    const response = await fetch("https://santa-cruz-64b2d-default-rtdb.firebaseio.com/reviews.json", {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    
    if (!response.ok) {
     throw json()
     
    } 
  }
  
  
  