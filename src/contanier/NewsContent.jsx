import React, { useState, useEffect } from 'react';
import './NewsContent.css';
import Cards from './Cards';
import RightData from './RightData';



const NewsContent= (props) => {
  const [contentIndex, setContentIndex] = useState(0);
  const [data, setData] = useState(null);
  const [loding, setLoding] = useState(true);
  const [lastTopic,setLastTopic] = useState("latest");
  
 
  
  useEffect(() => {
    fetchdata(props.topic);
  }, [props.topic]);

  async function fetchdata() {
      const dateForApi = getDateForUrl();
      // Gnews api 
      // const api= "2dce1503f7328d60eb9f7dd26eefc768";
      // const url=`https://gnews.io/api/v4/search?q=${props.topic}&lang=te&apikey=${api}`



      // news api 
      // const api = "847699a66d234eb8830556e9df1efe3d"; 
      const api = "f3d7c1ef126641069640058be5fbcecd";
      const url = `https://newsapi.org/v2/everything?q=${props.topic}&language=en&from=${dateForApi.getFullYear()}-${dateForApi.getMonth() + 1}-${dateForApi.getDate()}&sortBy=publishedAt&apiKey=${api}`;
      try {
        const response = await fetch(url);
        const parsedData = await response.json();
        console.log(props.topic);
        console.log(parsedData);
        if(parsedData.articles.length<=2){
          props.setSearchText("No result");
          props.setTopic(lastTopic);
        }else{
          props.setSearchText(props.topic.replace('+',' '));
          setData(parsedData);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoding(false);
        setLastTopic(props.topic);
      }
    }
    
  function getDateForUrl() {
    const currentDate = new Date();
    const monthBefore = new Date(currentDate);
    monthBefore.setMonth(currentDate.getMonth() - 1);
    return monthBefore;
  }


  return (
    <div className='newsContentContanier'>
      
      {loding ? (<div>Loding...</div>) : (
        <div id="mainContanier">
          <div id="leftContanier">
          {data && data.articles ? (  
            (() => {  
              const articles = [];  
              let count = 0;
                for (let index = 0; index < data.articles.length && count < 20; index++) {  
                  if (data.articles[index].title !== '[Removed]') {  
                    articles.push(  
                      <Cards key={index} value={index} text={data.articles[index].title} index={count + 1} setContentIndex={setContentIndex}  
                      />  
                    ); 
                   
                    count++; 
                  }  
                }  
                return articles;  
              })()  
            ) : (  
              <div>No articles available.</div>  
            )}  
          </div>
          <div id="rightContanier">
            {data && data.articles && data.articles.length > 0 ? (
              <RightData data={data} contentIndex={contentIndex}/>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default NewsContent;