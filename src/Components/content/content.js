
import Article from "../article/Article";

const Content = ({articles})=>{
    return(
        <section className="pt-4">
            <div className="container px-lg-5">
                <div className="row gx-lg-5">
                    {articles?.map((article)=> //klaustukas sutrumpintai vietoj if,
                        // kad vykdys, tik kai yra duomenu.Cia nebutinas
                        <Article
                            icon={article.icon}
                            title={article.title}
                            description={article.description}
                        />
                    )}
                </div>
            </div>
        </section>
    )

}
export default Content