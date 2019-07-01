import React            from "react";
import PropTypes        from 'prop-types';
import './style.less'
import {
    Form,
    Input,
    Button,
}                       from "antd";


class CurbForm extends React.Component {
    _componentName = "curb-form";

    // -------------------------------------------------------------------------//
    // React lifecycle functions
    // -------------------------------------------------------------------------//

    constructor(props) {
        super(props);

        this.state = {
            innerWidth: 0,
        };

        window.addEventListener("resize", this.updateInnerWidth);
    }

    componentDidMount() {
        this.updateInnerWidth();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateInnerWidth);
    }

    // -------------------------------------------------------------------------//
    // Requests
    // -------------------------------------------------------------------------//
    
    // -------------------------------------------------------------------------//
    // Event Handlers
    // -------------------------------------------------------------------------//

    updateInnerWidth = () => {
        this.setState( {innerWidth: window.innerWidth} )
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values)
            }
        });
    }

    // -------------------------------------------------------------------------//
    // Other functions
    // -------------------------------------------------------------------------//


    // -------------------------------------------------------------------------//
    // Rendering
    // -------------------------------------------------------------------------//

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <div className   = { this._componentName }>
                <div className   = { this._componentName + '-title' }>
                    Adicionar Curb
                </div>                
                <Form
                    onSubmit    = { this.handleSubmit }
                    layout      = { 'vertical'}
                >
                    <Form.Item
                      label         = { 'Nome' }
                    >
                    {
                        getFieldDecorator('name', {
                            rules: [
                                {
                                    required: true,
                                    message : 'Campo obrigatório!'
                                }
                            ],
                        })(
                            <Input />
                        )
                    }
                    </Form.Item>
                    <Form.Item
                      label         = { 'Identificador' }
                    >
                    {
                        getFieldDecorator('id', {
                            rules: [
                                {
                                    required: true,
                                    message : 'Campo obrigatório!'
                                }
                            ],
                        })(
                            <Input />
                        )
                    }
                    </Form.Item>
                    
                    <div>
                        <Button
                            className   = { this._componentName + '-button' }
                            htmlType    = "submit"
                        > 
                            CADASTRAR
                        </Button>
                    </div>
                </Form>
            </div>
        );
    }
}

// Component props and default prop values
CurbForm.propTypes = {
    text         : PropTypes.string

};

CurbForm.defaultProps = {
    text         : "Sample component"
};

const WrappedCurbForm = Form.create()(CurbForm)

export default WrappedCurbForm