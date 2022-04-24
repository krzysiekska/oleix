import React from 'react';
import * as yup from "yup";
import {Formik} from "formik";
import {Button, Col, Form, InputGroup, Row} from "react-bootstrap";

const schema = yup.object().shape({
    title: yup.string().required(),
    price: yup.string().required(),
    description: yup.string().required(),
    seller: yup.string().required(),
    sellerPhone: yup.string().required(),
    canNegotiate: yup.bool(),
});
const initialValues={
    title: 'Mark',
        price: 'Otto',
        description: '',
        seller: '',
        sellerPhone: '',
        canNegotiate: false,
};

const NewAdvert = () => {
    return (
        <div>
            <Formik
                validationSchema={schema}
                onSubmit={console.log}
                initialValues={initialValues}
            >
                {({
                      handleSubmit,
                      handleChange,
                      handleBlur,
                      values,
                      touched,
                      isValid,
                      errors,
                  }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationFormik01">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="title"
                                    value={values.title}
                                    onChange={handleChange}
                                    isValid={touched.title && !errors.title}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormik02">
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="price"
                                    value={values.price}
                                    onChange={handleChange}
                                    isValid={touched.price && !errors.price}
                                />

                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationFormikdescription">
                                <Form.Label>Description</Form.Label>


                                    <Form.Control
                                        as={"textarea"}
                                        type="text"
                                        placeholder="description"
                                        aria-describedby="inputGroupPrepend"
                                        name="description"
                                        value={values.description}
                                        onChange={handleChange}
                                        isInvalid={!!errors.description}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.description}
                                    </Form.Control.Feedback>

                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationFormik03">
                                <Form.Label>Seller</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="seller"
                                    name="seller"
                                    value={values.seller}
                                    onChange={handleChange}
                                    isInvalid={!!errors.seller}
                                />

                                <Form.Control.Feedback type="invalid">
                                    {errors.seller}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="3" controlId="validationFormik05">
                                <Form.Label>Seller Phone</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="sellerPhone"
                                    name="sellerPhone"
                                    value={values.sellerPhone}
                                    onChange={handleChange}
                                    isInvalid={!!errors.sellerPhone}
                                />

                                <Form.Control.Feedback type="invalid">
                                    {errors.sellerPhone}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Check
                                required
                                name="canNegotiate"
                                label="Czy negocjujemy"
                                onChange={handleChange}
                                isInvalid={!!errors.canNegotiate}
                                feedback={errors.canNegotiate}
                                feedbackType="invalid"
                                id="validationFormik0"
                            />
                        </Form.Group>
                        <Button type="submit">Submit form</Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default NewAdvert;