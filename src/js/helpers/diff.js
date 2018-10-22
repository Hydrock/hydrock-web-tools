import React from 'react';

export default class Diff extends React.Component {
    constructor(props) {
        super(props);
        this.myRef_1 = React.createRef();
        this.myRef_2 = React.createRef();
    }

    parseData = () => {
        const nodeValue = this.myRef_1.current.value;
        let valueArr = nodeValue.split("\n");
        
        let result = [];
        valueArr.forEach((item) => {
            let preResult = item.split(" ");
            result.push(preResult)
        });

        let result2 = result.map((item) => {
            return {
            name: item[0],
            from: item[1],
            to: item[3]
            }
        });
        
        let result3 = '';
        
        result2.forEach((item) => {
            result3 = result3 + appendElement(item);
        })


        function appendElement(obj) {
            let string_start = '<div>';
            let string_end = '</div>';
            let stringName = obj.name + ': ';
        
            let stringVersions;
            if (obj.from === obj.to) {
                stringVersions = `${obj.from} => ${obj.to}`
            } else {
                stringVersions = `<b style="color: red;">${obj.from} => ${obj.to}</b>`
            }
        
            return string_start + stringName + stringVersions + string_end;
        }

        this.myRef_2.current.innerHTML = result3;
    }

    render () {
        return (
            <section className="diff">
                <p>
                    Генирируем разницу в версиях поставки (для работы)
                </p>
                <div className="diff__container">
                    <textarea ref={this.myRef_1}/>
                    <div className="diff__result" ref={this.myRef_2}/>
                </div>
                <div>
                    <button onClick={this.parseData}>Показать различия версий</button>
                </div>
            </section>
        )
    }
}
