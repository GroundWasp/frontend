import React from 'react';
import axios from 'axios';

import './Company.css';

import Card from './Card';

class Application extends React.Component {
    
    constructor(){
        super();
        
        this.state = {
            count : 0,
            company : []
        }        
        this.getList = this.getList.bind(this);
    }
    
    getList(){
        axios.get('http://localhost:4000/company')
            .then(response=> {
                console.log(response.data) 
                this.setState({
                    cout : response.data.cout,
                    company : response.data.company
                });
            }).catch(erorr=>{
            
        });
    }
    
	render(){
        
        const { count , company } = this.state;
        
		return(
			<div>
                <button onClick={this.getList}>데이터 가져오기</button>
                <div>{count}</div>
                <hr style={{ margin : '10px 0' }} />
                <div className="container"></div>
                {company.map((value)=>{
                    console.log(value.name)
                    return <Card info={value} />
                })}                    
                {/*<div>{this.state.count}</div>
                <div>{this.state.company.length > 0 && this.state.company[0].name}</div>*/}
            </div>
		)
	}
}

export default Application;