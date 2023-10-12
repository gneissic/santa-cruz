export async function loader() {
    const response = await fetch(
      "https://santa-cruz-64b2d-default-rtdb.firebaseio.com/ride-apparel.json"
    );
    if (!response.ok) {
      throw new Error("something went wrong")
    }
    const data = await response.json()
    const responseData = [];
    for (const key in data) {
      responseData.push({
        
        clothImg: data[key].clothImg,
        id: data[key].id,
        title:data[key].title,
        price:data[key].price
      })
    }
    return responseData;
  }
  
  