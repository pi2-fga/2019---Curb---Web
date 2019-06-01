import React        from "react";
import PropTypes    from 'prop-types';
import './style.less';
import {
    Form,
    Input,
    Button,
}                       from "antd";
import StringMask       from 'string-mask'

class AdministratorForm extends React.Component {
    _componentName = "administrator-form";

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

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
          callback('Two passwords that you enter is inconsistent!');
        } else {
          callback();
        }
      };
    
      validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
          form.validateFields(['confirm'], { force: true });
        }
        callback();
      };
    
     
    
    // -------------------------------------------------------------------------//
    // Requests
    // -------------------------------------------------------------------------//


    // -------------------------------------------------------------------------//
    // Event Handlers
    // -------------------------------------------------------------------------//


    // -------------------------------------------------------------------------//
    // Other functions
    // -------------------------------------------------------------------------//


    // -------------------------------------------------------------------------//
    // Rendering
    // -------------------------------------------------------------------------//

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <div className   = {this._componentName}>
                <div>
                <div className   = { this._componentName }>
                <div className   = { this._componentName + '-title' }>
                    Cadastar Administrador
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
                                    <Input/>
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

                        <Form.Item label="Senha" hasFeedback>
                            {getFieldDecorator('password', {
                                rules: [
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                                {
                                    validator: this.validateToNextPassword,
                                },
                                ],
                            })(<Input.Password />)}
                        </Form.Item>
                        <Form.Item label="Confirmar Senha" hasFeedback>
                            {getFieldDecorator('confirm', {
                                rules: [
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                {
                                    validator: this.compareToFirstPassword,
                                },
                                ],
                            })(<Input.Password onBlur={this.handleConfirmBlur} />)}
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
                </div>
            </div>
        );
    }
}


// Component props and default prop values
AdministratorForm.propTypes = {
    text         : PropTypes.string

};

AdministratorForm.defaultProps = {
    text         : "É um formulario de cadastro de usuário administrador!"
};

const WrappedAdministratorForm = Form.create()(AdministratorForm)

 export default WrappedAdministratorForm 