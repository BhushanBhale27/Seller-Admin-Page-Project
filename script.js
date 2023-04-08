window.onload = function() {
  axios.get("https://crudcrud.com/api/6d4d441310014d818d25f243997b86da/sellerDataAdmin")
    .then(function(response) {
      const data = response.data;
      const ul1 = document.getElementById("mWear");
      const ul2 = document.getElementById("electron");
      const ul3 = document.getElementById("fashion");
      const ul4 = document.getElementById("toys");

      data.forEach(function(item) {
        const li = document.createElement("li");
        li.textContent = `Price: ${item.price} Product Name: ${item.productName} Selected Category: ${item.select}`;
        
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete";
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
          deleteAppointment(item._id, li);
        });
        li.appendChild(deleteBtn);

        if (item.select === "Mens Wear") {
          ul1.appendChild(li);
        } else if (item.select === "Electronics") {
          ul2.appendChild(li);
        } else if (item.select === "Fashion") {
          ul3.appendChild(li);
        } else if (item.select === "Toys") {
          ul4.appendChild(li);
        }
      });
    })
    .catch(function(error) {
      console.log(error);
    });
};


// Function to delete an appointment
function deleteAppointment(id, li) {
  axios.delete(`https://crudcrud.com/api/6d4d441310014d818d25f243997b86da/sellerDataAdmin/${id}`)
    .then(() => {
      // Remove the list item from the DOM
      li.remove();
    })
    .catch((err) => {
      console.log(err);
    });
}


const button = document.getElementById("btn");
const ul1 = document.getElementById("mWear");
const ul2 = document.getElementById("electron");
const ul3 = document.getElementById("fashion");
const ul4 = document.getElementById("toys");


button.addEventListener("click", function(event) {
  event.preventDefault();
  const price = document.getElementById("sPrise").value;
  const productName = document.getElementById("productName").value;
  const select = document.getElementById("select").value;
  

  const obj = {
    price,
    productName,
    select,
  };


  //save on backend(crud) using Axios:-
  
   axios.post("https://crudcrud.com/api/6d4d441310014d818d25f243997b86da/sellerDataAdmin" , obj)
   .then((response)=>{
    // show data on screen:-
    const li = document.createElement("li");
    li.textContent = `Price: ${response.data.price} Product Name: ${response.data.productName} Selected Category: ${response.data.select}`;
  
     // Create a delete button and add an event listener to it
     const deleteBtn = document.createElement("button");
     deleteBtn.className = "delete";
     deleteBtn.textContent = "Delete";
     deleteBtn.addEventListener("click", () => {
       deleteAppointment(response.data._id, li);
     });
     li.appendChild(deleteBtn);
    
    if(obj.select=== "Mens Wear")
    ul1.appendChild(li);
    else if(obj.select=== "Electronics")
    ul2.appendChild(li);
    else if(obj.select=== "Fashion")
    ul3.appendChild(li);
    else if(obj.select=== "Toys")
    ul4.appendChild(li);

    console.log(response);
  })
  .catch((err)=>{
    console.log(err);
})
  
  
});