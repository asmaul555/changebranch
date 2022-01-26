const img=document.querySelector('.card-img')
const card_title=document.querySelector('.card-title')
const card_subtitle=document.querySelector('.card-subtitle')
const show_card_item=document.getElementById('show-card-item')


async function getData(){
    let result=await fetch('https://picsum.photos/v2/list?page=2&limit=100')
    let results=await result.json()

    results.forEach((item)=>{
        show_card_item.innerHTML+=`
        <div class="card col-12 col-sm-6 col-md-4 col-xl-3 mt-2">
        <img class="card-img" style="height:172px" src="${item.download_url}" alt="">
        <div class="card-body">
            <h4 class="card-title">${item.author}</h4>
            <h6 class="card-subtitle">card subtitle</h6>
          This is card text
          <button class="btn btn-sm btn-danger">Click</button>
        </div>
    </div>`;
    })
}


getData()