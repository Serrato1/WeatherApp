import React , { Component } from 'react'



class TopNav extends Component{
  state ={
    searchValue : ""
  }
  onSearch  = (e) => {
    e.preventDefault();
    this.props.querySearch(this.state.searchValue);
  }
  onChange = (e) =>{
    this.setState({searchValue : e.target.value})
  }
  render(){
    return(
      <div className="TopNav">
        <li className="nav-item">
          <div className="item-logo">STORM</div>
        </li>
        <li className="nav-item">
          <div className="item-link">Home</div>
        </li>
        <li className="nav-item">
          <div className="item-link">About</div>
        </li>
        <li className="nav-item">
          <div  className="item-link">Weather </div>
        </li>
        <li className="nav-item">
        </li>
        <li className="nav-item sz-3">
          <form className="search-container" onSubmit={this.onSearch}>
            <input type="text" value={this.state.searchvValue} className="nav-search no-style" placeholder="search a city" onChange={(e)=>{this.onChange(e)}}></input>
            <input type="submit" className="no-style bg-light color-black edges-weak" style={{height:"30px",'margin-left':'-30px','background':'#f2f2f2'}}></input>
          </form>
        </li>
      </div>
    )
  }
}


export default TopNav;
