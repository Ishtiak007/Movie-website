let leftBtn = document.getElementsByClassName('bi-chevron-left')[0];
let rightBtn = document.getElementsByClassName('bi-chevron-right')[0];
let cards = document.getElementsByClassName('cards')[0];
let search = document.getElementsByClassName('search')[0];
let searchInput = document.getElementById('search-input');

leftBtn.addEventListener('click',() =>  {
    cards.scrollLeft -= 140;
});
rightBtn.addEventListener('click',() => {
    cards.scrollLeft += 140;
});
let jsonUrl ="movie.json";

fetch(jsonUrl).then(Response => Response.json())
.then((data) => {
    data.forEach((elem,i) => {
        let {name,imdb,date,sposter,bposter,genre,url} = elem;
        let card = document.createElement('a');
        card.classList.add('card');
        card.href = url;
        card.innerHTML = `<img src="${sposter}" class="poster" alt="${name}">
        <div class="rest-card">
            <img src="${bposter}" alt="">
            <div class="cont">
               <h4>"${name}"</h4> 
               <div class="sub">
                <p>${genre},${date}</p>
                <h3><span>IMDB</span><i class="bi bi-star-fill"></i>${imdb}</h3>
               </div>
            </div>
        </div>`
        cards.appendChild(card);
    });


    document.getElementById('title').innerText=data[0].name;
    document.getElementById('gen').innerText=data[0].genre;
    document.getElementById('date').innerText=data[0].date;
    document.getElementById('rate').innerHTML=`<span>IMDB</span><i class="bi bi-star-fill"></i>${data[0].imdb}`;


    data.forEach(eleme => {
        let {name,imdb,date,sposter,genre,url} = eleme;
        let card = document.createElement('a');
        card.classList.add('card');
        card.href = url;
        card.innerHTML=`
        <a href="#" class="card">
                <img src="${sposter}" alt="">
                <div class="cont">
                <h3>${name}</h3>
                <p>${genre}, ${date}, <span>IMDB</span><i class="bi bi-star-fill"></i>${imdb}</p>
                </div>
                </a>`;
                search.appendChild(card);
    });
    searchInput.addEventListener('keyup', ()=> {

        let filter = searchInput.value.toUpperCase();

        let a = search.getElementsByTagName('a');

        
for(let i=0; i < a.length; i++){
    let b = a[i].getElementsByClassName('cont')[0];
    let textValue = b.textContent || b.innerText;
    if(textValue.toUpperCase().indexOf(filter) > -1){
     a[i].style.display = "flex";
        search.style.visibility = "visible";
        search.style.opacity = 1;
    }else{
         a[i].style.display = "none";
    }
            
        }
    });
    let series=document.getElementById('series');
    let movies=document.getElementById('movies');
    series.addEventListener('click',()=>{
        cards.innerHTML =" ";

        let seriesArray = data.filter(element =>{
            return element.type ==='series';
        });
        seriesArray.forEach((elem,i) => {
            let {name,imdb,date,sposter,bposter,genre,url} = elem;
            let card = document.createElement('a');
            card.classList.add('card');
            card.href = url;
            card.innerHTML = `<img src="${sposter}" class="poster" alt="${name}">
            <div class="rest-card">
                <img src="${bposter}" alt="">
                <div class="cont">
                   <h4>"${name}"</h4> 
                   <div class="sub">
                    <p>${genre},${date}</p>
                    <h3><span>IMDB</span><i class="bi bi-star-fill"></i>${imdb}</h3>
                   </div>
                </div>
            </div>`
            cards.appendChild(card);
        });
        
    });


    movies.addEventListener('click',()=>{
        cards.innerHTML =" ";

        let moviesArray = data.filter(element =>{
            return element.type ==='movie';
        });
        moviesArray.forEach((elem,i) => {
            let {name,imdb,date,sposter,bposter,genre,url} = elem;
            let card = document.createElement('a');
            card.classList.add('card');
            card.href = url;
            card.innerHTML = `<img src="${sposter}" class="poster" alt="${name}">
            <div class="rest-card">
                <img src="${bposter}" alt="">
                <div class="cont">
                   <h4>"${name}"</h4> 
                   <div class="sub">
                    <p>${genre},${date}</p>
                    <h3><span>IMDB</span><i class="bi bi-star-fill"></i>${imdb}</h3>
                   </div>
                </div>
            </div>`
            cards.appendChild(card);
        });
        
    });
        
});

