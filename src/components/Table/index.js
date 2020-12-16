import Trow from "../Trow";
import { Wrapper } from "./styles";

function Table( { content, headers, attributes, show = false, showRoute = '', edit = false, editRoute = '',  destroy = false, destroyUrl = '' }) {

    return (
        <Wrapper className={"table"}>
            <thead>
                {headers.map( (header) => {
                    return <th>{header}</th>
                })}
                {show ? <th></th> : null}
                {edit ? <th></th> : null}
                {destroy ? <th></th> : null}
            </thead>
            <tbody>
                {content.map( (row) => {
                    return <Trow data={row} attributes={attributes} edit={edit} editRoute={editRoute} show={show} showRoute={showRoute} destroy={destroy} destroyUrl={destroyUrl}/>
                })}
            </tbody>
        </Wrapper>
    );
}

export default Table;