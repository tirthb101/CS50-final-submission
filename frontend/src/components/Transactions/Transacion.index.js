import react from "react";


import { Wrapper, Content,  Text,  Row} from './Transaction.style';
import SpinnerI from "../loader/Loader.index";
import NotFound from "../notfound";

import useInventtoryFetch from '../../hooks/useTransactionFetch';

const Transactions = () => {
    const {state, loading, error} = useInventtoryFetch();

    if (loading) {
        return (<SpinnerI />)
    }
    
    if (error) {
        return (<NotFound />)
    }
    
    return (
        <Wrapper>
            <Content>
                <Row props={'black'} >

                    <Text id='font-big'>Book name</Text>
                    <Text id='font-big'>Book id</Text>
                    <Text id='font-big'>Quantity</Text>
                    <Text id='font-big'>Transaction type</Text>
                    <Text id='font-big'>User id</Text>
                    <Text id='font-big'>Time Stamp</Text>
                </Row>
                <hr></hr>
                {state.map((movie) => (
                    <>
                    <Row>
                        <Text>{movie.item_name}</Text>
                        <Text>{movie.item_id}</Text>
                        <Text>{movie.quantity}</Text>
                        <Text>{movie.tran_type}</Text>
                        <Text>{movie.user_id}</Text>
                        <Text>{movie.Timestamp}</Text>
                    </Row>
                    <hr></hr>
                    </>
                ))}   
            </Content>
        </Wrapper>
        
    )
}

export default Transactions;