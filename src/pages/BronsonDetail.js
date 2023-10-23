
export async function loader({params}) {
    const id  = params.bronsonDetail
    const response = await fetch(
      `https://santa-cruz-64b2d-default-rtdb.firebaseio.com/bronson/${id}.json`
    );
    if (!response.ok) {
      throw new Error("something went wrong")
    }
    const data = await response.json()
    return data
  }
  
  