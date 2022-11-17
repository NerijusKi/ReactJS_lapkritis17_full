
import articles from "../../data/Articles";
import {useState} from "react";
import Search from "../search/Search";
import Content from "../content/content";


const Main = ()=>{
    const [searchTerm, setSearchTerm]= useState("")
    const handleInputChange = (event)=>{
        setSearchTerm(event.target.value)
    }

    const filteredArticles =articles.filter((article)=>{
        return article.title.includes(searchTerm)
    })
    console.log(filteredArticles)

    return(
        <div className="container px-lg-5">
            <form className="g-flex">
                <Search name="search" onSearch={handleInputChange}/>
            </form>
            <Content articles={filteredArticles}/>
        </div>

    )
}

export default Main
