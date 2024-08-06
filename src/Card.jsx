import Profile from "./assets/image.jpg"
function Card(){
     return(
        <div className="card">
            <img className ="image"src={Profile} alt="Festus dp"></img>
            <h2 className="title">Festus Bigirimana</h2>
            <p className="Description">I'm software engineering student and businessman</p>

        </div>
        
     );

}

export default Card