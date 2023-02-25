import './NewsBody.css'

function NewsBody({articles}) {
    return ( 
        <>
        <h1 className="news_body_title">Last News</h1>
        <div className='newsBody_wrapper'>
           {
            articles.map((article => {
                return (
                    <h4 key={article.id}><a href={article.webUrl}target="_blank" rel='noreferrer'>{article.webTitle}</a></h4>
                )
            }))
           }
        </div>
        </>
     );
}

export default NewsBody;