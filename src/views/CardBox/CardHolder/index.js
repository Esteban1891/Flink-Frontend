import Card from './Card';
import './style.scss';

function CardHolder({data, setModal, setCompany}) {
    
    return (
        <div className="class-holder">
           {
                data.map(data => 
                    (
                    <Card
                        key={data.id}
                        data={data}
                        setModal={setModal}
                        setCompany={setCompany}
                    />
                    )
                )
            }
        </div>
    );
}

export default CardHolder;