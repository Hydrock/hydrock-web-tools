import React from 'react';

const payloadDataFromSfa = {
    "ogrn":"304560907600162",
    // "SFADealIds":[
    //    {
    //       "pxObjClass":"ABR3-Int-UFR-AlfaOffice-NewTaskFrame-Data-SFADealIds",
    //       "productId":"LP_RKO",
    //       "idDealSFA":"OP-138468",
    //       "pyStepPageReference":"AlfaOfficeNewTaskFrameData.SFADealIds(1)"
    //    }
    // ],
    "RegionCode":"23",
    "inn":"560902143810",
    "AttractionChannel":"MB_FIELD_M",
    "BranchId":"MOTG",
    "pxObjClass":"ABR3-Int-UFR-AlfaOffice-NewTaskFrame-Data",
    "ClientName":"Мужиков Олег Петрович (ИП)",
    "ClientManager":"RUM0NKT",
    "PinEQ":"UAD766"
}

const payloadDataFromSfaJson = JSON.stringify(payloadDataFromSfa, null, ' ');

export default class GenerateSFAdataLink extends React.Component {
    state = {
        finishLink: '',
        finishLinkForAlfaGo: '',
        baseUrlforAlfaGo: 'mobilecrm://redirect/',
        hostValue: 'https://testjmb.alfabank.ru/ona/orders/new/company-info',
        // inputValue: '',
        data: payloadDataFromSfaJson,
        referrer: 'mobilesfa',
        userType: 'employee',
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Im9wZW5hY2NvdW50X29uYSIsImlhdCI6MTU4NzU5MTg3MywiZXhwIjoxNTg3Njc4MjczfQ.X4zVuv7iV_oUtWKExxbkV3rUEEP8DRSmsp4N1vOn7mQ'
    }

    copyToClipboard(inputId) {
        /* Get the text field */
        let copyText = document.getElementById(inputId);

        console.log('inputId', inputId)

        console.dir(copyText)
      
        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /*For mobile devices*/
      
        /* Copy the text inside the text field */
        document.execCommand("copy");
      
        /* Alert the copied text */
        alert("Copied the text: " + copyText.value);
    }

    generateLink = (e) => {
        e.preventDefault();

        const {
            baseUrlforAlfaGo,
            hostValue,
            data,
            referrer,
            userType,
            token
        } = this.state;

        let objJsonB64 = Buffer.from(data).toString("base64");

        const finishLink = hostValue + `?userType=${userType}&referrer=${referrer}&token=${token}&data=${objJsonB64}`;
        const finishLinkForAlfaGo = baseUrlforAlfaGo + encodeURIComponent(finishLink);

        this.setState({
            finishLink,
            finishLinkForAlfaGo
        });
    }

    textareaOnChange = (e) => {
        this.setState({ data: e.target.value.trim() });
    }

    render () {
        return (
            <section className="generateSFAdataLink">
                <h4>
                    Генерация ссылки с данными для АО из SFA через AlfaGo
                </h4>
                {/* new part */}
                <div className="row">
                    <label>AlfaGO base url for redirect</label>
                    <input
                        type="text"
                        name="base-url"
                        value={ this.state.baseUrlforAlfaGo }
                        style={ { width: 800 } }
                        onChange={ (e) => {
                            this.setState({
                                baseUrlforAlfaGo: e.target.value
                            })
                        } }
                    />
                </div>
                <div className="row">
                    <label>AO base url base-url</label>
                    <input
                        type="text"
                        name="base-url"
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
                    <label>referrer (query param)</label>
                    <input
                        type="text"
                        name="referrer"
                        value={ this.state.referrer }
                        style={ { width: 800 } }
                        onChange={ (e) => {
                            this.setState({
                                referrer: e.target.value
                            })
                        } }
                    />
                </div>
                <div className="row">
                    <label>userType (query param)</label>
                    <input
                        type="text"
                        name="userType"
                        value={ this.state.userType }
                        style={ { width: 800 } }
                        onChange={ (e) => {
                            this.setState({
                                userType: e.target.value
                            })
                        } }
                    />
                </div>
                <div className="row">
                    <label>token (query param)</label>
                    <input
                        type="text"
                        name="token"
                        value={ this.state.token }
                        style={ { width: 800 } }
                        onChange={ (e) => {
                            this.setState({
                                token: e.target.value
                            })
                        } }
                    />
                </div>
                <div className="row">
                    <label>data (query param)</label>
                    <textarea
                        name="payloadData"
                        value={ this.state.data }
                        onChange={ this.textareaOnChange }
                    />
                </div>
                {/* /new part */}
                
                <div className="row">
                    <button type="button" onClick={ this.generateLink }>
                        Сгенерировать ссылку
                    </button>
                </div>
                <br/>
                <br/>
                <div>
                    <span>
                        Сненерированная ссылка для АО из SFA
                    </span><br/>
                    <span>
                        "const finishLink = hostValue + '?userType=' + userType + '&referrer=' + referrer + '&token=' + token + '&data=' + objJsonB64"
                    </span>
                    <input
                        type="text"
                        id="finishLink"
                        value={ this.state.finishLink }
                        readOnly style={ { width: 800 } }
                    /><br/>
                    <a href={ this.state.finishLink }>
                        { this.state.finishLink }
                    </a><br/>
                    <button type="button" onClick={ () => {
                        this.copyToClipboard('finishLink')
                    } }>
                        Скопировать
                    </button>
                </div>
                <div>
                    <span>
                        Сненерированная ссылка для АО из SFA через AlfaGo
                    </span><br/>
                    <span>
                        const finishLinkForAlfaGo = baseUrlforAlfaGo + encodeURIComponent(finishLink);
                    </span><br/>
                    <input
                        type="text"
                        id="finishLinkForAlfaGo"
                        value={ this.state.finishLinkForAlfaGo }
                        readOnly style={ { width: 800 } }
                    /><br/>
                    <a href={ this.state.finishLinkForAlfaGo }>
                        { this.state.finishLinkForAlfaGo }
                    </a>
                    <button type="button" onClick={ () => {
                        this.copyToClipboard('finishLinkForAlfaGo')
                    } }>
                        Скопировать
                    </button>
                </div>
            </section>
        )
    }
}

/*
https%3A%2F%2Ftestjmb.alfabank.ru%2Fona%2Forders%2Fnew%2Fcompany-info%3F%26referrer%3Dmobilesfa%26data%3DeyJvZ3JuIjoiMzA0NTYwOTA3NjAwMTYyIiwiU0ZBRGVhbElkcyI6W3sicHhPYmpDbGFzcyI6IkFCUjMtSW50LVVGUi1BbGZhT2ZmaWNlLU5ld1Rhc2tGcmFtZS1EYXRhLVNGQURlYWxJZHMiLCJwcm9kdWN0SWQiOiJMUF9SS08iLCJpZERlYWxTRkEiOiJPUC0xMzg0NjgiLCJweVN0ZXBQYWdlUmVmZXJlbmNlIjoiQWxmYU9mZmljZU5ld1Rhc2tGcmFtZURhdGEuU0ZBRGVhbElkcygxKSJ9XSwiUmVnaW9uQ29kZSI6IjIzIiwiaW5uIjoiNTYwOTAyMTQzODEwIiwiQXR0cmFjdGlvbkNoYW5uZWwiOiJNQl9GSUVMRF9NIiwiQnJhbmNoSWQiOiJNT1RHIiwicHhPYmpDbGFzcyI6IkFCUjMtSW50LVVGUi1BbGZhT2ZmaWNlLU5ld1Rhc2tGcmFtZS1EYXRhIiwiQ2xpZW50TmFtZSI6ItCc0YPQttC40LrQvtCyINCe0LvQtdCzINCf0LXRgtGA0L7QstC40YcgKNCY0J8pIiwiQ2xpZW50TWFuYWdlciI6IlJVTTBOS1QiLCJQaW5FUSI6IlVBRDc2NiJ9%26userType%3Demployee%26token%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHRTeXNDb2RlIjoiU0ZBIiwidXNlcm5hbWUiOiJSVU0wTktUIiwiaWF0IjoxNTg3NTcyMjI1LCJleHAiOjE1ODc2NTg2MjV9.jsaunE8eK00pONN1Z-QYf6GYo3mC2KfXdwvfyl-jaos


*/
