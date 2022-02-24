import react from "react";


import { Wrapper, Content,  Text_row,  Row} from './Transaction.style';
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

                    <Text_row id='font-big'>Book name</Text_row>
                    <Text_row id='font-big'>Book id</Text_row>
                    <Text_row id='font-big'>Quantity</Text_row>
                    <Text_row id='font-big'>Transaction type</Text_row>
                    <Text_row id='font-big'>User id</Text_row>
                    <Text_row id='font-big'>Time Stamp</Text_row>
                </Row>
                <hr></hr>
                {state.map((movie) => (
                    <>
                    <Row>
                        <Text_row>{movie.item_name}</Text_row>
                        <Text_row>{movie.item_id}</Text_row>
                        <Text_row>{movie.quantity}</Text_row>
                        <Text_row>{movie.tran_type}</Text_row>
                        <Text_row>{movie.user_id}</Text_row>
                        <Text_row>{movie.Timestamp}</Text_row>
                    </Row>
                    <hr></hr>
                    </>
                ))}   
            </Content>
        </Wrapper>
        
    )
}

export default Transactions;