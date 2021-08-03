import './style.scss';
import { Bar } from 'react-chartjs-2';

function Card({ data, setModal, setCompany }) {

    function handleClick() {
        setModal(true);
        setCompany(data);
    }

    return (
        <div className="card">
            <div className="card__head">
                <p className="card__head__company">{data.name_company}</p>
                <p>{data.symbol}</p>
            </div>
                <p className="card__head__description">{data.description_company}</p>
            <div className="card__canvas">
                <Bar 
                    className="card__canvas"
                    data={{
                        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                        datasets: [{
                            label: '# of Votes',
                            data: data.market_values,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1
                        }]
                    }}
                />
            </div>
            
            <div>
                <button
                    className="card__button card__button-space"
                    onClick={() => handleClick() }
                >Editar</button>
                <button className="card__button">Borrar</button>
            </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.5.0/chart.js" integrity="sha512-XcsV/45eM/syxTudkE8AoKK1OfxTrlFpOltc9NmHXh3HF+0ZA917G9iG6Fm7B6AzP+UeEzV8pLwnbRNPxdUpfA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        </div>


    );
}

export default Card;