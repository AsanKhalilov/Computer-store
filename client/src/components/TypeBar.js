import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { Card } from 'react-bootstrap';

const TypeBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <Col>
            {device.types.map(type =>
                <Card
                    style={{cursor: 'pointer'}}
                    className="p-3"
                    active={type.id === device.selectedType.id}
                    onClick={() => device.setSelectedType(type)}
                    key={type.id}
                    border={type.id === device.selectedType.id ? 'warning' : 'light'}
                >
                    {type.name}
                </Card>
            )}
        </Col>
    );
});

export default TypeBar;
