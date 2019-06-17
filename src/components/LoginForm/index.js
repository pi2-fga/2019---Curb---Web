import React        from "react";
import PropTypes    from 'prop-types';
import './style.less';
import {
    Form,
    Icon, 
    Input, 
    Button, 
    Checkbox
}                       from "antd";

class LoginForm extends React.Component {
    _componentName = "login-form";

    // -------------------------------------------------------------------------//
    // React lifecycle functions
    // -------------------------------------------------------------------------//

    constructor(props) {
        super(props);

        this.state = {
            
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
              this.props.history.push('general-statistics')
          }
        });
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

            <div className   = { this._componentName }>
                <Form onSubmit={this.handleSubmit} >
                    <Form.Item>
                    {getFieldDecorator('email', {
                        rules: [{ required: true, message: 'Por favor, insira seu email!' }],
                    })(
                        <Input
                        prefix={<Icon type="email" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Email"
                        />,
                    )}
                    </Form.Item>
                    <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Por favor, insira sua senha!' }],
                    })(
                        <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Senha"
                        />,
                    )}
                    </Form.Item>
                    <Form.Item>
                    <div className   = { this._componentName + '-login-form-remember' }>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(<Checkbox>Lembrar-me</Checkbox>)}

                        <div className   = { this._componentName + '-login-form-forgot' }>
                            <a href="">
                                Esqueci minha senha
                            </a>
                        </div>   
                    </div> 
                    <div className   = { this._componentName + '-login-form-button' }>
                        <Button type="primary" htmlType="submit">
                            Entrar
                        </Button>
                    </div>
                    Ou <a href="/cadastrar">Cadastrar agora</a>
                    </Form.Item>
                </Form>
            </div>     

            
        );
    }
}


// Component props and default prop values
LoginForm.propTypes = {
    text         : PropTypes.string

};

LoginForm.defaultProps = {
    text         : "É um formulario de login de usuário!"
};

const WrappedLoginForm = Form.create()(LoginForm)

 export default WrappedLoginForm 