
export async function loader({params}) {
    const id  = params.rideDetail
    const response = await fetch(
      `https://santa-cruz-64b2d-default-rtdb.firebaseio.com/ride-apparel/${id}.json`
    );
    if (!response.ok) {
      throw new Error("something went wrong")
    }
    const data = await response.json()
    const newData = {
        img:data.clothImg,
        price:data.price,
        id: data.id,
        title: data.title,
    }
    return newData
  }
  
  