
function MovieList(title, description, watchedMovie, willMovie) {    
    <li>
        <p>{title}</p>
        <p>{description}</p>
        <div>
            <button onClick={watchedMovie}>봤는 영화 담기</button>
            <button onClick={willMovie}>볼 영화 담기</button>
        </div>
    </li>
}
d
export default MovieList;