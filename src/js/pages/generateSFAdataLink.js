import React from 'react';

export default class GenerateSFAdataLink extends React.Component {
    state = {
        hostValue: 'http://ufrmsdev1/ona-ao-ui/orders/new/company-info',
        defaultValue: `{
            "SFADealIds": [
                {
                    "IdDealSFA": "ABR-FW-SCRMFW-WORK-OPPORTUNITY OP-31954",
                    "productId": "rko"
                },
                {
                    "IdDealSFA": "ABR-FW-SCRMFW-WORK-OPPORTUNITY OP-45632",
                    "productId": "salaryProject"
                }
            ],
            "phone": "79202014589",
            "email": "Lena.kutsenko.54@mail.ru",
            "inn": "0274189679",
            "ogrn": "1140280049546",
            "employeesQuantity": "1",
            "annualRevenue": "20000000",
            "salaryFund": "100000"
        }`,
        inputValue: ''
    }

    generateLink = (e) => {
        e.preventDefault();
        let objJsonB64 = Buffer.from(this.state.defaultValue).toString("base64");
        let finalString = this.state.hostValue + '?userType=employee&&data=' + objJsonB64;
        this.setState({
            inputValue: finalString
        })
    }

    textareaOnChange = (e) => {
        this.setState({ defaultValue: e.target.value.trim() })
    }

    render () {
        return (
            <section className="generateSFAdataLink">
                <h4>
                    Генерация ссылки с данными для АО из SFA
                </h4>
                <div className="row">
                    <input
                        type="text"
                        value={ this.state.hostValue }
                        style={ { width: 800 } }
                        onChange={ (e) => {
                            this.setState({
                                hostValue: e.target.value
                            })
                        } }
                    />
                </div>
                <div className="row">
                    <textarea name="data" value={ this.state.defaultValue } onChange={ this.textareaOnChange }></textarea>
                </div>
                <div className="row">
                    <input type="text" value={ this.state.inputValue } readOnly style={ { width: 800 } } />
                </div>
                <div className="row">
                    <button type="button" onClick={ this.generateLink }>
                        Сгенерировать ссылку
                    </button>
                </div>
            </section>
        )
    }
}