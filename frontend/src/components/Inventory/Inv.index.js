import react from "react";
import useHomeFetch from "../../hooks/useHomeFetch";

import { Wrapper, Content,  Text_row,  Row} from './Inv.style';
import SpinnerI from "../loader/Loader.index";
import NotFound from "../notfound";

const Inventory = (background) => {
    const {state, loading, error} = useHomeFetch();

    if (loading) {
        return (<SpinnerI />)
    }
    
    if (error) {
        return (<NotFound />)
    }
    
    return (
        <Wrapper>
            <Content>
                <Row>
                    <Text_row id='font-big'>Book name</Text_row>
                    <Text_row id='font-big'>Book id</Text_row>
                    <Text_row id='font-big'>Quantity</Text_row>
                </Row>
                <hr></hr>
                {state.map((movie) => (
                    <>
                    <Row>
                        <Text_row>{movie.item_name}</Text_row>
                        <Text_row>{movie.item_id}</Text_row>
                        <Text_row>{movie.quantity}</Text_row>
                    </Row>
                    <hr></hr>
                    </>
                ))}   
            </Content>
        </Wrapper>
        
    )
}

export default Inventory;