import './home.css';
import Footer from '../footer/footer';

function Home() {
    return (
        <div className="home">
            
            <div className="main-info">
            <h1>Latvijas Baltijas Industriālais Parks</h1>
            <h1>Mūsdienīgs uzņēmējdarbības un ražošanas centrs</h1>
            <h1>Izcilas iespējas attīstīties un paplašināt darbību</h1>
                <button>
                    <p>Iesniegt pieprasījumu</p>
                </button>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;
