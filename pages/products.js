import React, { Fragment } from 'react'
import Products from '../components/Products';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import * as actions from '../actions/userActions'

function mapStateToProps(state) {
    return state
  }
  
function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)}
  }

 class ProductPage extends React.Component {
   componentDidMount(){
     this.props.actions.getProducts()
     this.props.actions.getCategories()
   }
   render(){
     const availableCategories =  this.props?.categories.filter((category)=>category.enabled)
        return(
          this.props?.products&&this.props?.products.length? 
        <Products availableCategories={availableCategories} query={this.props.query} {...this.props} />
        :<Fragment />
    ) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductPage ); 
