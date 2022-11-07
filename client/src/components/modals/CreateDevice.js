import React, { useContext, useState } from "react";
import { Modal, Button, Form, Dropdown, FormControl, Row, Col } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import {Context} from "../../index";

const CreateDevice = ({show,onHide}) => {
    const {device} = useContext(Context)
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    return (
        <Modal
        show={show}
        onHide={onHide}
        size="lg"
        centered
    >
    <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Добавить устройство
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Form>
            <Dropdown className="mt-2 mb-2">
                <DropdownToggle>Выберите тип</DropdownToggle>
                <DropdownMenu>
                    {device.types.map(type =>
                        <DropdownItem key={type.id}>{type.name}</DropdownItem>
                    )}
                </DropdownMenu>
            </Dropdown >
            <Dropdown className="mt-2 md-2">
                <DropdownToggle>Выберите бренд</DropdownToggle>
                <DropdownMenu>
                    {device.brands.map(brand =>
                        <DropdownItem key={brand.id}>{brand.name}</DropdownItem>
                    )}
                </DropdownMenu>
            </Dropdown>
            <FormControl
                className="mt-3"
                placeholder="Введите название устройства"
            />
            <FormControl
                className="mt-3"
                placeholder="Введите стоимость устройства"
                type="number"
            />
            <FormControl
                className="mt-3"
                type="file"
            />
            <hr/>
            <Button
                variant={"outline-dark"}
                onClick={addInfo}
            >
                Добавить характеристики
            </Button>
            {info.map(i =>
                <Row className="mt-2" key={i.number}>
                    <Col md={4}>
                        <FormControl
                            placeholder="Введите название характеристики"
                        />
                    </Col>
                    <Col md={4}>
                        <FormControl
                            placeholder="Введите значение характеристики"
                        />
                    </Col>
                    <Col md={4}>
                        <Button 
                            onClick={() => removeInfo(i.number)}
                            variant={"outline-danger"}
                        >
                            Удалить
                        </Button>
                    </Col>
                </Row>
            )}
        </Form>
    </Modal.Body>
    <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={onHide}>Добавить</Button>
    </Modal.Footer>
    </Modal>
    );
};

export default CreateDevice;