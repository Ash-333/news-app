import React,{useEffect,useState} from 'react';

function App() {

  let [value,setValue]=useState("");
  function openLink(link){
    window.open({link},"_self")
  }

  async function getApi(){
    let response=await fetch("https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json");
    let result=await response.json();
    console.log(result.articles);
    const img=result.articles.map((atr)=>{
      return (<div className='mainDiv'>
   <div class="max-w-sm rounded overflow-hidden shadow-lg ">
  <img class="w-full" src={atr.urlToImage} />
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{atr.title}</div>
    <p class="text-gray-700 text-base">
      {atr.description}
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><a href={atr.url}>Read more</a></button>
  </div>
</div>
    </div>)
    })
    setValue(img);
  }
  getApi();
  return <h1>Hello world!{value} </h1>
}

export default App;
