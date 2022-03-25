// search area get 

const searchBtn = document.getElementById('search_btn');
searchBtn.addEventListener("click",function(){
    const searchField = document.getElementById('search_field');
    const searchText = searchField.value;

    // clear the search text 
    searchField.value = '';

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

    fetch(url)
    .then(res => res.json())
    .then(data => displayMealResult(data.meals))

    // display the search result 

    const displayMealResult = meals =>{

      const search_result = document.getElementById('search_result')
      // clear the previous result 
      search_result.innerHTML = '';

    // creat dinamic food using Loop 
        meals.forEach(meal => {
            
            const div = document.createElement('div');
            div.classList.add("col");
            div.innerHTML = `<div id="search_result" class="col">
            <div class="card">
              <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0,130)}</p>
              </div>
            </div>
          </div>`;
          search_result.appendChild(div);
       }       
        )
    }
} );




