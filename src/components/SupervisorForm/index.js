import React            from "react";
import PropTypes        from 'prop-types';
import './style.less'
import {
    Form,
    Input,
    Button,
}                       from "antd";
import StringMask       from 'string-mask'


class SupervisorForm extends React.Component {
    _componentName = "supervisor-form";

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

    handleCPFChange = (e) => {
        let masked = this.applyCpfMask(e.target.value)
        let field = {}
        field[e.target.id] = masked
        
        setTimeout(() => {
            this.props.form.setFieldsValue(field)
        }, 50)
    }

    // -------------------------------------------------------------------------//
    // Other functions
    // -------------------------------------------------------------------------//

    applyCpfMask = (cpf) => {
        let cnpjMask = new StringMask('###.###.###-##')

        if(cpf){
            cpf = cpf.replace(/\D/g, '')
            if(cpf && cpf.length >= 12){
                cpf = cpf.slice(0, cpf.length >= 12 ? 11 : cpf.length)
            }

            return cnpjMask.apply(cpf)
        }
        return cpf
    }

    // -------------------------------------------------------------------------//
    // Rendering
    // -------------------------------------------------------------------------//

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <div className   = { this._componentName }>
                <div className   = { this._componentName + '-title' }>
                    Adicionar supervisor
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
                      label         = { 'Email' }
                    >
                    {
                        getFieldDecorator('email', {
                            rules: [
                                {
                                  type      : 'email',
                                  message   : 'O email informado é inválido!',
                                },
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
                      label         = { 'CPF' }
                    >
                    {
                        getFieldDecorator('cpf', {
                            rules: [
                                {
                                    required: true,
                                    message : 'Campo obrigatório!'
                                }
                            ],
                        })(
                            <Input
                                onChange = { this.handleCPFChange }
                            />
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
SupervisorForm.propTypes = {
    text         : PropTypes.string

};

SupervisorForm.defaultProps = {
    text         : "Sample component"
};

const WrappedSupervisorForm = Form.create()(SupervisorForm)

export default WrappedSupervisorForm