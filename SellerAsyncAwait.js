// *Write all code in async await..
//step 1:- get required elements 1.button 2.ul
//step 2:- add eventListener to button
        //    1. create li 
        //    2. create delete button
        //    3. add addeventListener to delete button
        //    4. appendChild

//step 3:- detele button functionality
// step 4:- onLoad code.. 
//-------------------------------------------------------------------------------------------------------------------------//


window.onload = async function() {
    try {
      const response = await axios.get("https://crudcrud.com/api/5060ca5ea2d341049d86105ad3c1082f/sellerProductData");
      const data = response.data;
      const ul1 = document.getElementById("mWear");
      const ul2 = document.getElementById("electron");
      const ul3 = document.getElementById("fashion");
      const ul4 = document.getElementById("toys");
  
      data.forEach((item) => {
        const li = document.createElement("Li");
        li.textContent = `Price : ${item.price} Product_Name : ${item.productName} selected_Category : ${item.select}`;
  
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete";
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
          detelebutton(item._id, li);
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
    } catch (err) {
      console.log(err);
    }
  };
  
  //delete button functionality
  async function detelebutton(id, li) {
    try {
      await axios.delete(`https://crudcrud.com/api/5060ca5ea2d341049d86105ad3c1082f/sellerProductData/${id}`);
      li.remove();
    } catch (err) {
      console.log(err);
    }
  }
  
  //Main code
  const mainButton = document.getElementById("btn");
  const ul1 = document.getElementById("mWear");
  const ul2 = document.getElementById("electron");
  const ul3 = document.getElementById("fashion");
  const ul4 = document.getElementById("toys");
  
  mainButton.addEventListener("click", async (event) => {
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
    try {
      const response = await axios.post("https://crudcrud.com/api/5060ca5ea2d341049d86105ad3c1082f/sellerProductData", obj);
  
      //show data on screen:-
      const li = document.createElement("Li");
      li.textContent = `Price : ${response.data.price}  Product_Name : ${response.data.productName}  selected_Category : ${response.data.select}`;
  
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.className = "delete";
      deleteBtn.addEventListener("click", () => {
        detelebutton(response.data._id, li);
      });
      li.appendChild(deleteBtn);
  
      if (obj.select === "Mens Wear") {
        ul1.append(li);
      } else if (obj.select === "Electronics") {
        ul2.append(li);
      } else if (obj.select === "Fashion") {
        ul3.append(li);
      } else if (obj.select === "Toys") {
        ul4.append(li);
      }
    } catch (err) {
      console.log(err);
    }
  });
  




