
import "./moviecard.css";

export default function MovieCard({ele}) {
    return (
        <div className="MovieCard">
                <div>
                    <div>
                    <img width="300" src={ele.img} />
                    </div>
                    <div >
                    <h3>{ele.title}</h3>
                    <p>{ele.description}</p>
                    <h5>IMDb RATING: {ele.rating}</h5>
                   
                    </div>
                </div>
            </div>
    )
}
